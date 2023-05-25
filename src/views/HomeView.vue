<template>
	<Layout>
		<template #header>
			<section class="etcCoopNavSection">
				<Navbar />
				<Hero />
			</section>
		</template>

		<template #main>
			<!-- news section starts here -->
			<Blog :posts="posts" />
			<!-- news section ends here -->

			<!-- About our History section starts here -->
			<History />
			<!-- About our History section ends here -->
		</template>
	</Layout>
</template>
<script>
import Layout from "@/layout/Layout.vue";
import Hero from "@/components/Hero.vue";
import Navbar from "@/components/Navbar.vue";
import Blog from "@/components/Blog.vue";
import History from "@/components/History.vue";

export default {
	components: {
		Layout,
		Hero,
		Navbar,
		Blog,
		History,
	},
	data() {
		return {
			posts: [],
		};
	},
	watch: {
		"$i18n.locale": function (newLang) {
			localStorage.setItem("last-locale", newLang);

			import(`@/contents/posts.${newLang}.json`).then((module) => {
				this.posts = module.default;
			});
		},
	},
	mounted() {
		const locale = this.$i18n.locale;

		import(`@/contents/posts.home.${locale}.json`).then((module) => {
			this.posts = module.default;
		});
	},
};
</script>
