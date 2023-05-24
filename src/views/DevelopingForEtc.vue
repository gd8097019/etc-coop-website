<template>
	<Layout>
		<template #header>
			<section class="developingNavSection">
				<Navbar></Navbar>
				<div class="mainContainer developingContainer">
					<div class="developingHeroContent">
						<h1>Developing for ETC</h1>
					</div>
				</div>
			</section>
		</template>

		<template #main>
			<!-- developing for etc paragraphs section starts here -->
			<section class="developingParaSection">
				<div class="developingParaContainer">
					<p>
						As Ethereum Classic (ETC) is an EVM standard blockchain, developing
						for it is similar to developing for other blockchain platforms. The
						platform provides a set of tools and technologies that enable
						developers to create decentralized applications (DApps) and smart
						contracts that can run on the ETC blockchain.
					</p>
				</div>
			</section>
			<!-- developing for etc paragraphs section ends here -->

			<!-- developing for etc section starts here -->
			<section class="developingForEtcSection">
				<div class="developingForEtcContainer">
					<div class="row align-items-center">
						<div class="col-lg-6 col-md-12">
							<span class="secBadge">Languages</span>
							<h2>Solidity for developing on ETC</h2>
							<p>
								One of the main programming languages used for developing on ETC
								is <b>Solidity</b>, which is also used for Ethereum development.
								Solidity is a high-level programming language that is designed
								specifically for writing smart contracts that can be executed on
								the ETC blockchain.
								<br />
								<br />
								In addition to Solidity, there are other programming languages
								and frameworks that can be used for ETC development, such as
								<b>Vyper</b>, <b>Truffle</b>, and <b>Embark</b>. These tools
								provide developers with a range of options for building DApps
								and smart contracts on the ETC platform.
							</p>
						</div>
						<div class="col-lg-6 col-md-12">
							<img
								class="solidityImg light"
								src="@/assets/images/solidity-light.png"
								alt=""
							/>
							<img
								class="solidityImg dark"
								src="@/assets/images/solidity-dark.png"
								alt=""
							/>
						</div>
					</div>
				</div>
			</section>

			<section class="developingForEtcSection blockchainSection">
				<div class="developingForEtcContainer">
					<div class="row align-items-center">
						<div class="col-lg-6 col-md-12"></div>
						<div class="col-lg-6 col-md-12">
							<span class="secBadge">Explorer</span>
							<h2>ETC Blockchain Explorer</h2>
							<p>
								Developers can also use the ETC blockchain explorer to test and
								deploy their DApps and smart contracts on the network. The ETC
								blockchain explorer provides a user-friendly interface for
								interacting with the blockchain, monitoring transactions, and
								accessing other useful information.
							</p>
						</div>
					</div>
				</div>
			</section>

			<section class="developingForEtcSection communitySection">
				<div class="developingForEtcContainer">
					<div class="row align-items-center">
						<div class="col-lg-6 col-md-12">
							<span class="secBadge">Community</span>
							<h2>ETC Community</h2>
							<p>
								The ETC community also offers various resources and support for
								developers who are interested in developing on the platform.
								These resources include documentation, tutorials, forums, and
								developer communities that can provide guidance and support
								throughout the development process.
							</p>
						</div>
						<div class="col-lg-6 col-md-12">
							<img
								class="communityImg"
								src="@/assets/images/community.png"
								alt=""
							/>
						</div>
					</div>
				</div>
			</section>
			<!-- developing for etc section ends here -->

			<!-- developing requirement starts here -->
			<div class="developingRequirement">
				<p>
					Overall, developing for ETC requires a good understanding of
					blockchain technology, programming languages, and smart contract
					development. However, with the right tools and resources, developers
					can create powerful and innovative DApps and smart contracts on the
					ETC blockchain.
				</p>
			</div>
			<!-- developing requirement ends here -->
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
