<template>
	<Layout>
		<template #header>
			<section class="miningNavSection">
				<Navbar></Navbar>
				<div class="mainContainer miningContainer">
					<div class="miningHeroContent">
						<h1>{{ $t("mining.header") }}</h1>
					</div>
				</div>
			</section>
		</template>

		<template #main>
			<!-- mining in etc paragraphs section starts here -->
			<section class="miningParaSection">
				<div class="miningParaContainer">
					<p>
						{{ $t("mining.p1") }}
					</p>
				</div>
			</section>
			<!-- mining in etc paragraphs section ends here -->

			<!-- what you need section starts here -->
			<section class="whatYouNeedSection">
				<div class="whatYouNeedContainer">
					<span class="secBadge">{{ $t("mining.mining_badge") }}</span>
					<div class="heading">
						<h1>{{ $t("mining.mining_title") }}</h1>
						<p>
							{{ $t("mining.mining_body") }}
						</p>
					</div>
					<div class="whatYouNeedContent">
						<div class="whatYouNeedInnerContent">
							<div class="whatYouNeedText text-end">
								<h4>{{ $t("mining.what_you_need_1_title") }}</h4>
								<p>
									{{ $t("mining.what_you_need_1_body") }}
								</p>
							</div>
							<div class="whatYouNeedImg">
								<img src="@/assets/images/etc-start.png" alt="" />
							</div>
							<div class="whatYouNeedText text-start">
								<h4>{{ $t("mining.what_you_need_2_title") }}</h4>
								<p>
									{{ $t("mining.what_you_need_2_body") }}
								</p>
							</div>
						</div>
						<div class="whatYouNeedText text-center">
							<h4>{{ $t("mining.what_you_need_3_title") }}</h4>
							<p>
								{{ $t("mining.what_you_need_3_body") }}
							</p>
						</div>
					</div>
				</div>
			</section>
			<!-- what you need section ends here -->

			<!-- popular mining starts here -->
			<div class="popularMining">
				<p>
					{{ $t("mining.p2") }}
				</p>
			</div>
			<!-- popular mining ends here -->
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
