<template>
	<Layout>
		<template #header>
			<section class="miningNavSection">
				<Navbar></Navbar>
				<div class="mainContainer miningContainer">
					<div class="miningHeroContent">
						<h1>TERMS OF SERVICE</h1>
					</div>
				</div>
			</section>
		</template>

		<template #main>
			<section class="p-4 p-md-5 p-lg-5">
				<div class="container">
					<div class="row">
						<div class="col-sm-0 col-md-2 col-lg-2"></div>
						<div class="col-sm-12 col-md-8 col-lg-8">
							<h1 class="pb-4">TERMS OF SERVICE</h1>

							<h2>1. Introduction</h2>

							<p>
								Welcome to https://etccooperative.org/ ("Website"). This website
								is owned and operated by Ethereum Classic Cooperative, Inc.
								("Company", "we", "us", or "our"). Please read these Terms of
								Service ("Terms") carefully before using our Website, as they
								affect your legal rights and obligations.
							</p>

							<h2>2. Acceptance of Terms</h2>

							<p>
								By accessing, browsing, or using our Website in any manner, you
								represent that you have read, understood, and agree to be bound
								by these Terms. You also acknowledge and agree that these Terms
								constitute a legally binding agreement between you and the
								Company. Your use of our Website is also subject to any
								additional rules, guidelines, policies, or procedures that may
								be posted on the Website from time to time, such as privacy
								policies and others, all of which are hereby incorporated by
								reference into these Terms.
							</p>

							<p>
								If you are using the Website on behalf of a corporation,
								partnership, or other legal entity, you represent and warrant
								that you are authorized to accept these Terms on behalf of such
								entity and all references to "you" in these Terms refer to that
								entity. If you do not agree with or cannot comply with these
								Terms or any of our other policies, you must not access or use
								the Website.
							</p>

							<h2>3. Changes to Terms</h2>

							<p>
								The Company reserves the right to modify these Terms at any
								time, and your continued use of the Website following any
								changes indicates your acceptance of the new Terms. It is your
								responsibility to check these Terms periodically for changes.
							</p>

							<h2>4. Intellectual Property</h2>

							<p>
								Unless otherwise stated, the Company and/or its licensors own
								the intellectual property rights for all material on the
								Website. All intellectual property rights are reserved. This
								includes, but is not limited to, text, graphics, logos, icons,
								images, sound clips, video clips, data compilations, page
								layout, underlying code and software. You may access, view, and
								print out one copy of this Website and all information, images,
								and other content displayed on the Website ("Materials")
								strictly in accordance with these Terms.
							</p>

							<p>
								You may only view, print out, use, quote from and cite the
								Website and the Materials for your own personal, non-commercial
								use and on the condition that you give appropriate
								acknowledgment to the Company where appropriate. All
								intellectual property rights such as trademarks, trade names,
								service marks and logos are owned by the Company or its
								licensors and protected by copyright laws and treaties around
								the world. All such rights are reserved.
							</p>

							<p>
								Any use of the Website not expressly permitted by these Terms is
								a breach of these Terms and may infringe copyright, trademark,
								and other laws.
							</p>

							<p>
								You must not modify the paper or digital copies of any materials
								you have printed off or downloaded in any way, and you must not
								use any illustrations, photographs, video or audio sequences or
								any graphics separately from any accompanying text. If you print
								off, copy or download any part of our Website in breach of these
								Terms, your right to use our Website will cease immediately and
								you must, at our option, return or destroy any copies of the
								materials you have made.
							</p>

							<p>
								No part of the Website may be reproduced or stored in any other
								website or included in any public or private electronic
								retrieval system or service without our prior written
								permission. Any rights not expressly granted in these terms are
								reserved.
							</p>

							<h2>5. No Data Collection</h2>

							<p>
								Our Website does not collect any personal data from its users.
								We respect your privacy and are committed to protecting it.
							</p>

							<h2>6. Limitation of Liability</h2>

							<p>
								Under no circumstances shall the Company, its officers,
								directors, employees, or agents, be liable for any indirect,
								incidental, special, consequential or exemplary damages,
								including but not limited to, damages for loss of profits,
								goodwill, use, data or other intangible losses (even if the
								Company has been advised of the possibility of such damages),
								arising out of or in connection with the use or inability to use
								the Website, or otherwise resulting from: (a) the use or the
								inability to use the Website; (b) unauthorized access to or
								alteration of your transmissions or data; (c) statements or
								conduct of any third party on the Website; or (d) any other
								matter relating to the Website.
							</p>

							<p>
								Some jurisdictions do not allow the exclusion or limitation of
								liability for consequential or incidental damages, so the above
								limitation may not apply to you. In such jurisdictions, our
								liability is limited to the greatest extent permitted by law.
							</p>

							<p>
								This does not affect the Company's liability for any liability
								which cannot be excluded or limited under applicable law. The
								use of the Website is at your own risk. The Website is provided
								on an "AS IS" and "AS AVAILABLE" basis without any
								representation or endorsement made and without warranty of any
								kind whether express or implied, including but not limited to
								the implied warranties of satisfactory quality, fitness for a
								particular purpose, non-infringement, compatibility, security
								and accuracy.
							</p>

							<p>
								You agree to indemnify, defend and hold harmless the Company,
								its officers, directors, employees, and agents, from and against
								any claims, liabilities, damages, losses or expenses, including
								reasonable attorneys' fees and costs, due to or arising out of
								your use of the Website, your violation of these Terms, or your
								violation of any rights of third parties, or your violation of
								any applicable laws, rules or regulations. This indemnification
								obligation will survive termination of these Terms and your use
								of the Website. If you cause a technical disruption of the
								Website or the systems transmitting the Website to you or
								others, you agree to be responsible for any and all losses,
								liabilities, expenses, damages and costs, including reasonable
								attorneys' fees and court costs, arising or resulting from that
								disruption.
							</p>

							<h2>7. Governing Law</h2>

							<p>
								These Terms shall be governed and construed in accordance with
								the laws of the State of Delaware, without regard to its
								conflict of law provisions.
							</p>

							<h2>8. Contact Us</h2>

							<p>
								If you have any questions about these Terms, please contact us.
							</p>
						</div>
						<div class="col-sm-0 col-md-2 col-lg-2"></div>
					</div>
				</div>
			</section>
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
