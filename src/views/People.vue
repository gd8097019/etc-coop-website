<template>
	<Layout>
		<template #header>
			<section class="teamNavSection">
				<Navbar></Navbar>
				<div class="mainContainer teamContainer">
					<div class="teamHeroContent">
						<h1>People</h1>
					</div>
				</div>
			</section>
		</template>

		<template #main>
			<!-- team section starts here -->
			<section class="teamDetailsSection">
				<div class="teamDetailsContainer">
					<div class="heading">
						<h1>Team:</h1>
					</div>
					<div class="row">
						<div class="col-lg-4 col-md-6 col-sm-6">
							<div class="teamMemberCard">
								<img
									src="@/assets/images/member-1.png"
									alt="team member"
									id="teamMemberImg"
								/>
								<h5 id="teamMember">Bob Summerwill</h5>
								<p id="teamMemberDesig">Executive Director</p>
							</div>
						</div>
						<div class="col-lg-4 col-md-6 col-sm-6">
							<div class="teamMemberCard">
								<img
									src="@/assets/images/member-2.png"
									alt="team member"
									id="teamMemberImg"
								/>
								<h5 id="teamMember">Alison Alexis</h5>
								<p id="teamMemberDesig">
									Financial Controller and Business Services
								</p>
							</div>
						</div>
						<div class="col-lg-4 col-md-6 col-sm-6">
							<div class="teamMemberCard">
								<img
									src="@/assets/images/member-3.png"
									alt="team member"
									id="teamMemberImg"
								/>
								<h5 id="teamMember">Isaac Ardis</h5>
								<p id="teamMemberDesig">Core Developer, Ethereum Classic</p>
							</div>
						</div>
						<div class="col-lg-4 col-md-6 col-sm-6">
							<div class="teamMemberCard">
								<img
									src="@/assets/images/member-4.png"
									alt="team member"
									id="teamMemberImg"
								/>
								<h5 id="teamMember">Chris Ziogas</h5>
								<p id="teamMemberDesig">Core Developer, Ethereum Classic</p>
							</div>
						</div>
						<div class="col-lg-4 col-md-6 col-sm-6">
							<div class="teamMemberCard">
								<img
									src="@/assets/images/member-5.png"
									alt="team member"
									id="teamMemberImg"
								/>
								<h5 id="teamMember">Diego López León</h5>
								<p id="teamMemberDesig">Core Developer, Ethereum Classic</p>
							</div>
						</div>
						<div class="col-lg-4 col-md-6 col-sm-6">
							<div class="teamMemberCard">
								<img
									src="@/assets/images/member-6.png"
									alt="team member"
									id="teamMemberImg"
								/>
								<h5 id="teamMember">Donald McIntyre</h5>
								<p id="teamMemberDesig">Senior Editor</p>
							</div>
						</div>
						<div class="col-lg-4 col-md-6 col-sm-6">
							<div class="teamMemberCard">
								<img
									src="@/assets/images/member-7.png"
									alt="team member"
									id="teamMemberImg"
								/>
								<h5 id="teamMember">Andrew Dick</h5>
								<p id="teamMemberDesig">Marketing Manager</p>
							</div>
						</div>
						<div class="col-lg-4 col-md-6 col-sm-6">
							<div class="teamMemberCard">
								<img
									src="@/assets/images/member-8.png"
									alt="team member"
									id="teamMemberImg"
								/>
								<h5 id="teamMember">Angelah Liu</h5>
								<p id="teamMemberDesig">Communications Manager</p>
							</div>
						</div>
						<div class="col-lg-4 col-md-6 col-sm-6">
							<div class="teamMemberCard">
								<img
									src="@/assets/images/member-9.png"
									alt="team member"
									id="teamMemberImg"
								/>
								<h5 id="teamMember">Emma Todd</h5>
								<p id="teamMemberDesig">Events Manager</p>
							</div>
						</div>
					</div>

					<!-- member modal -->
					<div class="teamMemberModal" id="teamMemberModal">
						<img
							class="closeModal"
							id="closeModal"
							src="@/assets/images/close-modal.svg"
							alt="X"
						/>
						<div class="teamMemberModalContainer">
							<div class="row justify-content-center">
								<div class="col-lg-6 col-md-8 col-sm-10 col-12">
									<div class="memberImg">
										<img src="" alt="" id="memberImg" />
									</div>
								</div>
								<div class="col-lg-6 col-md-8 col-sm-10 col-12">
									<div class="memberInfo">
										<div class="memberIntro">
											<h4 id="memberName"></h4>
											<p id="memberDesig">Executive Director</p>
										</div>
										<div class="memberDetails">
											<div>
												<span class="dash"></span>
												<p>
													Bob Summerwill is Executive Director for the ETC
													Cooperative. He has been a community member of the
													Ethereum project since 2015 and of the Hyperledger
													project since 2016.
												</p>
												<div class="memberEmail">
													<a href="">
														<img src="@/assets/images/mail-icon.svg" alt="" />
														mailto:bob@etccooperative.org
													</a>
												</div>
											</div>
											<div class="memberSocialMedia">
												<a href="">
													<img
														src="@/assets/images/member-twitter.svg"
														alt=""
													/>
												</a>
												<a href="">
													<img
														src="@/assets/images/member-discord.svg"
														alt=""
													/>
												</a>
												<a href="">
													<img
														src="@/assets/images/member-linkedin.svg"
														alt=""
													/>
												</a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<!-- team section ends here -->

			<!-- bod section starts here -->
			<section class="bodSection">
				<div class="bodContainer">
					<div class="heading">
						<h1>Board of Directors:</h1>
					</div>
					<div class="row">
						<div class="col-md-6">
							<div class="bodCard">
								<img src="@/assets/images/bod-1.png" alt="" />
								<h5>Craig Salm</h5>
								<p>Chair</p>
							</div>
						</div>
						<div class="col-md-6">
							<div class="bodCard">
								<img src="@/assets/images/bod-2.png" alt="" />
								<h5>Cody Burns</h5>
							</div>
						</div>
						<div class="col-md-6">
							<div class="bodCard">
								<img src="@/assets/images/bod-3.png" alt="" />
								<h5>Elaine Ou</h5>
							</div>
						</div>
						<div class="col-md-6">
							<div class="bodCard">
								<img src="@/assets/images/bod-4.png" alt="" />
								<h5>Roy Zou</h5>
							</div>
						</div>
					</div>
				</div>
			</section>
			<!-- bod section ends here -->
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
