<template>
	<Layout>
		<template #header>
			<section class="whatIsEtcNavSection">
				<Navbar></Navbar>
				<div class="mainContainer whatIsEtcContainer">
					<div class="whatIsEtcHeroContent">
						<h1>{{ $t("ethereum-classic.header") }}</h1>
					</div>
				</div>
			</section>
		</template>

		<template #main>
			<!-- what is etc paragraphs section starts here -->
			<section class="whatIsEtcParaSection">
				<div class="whatIsEtcParaContainer">
					<div class="row m-0">
						<div class="col-lg-6">
							<p>
								{{ $t("ethereum-classic.p1") }}
								<br />
								<br />
								{{ $t("ethereum-classic.p2") }}
							</p>
						</div>
						<div class="col-lg-6">
							<p>
								{{ $t("ethereum-classic.p3") }}
								<br />
								<br />
								{{ $t("ethereum-classic.p4") }}
							</p>
						</div>
					</div>
				</div>
			</section>
			<!-- what is etc paragraphs section ends here -->

			<!-- etc classic section starts here -->
			<section class="etcClassicSection">
				<div class="etcClassicContainer">
					<div class="row m-0">
						<div class="col-lg-6">
							<img src="@/assets/images/what-is-etc-img.png" alt="" />
						</div>
						<div class="col-lg-6 justify-content-lg-end">
							<p>
								{{ $t("ethereum-classic.p5") }}
								<br />
								<br />
								{{ $t("ethereum-classic.p6") }}
							</p>
						</div>
					</div>
				</div>
			</section>
			<!-- etc classic section ends here -->

			<!-- etc learn more section starts here -->
			<section class="etcLearnMoreSection">
				<div class="etcLearnMoreContainer">
					<h2>{{ $t("ethereum-classic.wanna_learn_more") }}</h2>
					<p>
						{{ $t("ethereum-classic.discover_etherium_classic_1") }}
						<a href="https://ethereumclassic.org">ethereumclassic.org</a>
						{{ $t("ethereum-classic.discover_etherium_classic_2") }}
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
