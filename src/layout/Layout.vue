<template>
	<slot name="header"></slot>

	<slot name="main"></slot>

	<!-- newsletter section starts here -->
	<Newsletter />
	<!-- newsletter section ends here -->

	<!-- footer starts here -->
	<Footer />
	<!-- footer ends here -->
</template>

<script>
import Newsletter from "@/components/Newsletter.vue";
import Footer from "@/components/Footer.vue";

export default {
	name: "Layout",
	components: {
		Newsletter,
		Footer,
	},
};
</script>
