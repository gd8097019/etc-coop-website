<template>
	<Layout>
		<template #header>
			<section class="contactNavSection">
				<Navbar></Navbar>
				<div class="mainContainer contactContainer">
					<div class="contactHeroContent">
						<h1>Contact</h1>
					</div>
				</div>
			</section>
		</template>

		<template #main>
			<!-- stay connected section starts here -->
			<section class="stayConnectedSection">
				<div class="stayConnectedContainer">
					<div class="heading">
						<h1>How to stay in contact with the ETC Cooperative:</h1>
					</div>
					<div class="row">
						<div
							v-for="(contact, cKey) in contacts"
							:key="cKey"
							class="col-xl-4 col-md-6 px-2"
						>
							<div class="contactCard">
								<img :src="require(`@/assets/images/${contact.img}`)" alt="" />
								<div class="contactCardDetails">
									<h6>{{ contact.name }}</h6>
									<span>{{ contact.title }}</span>
									<a :href="`mailto:${contact.mail}`">
										<img src="@/assets/images/mail-icon-green.svg" alt="" />
										{{ contact.mail }}
									</a>
									<a :href="`https://www.twitter.com/${contact.twitter}`">
										<img src="@/assets/images/member-twitter.svg" alt="" />
										@{{ contact.twitter }}
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<!-- stay connected section ends here -->

			<!-- etc contact links starts here -->
			<section class="etcContactLinksSection">
				<div class="etcContactLinksContainer">
					<div class="etcContactLinks">
						<div class="heading">
							<h1>ETC Cooperative:</h1>
						</div>
						<div class="contactLinks">
							<a href="">
								<img src="@/assets/images/contact-twitter.svg" alt="" />
								@ETCCooperative
							</a>
							<a href="">
								<img src="@/assets/images/contact-discord1.svg" alt="" />
								ETC Cooperative Discord
							</a>
							<a href="">
								<img src="@/assets/images/contact-discord2.svg" alt="" />
								ETC Community Discord
							</a>
						</div>
					</div>
				</div>
			</section>
			<!-- etc contact links ends here -->
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
	data() {
		return {
			contacts: [
				{
					img: "member-1.png",
					name: "Bob Summerwill",
					title: "Executive Director",
					mail: "bob@etccooperative.org",
					twitter: "bobsummerwill",
				},
				{
					img: "member-2.png",
					name: "Alison Alexis",
					title: "Financial Controller and Business Services",
					mail: "alison@etccooperative.org",
					twitter: "AlisonBobEth",
				},
				{
					img: "member-3.png",
					name: "Isaac Ardis",
					title: "Core Developer",
					mail: "isaac@etccooperative.org",
					twitter: "isaacardis",
				},
				{
					img: "member-4.png",
					name: "Chris Ziogas",
					title: "Core Developer",
					mail: "chris@etccooperative.org",
					twitter: "ziogaschr",
				},
				{
					img: "member-5.png",
					name: "Diego López León",
					title: "Core Developer",
					mail: "diego@etccooperative.org",
					twitter: "diega",
				},
				{
					img: "member-6.png",
					name: "Donald McIntyre",
					title: "Senior Editor",
					mail: "donald@etccooperative.org",
					twitter: "ETCPOW",
				},
				{
					img: "member-7.png",
					name: "Andrew Dick",
					title: "Marketing Manager",
					mail: "andrew@etccooperative.org",
					twitter: "Bubble_Gum_Tate",
				},
				{
					img: "member-8.png",
					name: "Angelah Liu",
					title: "Communications Manager",
					mail: "angelah@etccooperative.org",
					twitter: "angelahliu_",
				},
				{
					img: "member-9.png",
					name: "Emma Todd",
					title: "Events Manager",
					mail: "emma@etccooperative.org",
					twitter: "CryptoEmmaT",
				},
			],
		};
	},
};
</script>
