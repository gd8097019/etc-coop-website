<template>
	<Layout>
		<template #header>
			<section class="miningNavSection">
				<Navbar></Navbar>
				<div class="mainContainer miningContainer">
					<div class="miningHeroContent">
						<h1>COOKIE POLICY</h1>
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
							<h1 class="pb-4">COOKIE POLICY OF ETCCOOPERATIVE.ORG</h1>

							<h2>1. Introduction</h2>

							<p>
								Our website, etccooperative.org (hereinafter: "the website")
								uses cookies and similar technologies (for convenience, all such
								technologies are referred to as "cookies"). Cookies are also
								placed by third parties we have engaged. In the document below,
								we inform you about the use of cookies on our website.
							</p>

							<h2>2. What are cookies?</h2>

							<p>
								A cookie is a small simple file that is sent along with pages of
								this website and stored by your browser on the hard drive of
								your computer or another device. The information stored therein
								may be returned to our servers or to the servers of the relevant
								third parties during a subsequent visit.
							</p>

							<h2>3. What are scripts?</h2>

							<p>
								A script is a piece of program code that is used to make our
								website function properly and interactively. This code is
								executed on our server or on your device.
							</p>

							<h2>4. Consent</h2>

							<p>
								When you visit our website for the first time, we will show you
								a pop-up with an explanation about cookies. As soon as you click
								on "All cookies", you consent to us using all cookies and
								plug-ins as described in the pop-up and this cookie statement.
								You can disable the use of cookies via your browser, but please
								note that our website may no longer work properly.
							</p>

							<h2>5. Third parties</h2>

							<p>
								We have made agreements about the use of cookies with other
								companies that place cookies. However, we cannot guarantee that
								these third parties handle your personal data in a reliable or
								secure manner. Parties such as Google are to be considered as
								independent data controllers. We recommend that you read the
								privacy statements of these companies.
							</p>

							<h2>6. Cookies</h2>

							<p>6.1 Technical or functional cookies</p>

							<p>
								Some cookies ensure that certain parts of the website work
								properly and that your user preferences remain known. By placing
								functional cookies, we make it easier for you to visit our
								website.
							</p>

							<p>6.2 Analytical cookies</p>

							<p>
								We use analytical cookies to optimize the website experience for
								our users. With these analytical cookies, we get insights into
								the usage of our website.
							</p>

							<h2>7. Enabling/disabling and deleting cookies</h2>

							<p>
								You can use your internet browser to automatically or manually
								delete cookies. You can also specify that certain cookies may
								not be placed. Another option is to change the settings of your
								internet browser so that you receive a message each time a
								cookie is placed. For more information about these options,
								please refer to the instructions in the Help section of your
								browser.
							</p>

							<p>8. Contact details</p>

							<p>
								For questions and/or comments about our cookie policy and this
								statement, please contact us using the following contact
								details:
							</p>

							<p><b>Ethereum Classic Cooperative Inc</b></p>
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
