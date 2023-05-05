<template>
	<section class="etcNewsSection">
		<div class="mainContainer">
			<!-- Swiper -->
			<div class="swiper mySwiper">
				<div class="swiper-wrapper">
					<div
						v-for="(post, pkey) in postPerTab"
						:key="pkey"
						class="swiper-slide"
					>
						<div class="newsHeading">
							<h2>{{ $t("homepage.blog") }}</h2>
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
	data() {
		return {
			postPerTab: [],
		};
	},
	watch: {
		posts(val, oldval) {
			const width = window && window.innerHeight ? window.innerWidth : -1;
			if (width > 568) {
				this.postPerTab = this.chunkArray(val, 6);
			} else {
				this.postPerTab = this.chunkArray(val, 5);
			}
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
