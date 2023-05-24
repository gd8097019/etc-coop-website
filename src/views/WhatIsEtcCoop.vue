<template>
	<Layout>
		<template #header>
			<section class="whatIsEtcCoopNavSection">
				<Navbar></Navbar>
				<div class="mainContainer whatIsEtcCoopContainer">
					<div class="whatIsEtcCoopHeroContent">
						<h1>What is The ETC Cooperative?</h1>
					</div>
				</div>
			</section>
		</template>

		<template #main>
			<!-- developing for etc paragraphs section starts here -->
			<section class="whatIsEtcCoopParaSection">
				<div class="whatIsEtcCoopParaContainer">
					<p>
						The <b>Ethereum Classic Cooperative (ETC Cooperative)</b> is a
						non-profit organization that was established in 2017 with the aim of
						supporting and promoting the development of the Ethereum Classic
						(ETC) blockchain platform.
						<br />
						<br />
						The ETC Cooperative is funded by donations from individuals and
						organizations that support the ETC community, and it is governed by
						a board of directors who oversee the organization's activities and
						initiatives.
						<br />
						<br />
						The main focus of the ETC Cooperative is to support the development
						of the ETC ecosystem by providing funding, resources, and support
						for developers, researchers, and other stakeholders. This includes
						grants programs, research projects, and supporting the development
						of tools and infrastructure for the ETC platform.
						<br />
						<br />
						The ETC Cooperative also plays a role in promoting the use of ETC as
						a cryptocurrency and raising awareness of its potential benefits,
						such as its security and immutability features.
						<br />
						<br />
						Overall, the ETC Cooperative is a key player in the ETC community,
						working to support and promote the development of the ETC platform
						and its ecosystem.
					</p>
				</div>
			</section>
			<!-- developing for etc paragraphs section ends here -->

			<!-- mission of etc section starts here -->
			<section class="missionOfEtcSection">
				<div class="missionOfEtcContainer">
					<span class="secBadge">Mission</span>
					<div class="heading">
						<h1>Mission of the ETC Cooperative</h1>
						<p>
							The mission of the ETC Cooperative is to steward the development
							of the Ethereum Classic protocol and to support the growth of a
							mature ecosystem around that protocol. There are three pillars to
							this mission
						</p>
					</div>
					<div class="row missionOfEtcCards">
						<div class="col-lg-4 col-md-6 col-sm-12">
							<div class="missionOfEtcCard">
								<img src="@/assets/images/accelerate-icon.svg" alt="" />
								<h4>Accelerate</h4>
								<p>
									Accelerate the adoption of ETC technology by individuals and
									enterprises through effective branding, marketing, and
									education.
								</p>
							</div>
						</div>
						<div class="col-lg-4 col-md-6 col-sm-12">
							<div class="missionOfEtcCard">
								<img src="@/assets/images/foster-icon.svg" alt="" />
								<h4>Foster</h4>
								<p>
									Foster collaboration between ecosystem participants including
									developers, miners, investors, enterprises, and end-users.
								</p>
							</div>
						</div>
						<div class="col-lg-4 col-md-6 col-sm-12">
							<div class="missionOfEtcCard">
								<img src="@/assets/images/governance-icon.svg" alt="" />
								<h4>Governance</h4>
								<p>
									Mature governance and transparency – efficient and transparent
									governance framework, including the use of funds.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
			<!-- mission of etc section ends here -->

			<!-- history of etc cooperative starts here -->
			<section class="historyOfEtcSection">
				<div class="historyOfEtcContainer">
					<span class="secBadge">History</span>
					<div class="heading">
						<h1>History of the ETC Cooperative</h1>
					</div>
					<div class="historyOfEtcMainContent">
						<img
							class="historyOfEtcCurvedLines"
							src="@/assets/images/curve-lines.png"
							alt=""
						/>
						<div class="historyOfEtcContent">
							<div class="historyText">
								<span class="circle"></span>
								<p>
									ETC incorporated in the State of Delaware
									<span>(7th September 2017)</span>
								</p>
							</div>
							<div class="historyText">
								<span class="circle"></span>
								<p>
									That application was filed with the IRS
									<span>(10th May 2018)</span>
								</p>
							</div>
							<div class="historyText">
								<span class="circle"></span>
								<p>
									The ETC Coop was granted 501(c)(3) public charity status
									<span>(14th November 2018)</span>
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
			<!-- history of etc cooperative ends here -->

			<!-- donations to etc section starts here -->
			<section class="donationsToEtcSection">
				<div class="donationsToEtcContainer">
					<p>
						Donations to ETC Coop are tax deductible under IRC Section 170 for
						US taxpayers, both individual and corporate. Enterprises investing
						in infrastructure or other “public goods” within the ETC ecosystem
						can do so in a more tax-efficient manner by donating to the ETC Coop
						rather than investing directly. Private foundations often fulfill a
						similar function in other ICO-funded cryptocurrency projects, along
						with holding ICO funds, trademarks, driving roadmap, and other
						centralized functions.
						<br />
						<br />
						In that sense, ETC is quite unique (along with Bitcoin) in having
						none of those centralizing functions. There is no ETC Foundation
						(very intentionally). There was no ICO for ETC. The abandoned chain
						we now call ETC was picked up and kept alive by volunteers following
						the DAO Fork.
						<br />
						<br />
						Just over a year later the ETC Coop was formed, to provide some
						much-needed (but non-exclusive) funding and support for the ETC
						ecosystem. There is nothing “official” in ETC, including the role of
						the ETC Coop within the ecosystem. The ETC Coop and its staff have
						no special influence within ETC other than whatever respect our
						actions have earned. Earning that respect is a “forever process”.
						Any other group of individuals or other legal entity could displace
						the ETC Coop tomorrow if we cease to be good citizens.
					</p>
				</div>
			</section>
			<!-- donations to etc section ends here -->

			<!-- etc learn more section starts here -->
			<section class="learnMoreEtcSection">
				<div class="learnMoreEtcContainer">
					<h2>Wanna learn more?</h2>
					<p>
						Discover Ethereum Classic at the
						<a href="">ethereumclassic.org</a> website.
					</p>
				</div>
			</section>
			<!-- etc learn more section ends here -->
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
