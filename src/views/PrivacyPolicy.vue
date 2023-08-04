<template>
	<Layout>
		<template #header>
			<section class="miningNavSection">
				<Navbar></Navbar>
				<div class="mainContainer miningContainer">
					<div class="miningHeroContent">
						<h1>Privacy Policy</h1>
					</div>
				</div>
			</section>
		</template>

		<template #main>
			<section class="p-4 p-md-5 p-lg-5">
				<div class="container">
					<div class="row">
						<div class="col-sm-0 col-md-2 col-lg-2"></div>
						<div class="col-sm-12 col-md-8 col-lg-8">
							<h1 class="pb-4">Privacy Policy</h1>

							<h2>1. Introduction</h2>

							<p>
								Welcome to Ethereum Classic Cooperative, Inc. (“we”, “us”, or
								“our”). We respect your privacy and are committed to protecting
								it through our compliance with this policy.
							</p>

							<p>
								This policy describes the types of information we may collect
								from you or that you may provide when you visit our website
								etccooperative.org (our "Website") and our practices for
								collecting, using, maintaining, protecting, and disclosing that
								information.
							</p>

							<h2>2. Information We Collect About You</h2>

							<p>
								Our website itself does not collect any personal information
								that can be used to identify you, such as your name, postal
								address, e-mail address, or telephone number.
							</p>

							<p>
								However, we do collect information about your internet
								connection, the equipment you use to access our website, and
								usage details. This information is about you but does not
								identify you.
							</p>

							<p>
								Please be aware that our website may contain links to other
								sites, and these other sites may collect personal information
								about you. We are not responsible for the privacy practices of
								these other sites and we encourage you to review the privacy
								policies of each site you visit.
							</p>

							<h2>3. How We Use Your Information</h2>

							<p>
								We do not use personal information to present our website and
								its contents to you. However, we do use information about your
								internet connection and the equipment you use to access our
								website for analytical purposes, such as understanding user
								behavior and trends to improve our website.
							</p>

							<p>We may also use this information to:</p>

							<ul>
								<li>
									Provide you with information or services that you request from
									us;
								</li>
								<li>Fulfill any other purpose for which you provide it;</li>
								<li>
									Notify you about changes to our website or any services we
									offer or provide through it.
								</li>
							</ul>

							<h2>4. Disclosure of Your Information</h2>

							<p>
								We may disclose aggregated information about our users, and
								information that does not identify any individual, without
								restriction. We may disclose personal information that we
								collect or you provide as described in this privacy policy.
							</p>

							<h2>5. Changes to Our Privacy Policy</h2>

							<p>
								It is our policy to post any changes we make to our privacy
								policy on this page. If we make material changes to how we treat
								our users' personal information, we will notify you by email to
								the email address specified in your account or through a notice
								on the website home page.
							</p>

							<br />

							<p><b>Ethereum Classic Cooperative Inc </b></p>
							<p><b>1207 Delaware Ave #541</b></p>
							<p><b>Wilmington, DE 19806</b></p>
							<p><b>USA</b></p>
						</div>
						<div class="col-sm-0 col-md-2 col-lg-2"></div>
					</div>
				</div>
			</section>
		</template>
	</Layout>
</template>

<script>
import Layout from "@/layout/Layout.vue";
import Navbar from "@/components/Navbar.vue";

export default {
	components: {
		Layout,
		Navbar,
	},
};
</script>
