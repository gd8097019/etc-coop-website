<template>
	<section class="etcNewsSection">
		<div class="mainContainer">
			<!-- Swiper -->
			<div class="swiper mySwiper">
				<div class="newsSwiperBtns">
					<div class="swiperSlideBtn swiper-button-prev">
						<img src="@/assets/images/arrow-left.svg" alt="" />
					</div>
					<div class="swiperSlideBtn swiper-button-next">
						<img src="@/assets/images/arrow-right.svg" alt="" />
					</div>
				</div>
				<div class="swiper-pagination"></div>
				<div class="swiper-wrapper">
					<div
						v-for="(post, pkey) in postPerTab"
						:key="pkey"
						class="swiper-slide"
					>
						<div class="newsHeading">
							<h2>Blog</h2>
							<div class="newsBtns">
								<button class="seeAllNews">See All News</button>
							</div>
						</div>
						<div class="newsContent">
							<div class="row">
								<div class="col-lg-8 col-md-6 col-sm-12">
									<div class="row">
										<div class="col-12" v-if="post[0]">
											<router-link
												:to="`/posts/${post[0].alias}`"
												class="removeUnderline"
											>
												<div class="newsCard newsCardLg">
													<div class="newsCardHeroImg">
														<img
															:src="`/img/posts/featuredImg/${post[0].image}`"
															alt=""
														/>
													</div>
													<div class="newsImgOverContent">
														<h4>
															{{ post[0].title }}
														</h4>
														<p>
															{{ post[0].description }}
														</p>
													</div>
												</div>
											</router-link>
										</div>
										<div v-if="post[1]" class="col-lg-6 col-md-12">
											<router-link
												:to="`/posts/${post[1].alias}`"
												class="removeUnderline"
											>
												<div class="newsCard">
													<div class="newsCardImg">
														<img
															:src="`/img/posts/featuredImg/${post[1].image}`"
															alt=""
														/>
													</div>
													<div class="newsCardContent">
														<h5>
															Ethereum Classic Blog <span class="dot">.</span>
															<span>April 4, 2023</span>
														</h5>
														<h4>
															{{ post[1].title }}
														</h4>
														<p>
															{{ post[1].description }}
														</p>
													</div>
												</div>
											</router-link>
										</div>

										<div v-if="post[2]" class="col-lg-6 col-md-12">
											<router-link
												:to="`/posts/${post[2].alias}`"
												class="removeUnderline"
											>
												<div class="newsCard">
													<div class="newsCardImg">
														<img
															:src="`/img/posts/featuredImg/${post[2].image}`"
															alt=""
														/>
													</div>
													<div class="newsCardContent">
														<h5>
															Ethereum Classic Blog <span class="dot">.</span>
															<span>April 4, 2023</span>
														</h5>
														<h4>
															{{ post[2].title }}
														</h4>
														<p>
															{{ post[2].description }}
														</p>
													</div>
												</div>
											</router-link>
										</div>
									</div>
								</div>
								<div class="col-lg-4 col-md-6 col-sm-12">
									<div class="row">
										<div v-if="post[3]" class="col-12">
											<router-link
												:to="`/posts/${post[3].alias}`"
												class="removeUnderline"
											>
												<div class="newsCard">
													<div class="newsCardImg">
														<img
															:src="`/img/posts/featuredImg/${post[3].image}`"
															alt=""
														/>
													</div>
													<div class="newsCardContent">
														<h4>
															{{ post[3].title }}
														</h4>
													</div>
												</div>
											</router-link>
										</div>
										<div v-if="post[4]" class="col-12">
											<router-link
												:to="`/posts/${post[4].alias}`"
												class="removeUnderline"
											>
												<div class="newsCard">
													<div class="newsCardImg">
														<img
															:src="`/img/posts/featuredImg/${post[4].image}`"
															alt=""
														/>
													</div>
													<div class="newsCardContent">
														<h4>
															{{ post[4].title }}
														</h4>
													</div>
												</div>
											</router-link>
										</div>
										<div v-if="post[5]" class="col-12">
											<router-link
												:to="`/posts/${post[5].alias}`"
												class="removeUnderline"
											>
												<div class="newsCard">
													<div class="newsCardImg">
														<img
															:src="`/img/posts/featuredImg/${post[5].image}`"
															alt=""
														/>
													</div>
													<div class="newsCardContent newsCardContent2">
														<h5>
															Ethereum Classic Blog <span class="dot">.</span>
															<span>April 4, 2023</span>
														</h5>
														<h4>
															{{ post[5].title }}
														</h4>
														<p>
															{{ post[5].description }}
														</p>
													</div>
												</div>
											</router-link>
										</div>
									</div>
								</div>
							</div>
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
	data() {
		return {
			postPerTab: [],
		};
	},
	watch: {
		posts(val, oldval) {
			var swiper = new window.Swiper(".mySwiper", {
				pagination: {
					el: ".swiper-pagination",
					type: "progressbar",
				},
				navigation: {
					nextEl: ".swiper-button-next",
					prevEl: ".swiper-button-prev",
				},
			});

			this.postPerTab = this.chunkArray(val, 6);
		},
	},
	methods: {
		chunkArray(array, chunkSize = 6) {
			let chunked = [];
			for (let i = 0; i < array.length; i += chunkSize) {
				const chunk = array.slice(i, i + chunkSize);
				chunked.push(chunk);
			}
			return chunked;
		},
	},
};
</script>
