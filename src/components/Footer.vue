<template>
	<footer class="etcCoopFooter">
		<div class="etcFooterContainer">
			<div class="row">
				<div class="col-lg-3 col-md-12">
					<div class="footerLogoCont">
						<a href="">
							<img
								class="footerLogo"
								src="@/assets/images/etc-logo-footer.svg"
								alt=""
							/>
							<img
								class="footerLogoDark"
								src="@/assets/images/etc-logo.svg"
								alt=""
							/>
						</a>
					</div>
					<div class="etcCoopNews">
						<ul>
							<li>
								<router-link to="/news">ETC Coop News</router-link>
							</li>
						</ul>
					</div>
					<div class="socialMediaIcons">
						<a href="https://twitter.com/ETCCooperative">
							<img src="@/assets/images/twitter.svg" alt="" />
						</a>
						<a href="https://discord.gg/5wDyd6u6pU">
							<img src="@/assets/images/discord.svg" alt="" />
						</a>
						<a href="https://www.linkedin.com/company/etc-cooperative/">
							<img src="@/assets/images/linkedin.svg" alt="" />
						</a>
						<a href="https://www.youtube.com/@ETCCooperative/">
							<img src="@/assets/images/youtube.svg" alt="" />
						</a>
					</div>
				</div>
				<div class="col-lg-9 col-md-12">
					<div class="row">
						<div class="col-lg-3 col-md-4 col-sm-6 col-12">
							<h4>{{ $t("footer.learn_about_etc") }}</h4>
							<ul>
								<li>
									<a href="https://ethereumclassic.org/">ETC Website</a>
								</li>
								<li>
									<a href="https://discord.com/invite/hQs894U">ETC Discord</a>
								</li>
								<li>
									<a href="https://ethereumclassic.org/news">ETC News</a>
								</li>
							</ul>
						</div>
						<div class="col-lg-3 col-md-4 col-sm-6 col-12">
							<h4>{{ $t("footer.mine_etc") }}</h4>
							<ul>
								<li><router-link to="/mining">Mining on ETC</router-link></li>
								<li>
									<a href="https://ethereumclassic.org/mining/pools"
										>Mining Pools</a
									>
								</li>
							</ul>
						</div>
						<div class="col-lg-3 col-md-4 col-sm-6 col-12">
							<h4>{{ $t("footer.develop_for_etc") }}</h4>
							<ul>
								<li><a href="https://ecips.ethereumclassic.org/">ECIPs</a></li>
								<li>
									<a href="https://github.com/hyperledger/besu"
										>Hyperledger Besu</a
									>
								</li>
								<li>
									<a href="https://github.com/etclabscore/core-geth"
										>Core-Geth</a
									>
								</li>
								<li>
									<a href="https://blockscout.com/etc/mainnet/">BlockScout</a>
								</li>
								<li>
									<a href="https://rivet.link/networks/"
										>ETC public RPC endpoints</a
									>
								</li>
								<li><a href="https://etcnodes.org/">ETC nodes explorer</a></li>
							</ul>
						</div>
						<div class="col-lg-3 col-md-4 col-sm-6 col-12">
							<h4>{{ $t("footer.etc_partners") }}</h4>
							<ul>
								<li>
									<a href="https://netlify.com/">
										<img
											class="lightImg"
											src="@/assets/images/netlify_logo.svg"
											alt=""
										/>
										<img
											class="darkImg"
											src="@/assets/images/netlify-logo-dark.svg"
											alt=""
										/>
									</a>
								</li>
								<li>
									<a href="https://rivet.cloud/">
										<img
											class="lightImg"
											src="@/assets/images/rivet_sponsor.svg"
											alt=""
										/>
										<img
											class="darkImg"
											src="@/assets/images/rivet_sponsor-dark.svg"
											alt=""
										/>
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="bottomFooter">
			<div class="bottomFooterCont">
				<p>
					{{ $t("footer.reserved_text") }}
					<router-link to="/">https://etccooperative.org/</router-link>
				</p>
				<div class="footerBottomLinks">
					<router-link to="/what-is-etc-cooperative"
						>What is the ETC Cooperative?</router-link
					>
					<router-link to="/contact">Contact Us</router-link>
				</div>
			</div>
		</div>
	</footer>
</template>
