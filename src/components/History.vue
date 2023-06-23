<template>
	<section class="aboutOurHistorySection">
		<div class="mainContainer aboutOurHistoryContainer">
			<h6 class="smallHeading">{{ $t("homepage.our_history_badge") }}</h6>
			<div class="row justify-content-between">
				<div class="col-xl-6 col-lg-6 pe-lg-5">
					<div class="aboutHistoryContent">
						<h2>{{ $t("homepage.our_history_title") }}</h2>
						<h6>
							{{ $t("homepage.our_history_description") }}
						</h6>
						<p>
							{{ $t("homepage.our_history_body_paragraph_1") }}
						</p>
						<p>
							{{ $t("homepage.our_history_body_paragraph_2") }}
						</p>
						<p>
							{{ $t("homepage.our_history_body_paragraph_3") }}
						</p>
					</div>
				</div>
				<div class="col-xl-5 col-lg-6 ps-lg-5 moreDetailsContainer">
					<div class="moreDetailsBtns">
						<button>{{ $t("homepage.learn_more") }}</button>
						<button>{{ $t("homepage.our_team") }}</button>
					</div>
					<div class="aboutHistoryImg light">
						<img src="@/assets/images/aboutHistoryImg-light.png" alt="" />
					</div>
					<div class="aboutHistoryImg dark">
						<img src="@/assets/images/aboutHistoryImg-dark.png" alt="" />
					</div>
				</div>
			</div>
		</div>
	</section>
</template>
