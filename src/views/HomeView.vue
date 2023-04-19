<template>
	<section class="etcCoopNavSection">
		<Navbar />
		<Hero />
	</section>

	<!-- news section starts here -->
	<Blog :posts="posts" />
	<!-- news section ends here -->

	<!-- About our History section starts here -->
	<History />
	<!-- About our History section ends here -->

	<!-- newsletter section starts here -->
	<Newsletter />
	<!-- newsletter section ends here -->

	<!-- footer starts here -->
	<Footer />
	<!-- footer ends here -->
</template>
<script>
import Hero from "@/components/Hero.vue";
import Navbar from "@/components/Navbar.vue";
import Blog from "@/components/Blog.vue";
import History from "@/components/History.vue";
import Newsletter from "@/components/Newsletter.vue";
import Footer from "@/components/Footer.vue";

export default {
	components: {
		Hero,
		Navbar,
		Blog,
		History,
		Newsletter,
		Footer,
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
