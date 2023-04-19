<template>
	<section class="newsletterSection">
		<div class="mainContainer newsletterContainer">
			<div class="row justify-content-between">
				<div class="col-lg-5 col-md-6 col-sm-12">
					<h2>{{ $t("homepage.sign_up_title") }}</h2>
					<p>{{ $t("homepage.sign_up_description") }}</p>
				</div>
				<div class="col-lg-5 col-md-6 col-sm-12 ps-lg-5">
					<div class="inputGroup">
						<input type="text" placeholder="Enter your email" />
						<button>{{ $t("homepage.sign_up_subscribe") }}</button>
					</div>
					<span>
						{{ $t("homepage.sign_up_privacy_title") }}
						<a href="">{{ $t("homepage.sign_up_privacy_link_title") }}</a>
					</span>
				</div>
			</div>
		</div>
	</section>
</template>
