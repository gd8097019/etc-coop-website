<template>
	<section class="etcNewsSection">
		<div class="mainContainer">
			<!-- Swiper -->

			<div class="swiper mySwiper">
				<div class="swiper-wrapper">
					<div class="swiper-slide">
						<div class="newsHeading">
							<h2>{{ $t("homepage.blog") }}</h2>
						</div>
						<div class="newsContent" v-if="posts.length > 0">
							<div class="row">
								<div class="col-lg-8 col-md-6 col-sm-12">
									<div class="row">
										<div class="col-12" v-if="posts[0]">
											<router-link
												:to="`/posts/${posts[0].alias}`"
												class="removeUnderline"
											>
												<div class="newsCard newsCardLg">
													<div class="newsCardHeroImg">
														<img
															:src="`/img/posts/featuredImg/${posts[0].image}`"
															alt=""
														/>
													</div>
													<div class="newsImgOverContent">
														<h4>
															{{ posts[0].title }}
														</h4>
														<p>
															{{ posts[0].description }}
														</p>
													</div>
												</div>
											</router-link>
										</div>
										<div class="col-lg-6 col-md-12">
											<router-link
												:to="`/posts/${posts[4].alias}`"
												class="removeUnderline"
											>
												<div class="newsCard">
													<div class="newsCardImg">
														<img
															:src="`/img/posts/featuredImg/${posts[4].image}`"
															alt=""
														/>
													</div>
													<div class="newsCardContent">
														<h5>
															Ethereum Classic Blog <span class="dot">.</span>
															<span>April 4, 2023</span>
														</h5>
														<h4>
															{{ posts[4].title }}
														</h4>
														<p>
															{{ posts[4].description }}
														</p>
													</div>
												</div>
											</router-link>
										</div>
										<div class="col-lg-6 col-md-12">
											<router-link
												:to="`/posts/${posts[5].alias}`"
												class="removeUnderline"
											>
												<div class="newsCard">
													<div class="newsCardImg">
														<img
															:src="`/img/posts/featuredImg/${posts[5].image}`"
															alt=""
														/>
													</div>
													<div class="newsCardContent">
														<h5>
															Ethereum Classic Blog <span class="dot">.</span>
															<span>April 4, 2023</span>
														</h5>
														<h4>
															{{ posts[5].title }}
														</h4>
														<p>
															{{ posts[5].description }}
														</p>
													</div>
												</div>
											</router-link>
										</div>
									</div>
								</div>
								<div class="col-lg-4 col-md-6 col-sm-12">
									<div class="row">
										<div class="col-12">
											<router-link
												:to="`/posts/${posts[1].alias}`"
												class="removeUnderline"
											>
												<div class="newsCard">
													<div class="newsCardImg">
														<img
															:src="`/img/posts/featuredImg/${posts[1].image}`"
															alt=""
														/>
													</div>
													<div class="newsCardContent">
														<h4>
															{{ posts[1].title }}
														</h4>
													</div>
												</div>
											</router-link>
										</div>
										<div class="col-12">
											<router-link
												:to="`/posts/${posts[2].alias}`"
												class="removeUnderline"
											>
												<div class="newsCard">
													<div class="newsCardImg">
														<img
															:src="`/img/posts/featuredImg/${posts[2].image}`"
															alt=""
														/>
													</div>
													<div class="newsCardContent">
														<h4>
															{{ posts[2].title }}
														</h4>
													</div>
												</div>
											</router-link>
										</div>
										<div class="col-12">
											<router-link
												:to="`/posts/${posts[3].alias}`"
												class="removeUnderline"
											>
												<div class="newsCard">
													<div class="newsCardImg">
														<img
															:src="`/img/posts/featuredImg/${posts[3].image}`"
															alt=""
														/>
													</div>
													<div class="newsCardContent">
														<h5>
															Ethereum Classic Blog <span class="dot">.</span>
															<span>April 4, 2023</span>
														</h5>
														<h4>
															{{ posts[3].title }}
														</h4>
														<p>
															{{ posts[3].description }}
														</p>
													</div>
												</div>
											</router-link>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="newsBtns newsBtnsMobile">
							<button class="seeAllNews seeAllNewsMobile">
								{{ $t("homepage.see_all_news") }}
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>
<script>
export default {
	props: ["posts"],

	methods: {
		truncate(source, size) {
			return source.length > size ? source.slice(0, size - 1) + "…" : source;
		},
	},
};
</script>
