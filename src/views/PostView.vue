<template>
	<Head>
		<title>{{ title }}</title>
		<meta name="description" :content="description" />

		<!-- Social -->
		<meta property="og:title" :content="title" />
		<meta property="og:description" :content="description" />
		<meta
			property="og:image"
			:content="`https://etccooperative.org/img/posts/featuredImg/${img}`"
		/>

		<!-- Twitter -->
		<meta name="twitter:title" :content="title" />
		<meta name="twitter:description" :content="description" />
		<meta
			name="twitter:image"
			:content="`https://etccooperative.org/img/posts/featuredImg/${img}`"
		/>
		<meta name="twitter:card" content="summary_large_image" />
	</Head>

	<Layout>
		<template #header>
			<section class="newsDetailNavSection">
				<Navbar></Navbar>
			</section>
		</template>

		<template #main>
			<div class="container">
				<div class="row">
					<div class="col-md-10 offset-md-1">
						<div class="py-4">
							<h1>{{ title }}</h1>
						</div>
						<div>
							<img
								:src="`/img/posts/featuredImg/${img}`"
								class="img-fluid"
								alt="Blog main image"
							/>
						</div>
						<div class="py-5">
							<p v-html="body"></p>
						</div>
					</div>
				</div>
			</div>
		</template>
	</Layout>
</template>

<script>
import { Head } from "@vueuse/head";
import Layout from "@/layout/Layout.vue";
import Navbar from "@/components/Navbar.vue";

export default {
	components: {
		Head,
		Layout,
		Navbar,
	},
	data() {
		return {
			body: null,
			title: null,
			description: null,
			img: null,
			author: null,
			tags: [],
		};
	},
	watch: {
		"$i18n.locale": function (newLang) {
			localStorage.setItem("last-locale", newLang);
			this.getContent(newLang);
		},
	},
	methods: {
		getContent(locale) {
			let sourceFile = `${this.$route.params.alias}/index.md`;

			import(`@/contents/posts/${locale}/${sourceFile}`)
				.then((module) => {
					const { html, meta } = this.md(module.default);
					this.body = html;
					this.title = meta.title || null;
					this.description =
						meta.description || "See latest post from ETC Cooperative";
					this.img = meta.featuredImage || null;
					this.author = meta.author || null;
					this.tags = meta.tags || [];
				})
				.catch(() => {
					// load default locale (en)
					import(`@/contents/posts/en/${sourceFile}`).then((module) => {
						const { html, meta } = this.md(module.default);
						this.body = html;
						this.title = meta.title || null;
						this.description =
							meta.description || "See latest post from ETC Cooperative";
						this.img = meta.featuredImage || null;
						this.author = meta.author || null;
						this.tags = meta.tags || [];
					});
				});
		},
	},
	mounted() {
		const locale = this.$i18n.locale;
		this.getContent(locale);
	},
};
</script>
