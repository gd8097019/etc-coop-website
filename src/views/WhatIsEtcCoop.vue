<template>
	<Layout>
		<template #header>
			<section class="whatIsEtcCoopNavSection">
				<Navbar></Navbar>
				<div class="mainContainer whatIsEtcCoopContainer">
					<div class="whatIsEtcCoopHeroContent">
						<h1>{{ $t("what-is-etc-coop.header") }}</h1>
					</div>
				</div>
			</section>
		</template>

		<template #main>
			<!-- developing for etc paragraphs section starts here -->
			<section class="whatIsEtcCoopParaSection">
				<div class="whatIsEtcCoopParaContainer">
					<p v-html="$t('what-is-etc-coop.p1')"></p>
				</div>
			</section>
			<!-- developing for etc paragraphs section ends here -->

			<!-- mission of etc section starts here -->
			<section class="missionOfEtcSection">
				<div class="missionOfEtcContainer">
					<span class="secBadge">{{
						$t("what-is-etc-coop.mission_badge")
					}}</span>
					<div class="heading">
						<h1>{{ $t("what-is-etc-coop.mission_title") }}</h1>
						<p>
							{{ $t("what-is-etc-coop.mission_body") }}
						</p>
					</div>
					<div class="row missionOfEtcCards">
						<div class="col-lg-4 col-md-6 col-sm-12">
							<div class="missionOfEtcCard">
								<img src="@/assets/images/accelerate-icon.svg" alt="" />
								<h4>{{ $t("what-is-etc-coop.accelerate_title") }}</h4>
								<p>
									{{ $t("what-is-etc-coop.accelerate_body") }}
								</p>
							</div>
						</div>
						<div class="col-lg-4 col-md-6 col-sm-12">
							<div class="missionOfEtcCard">
								<img src="@/assets/images/foster-icon.svg" alt="" />
								<h4>{{ $t("what-is-etc-coop.foster_title") }}</h4>
								<p>
									{{ $t("what-is-etc-coop.foster_body") }}
								</p>
							</div>
						</div>
						<div class="col-lg-4 col-md-6 col-sm-12">
							<div class="missionOfEtcCard">
								<img src="@/assets/images/governance-icon.svg" alt="" />
								<h4>{{ $t("what-is-etc-coop.governance_title") }}</h4>
								<p>
									{{ $t("what-is-etc-coop.governance_body") }}
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
					<span class="secBadge">{{
						$t("what-is-etc-coop.history_badge")
					}}</span>
					<div class="heading">
						<h1>{{ $t("what-is-etc-coop.history_title") }}</h1>
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
								<p v-html="$t('what-is-etc-coop.history_1')"></p>
							</div>
							<div class="historyText">
								<span class="circle"></span>
								<p v-html="$t('what-is-etc-coop.history_2')"></p>
							</div>
							<div class="historyText">
								<span class="circle"></span>
								<p v-html="$t('what-is-etc-coop.history_3')"></p>
							</div>
						</div>
					</div>
				</div>
			</section>
			<!-- history of etc cooperative ends here -->

			<!-- donations to etc section starts here -->
			<section class="donationsToEtcSection">
				<div class="donationsToEtcContainer">
					<p v-html="$t('what-is-etc-coop.donation_p')"></p>
				</div>
			</section>
			<!-- donations to etc section ends here -->

			<!-- etc learn more section starts here -->
			<section class="learnMoreEtcSection">
				<div class="learnMoreEtcContainer">
					<h2>{{ $t("what-is-etc-coop.wanna_learn_more") }}</h2>
					<p>
						{{ $t("what-is-etc-coop.discover_etherium_classic_1") }}
						<a href="">ethereumclassic.org</a>
						{{ $t("what-is-etc-coop.discover_etherium_classic_2") }}
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
