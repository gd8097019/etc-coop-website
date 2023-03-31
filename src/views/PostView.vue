<template>
	<Head>
		<title>{{ title }}</title>
		<meta name="description" :content="description" />

		<!-- Social -->
		<meta property="og:title" :content="title" />
		<meta
			property="og:description"
			content="See latest post from ETC Cooperative"
		/>
		<meta
			property="og:image"
			:content="`https://etccooperative.org/img/posts/featuredImg/${img}`"
		/>

		<!-- Twitter -->
		<meta name="twitter:title" :content="title" />
		<meta
			name="twitter:description"
			content="See latest post from ETC Cooperative"
		/>
		<meta
			name="twitter:image"
			:content="`https://etccooperative.org/img/posts/featuredImg/${img}`"
		/>
		<meta name="twitter:card" content="summary_large_image" />
	</Head>
	<div style="float: right">
		<select
			id="sel"
			class="uppercase rounded font-roboto bg-background font-semibold text-textColor font16 border-0 selectMenu py-2 px-1 hidden"
			v-model="$i18n.locale"
		>
			<option
				class="uppercase rounded bg-background border-0"
				key="`locale-${0}`"
				value="cn"
			>
				占位符符
			</option>
			<option
				class="uppercase rounded bg-background border-0"
				key="`locale-${1}`"
				value="en"
			>
				English
			</option>
		</select>
	</div>
	<div>
		<h1>{{ title }}</h1>
		<p v-html="body"></p>
	</div>
</template>
<script>
import { Head } from "@vueuse/head";

export default {
	components: {
		Head,
	},
	data() {
		return {
			body: null,
			title: null,
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
