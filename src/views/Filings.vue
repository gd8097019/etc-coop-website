<template>
	<Layout>
		<template #header>
			<section class="filingNavSection">
				<Navbar></Navbar>
				<div class="mainContainer filingContainer">
					<div class="filingHeroContent">
						<h1>{{ $t("filings.header") }}</h1>
					</div>
				</div>
			</section>
		</template>

		<template #main>
			<!-- incorporation documents section starts here -->
			<section class="documentsSection filingsPage">
				<div class="documentsContainer">
					<div class="heading">
						<h1>{{ $t("filings.incorporation_documents") }}</h1>
					</div>
					<div class="accordion" id="accordionPanelsStayOpenExample">
						<div
							class="accordion-item"
							v-for="(incorpation, ikey) in incorpations"
							:key="ikey"
						>
							<h2 class="accordion-header">
								<button
									class="accordion-button"
									:class="{ collapsed: ikey !== 0 ? true : false }"
									type="button"
									data-bs-toggle="collapse"
									:data-bs-target="`#collapse-i-${ikey}`"
									aria-expanded="false"
									:aria-controls="`collapse-i-${ikey}`"
									@click="updateAccordionText('i', ikey)"
								>
									<span class="accBtnContent">
										{{ incorpation.title }}
										<span v-if="ikey === 0" class="showAndHide">{{
											$t("filings.hide")
										}}</span>
										<span v-else class="showAndHide">{{
											$t("filings.show")
										}}</span>
									</span>
								</button>
							</h2>
							<div
								:id="`collapse-i-${ikey}`"
								class="accordion-collapse collapse accordion-collapse collapse"
								:class="{
									show: activeIncorporationTab === ikey ? true : false,
								}"
							>
								<div
									v-for="(file, fkey) in incorpation.files"
									:key="fkey"
									class="documentCard"
								>
									<img
										class="pdfIcon"
										src="@/assets/images/pdf-icon.svg"
										alt=""
									/>
									<div class="documentCardContent">
										<div class="documentSubj">
											<h3 v-if="file.date !== ''">{{ file.date }}</h3>
											<p>{{ file.description }}</p>
										</div>
										<a href="">
											<img
												class="lightIcon"
												src="@/assets/images/arrow-right-dark.svg"
												alt=""
											/>
											<img
												class="darkIcon"
												src="@/assets/images/arrow-right-gray.svg"
												alt=""
											/>
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<!-- incorporation documents section ends here -->

			<!-- resolutions section starts here -->
			<section class="documentsSection filingsPage">
				<div class="documentsContainer">
					<div class="heading">
						<h1>{{ $t("filings.resolutions") }}</h1>
					</div>
					<div class="accordion" id="accordionPanelsStayOpenExample">
						<div
							class="accordion-item"
							v-for="(resolution, rkey) in resolutions"
							:key="rkey"
						>
							<h2 class="accordion-header">
								<button
									class="accordion-button"
									:class="{ collapsed: rkey !== 0 ? true : false }"
									type="button"
									data-bs-toggle="collapse"
									:data-bs-target="`#collapse-r-${rkey}`"
									aria-expanded="false"
									:aria-controls="`collapse-r-${rkey}`"
									@click="updateAccordionText('r', rkey)"
								>
									<span class="accBtnContent">
										{{ resolution.title }}
										<span v-if="rkey === 0" class="showAndHide">{{
											$t("filings.hide")
										}}</span>
										<span v-else class="showAndHide">{{
											$t("filings.show")
										}}</span>
									</span>
								</button>
							</h2>
							<div
								:id="`collapse-r-${rkey}`"
								class="accordion-collapse collapse accordion-collapse collapse"
								:class="{
									show: activeResolutionsTab === rkey ? true : false,
								}"
							>
								<div
									v-for="(file, fkey) in resolution.files"
									:key="fkey"
									class="documentCard"
								>
									<img
										class="pdfIcon"
										src="@/assets/images/pdf-icon.svg"
										alt=""
									/>
									<div class="documentCardContent">
										<div class="documentSubj">
											<h3 v-if="file.date !== ''">{{ file.date }}</h3>
											<p>{{ file.description }}</p>
										</div>
										<a href="">
											<img
												class="lightIcon"
												src="@/assets/images/arrow-right-dark.svg"
												alt=""
											/>
											<img
												class="darkIcon"
												src="@/assets/images/arrow-right-gray.svg"
												alt=""
											/>
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<!-- resolutions section ends here -->

			<!-- filings section starts here -->
			<section class="documentsSection filingsPage">
				<div class="documentsContainer">
					<div class="heading">
						<h1>{{ $t("filings.filings") }}</h1>
					</div>
					<div class="accordion" id="accordionPanelsStayOpenExample">
						<div
							class="accordion-item"
							v-for="(filing, fkey) in filings"
							:key="fkey"
						>
							<h2 class="accordion-header">
								<button
									class="accordion-button"
									:class="{ collapsed: fkey !== 0 ? true : false }"
									type="button"
									data-bs-toggle="collapse"
									:data-bs-target="`#collapse-f-${fkey}`"
									aria-expanded="false"
									:aria-controls="`collapse-f-${fkey}`"
									@click="updateAccordionText('f', fkey)"
								>
									<span class="accBtnContent">
										{{ filing.title }}
										<span v-if="fkey === 0" class="showAndHide">{{
											$t("filings.hide")
										}}</span>
										<span v-else class="showAndHide">{{
											$t("filings.show")
										}}</span>
									</span>
								</button>
							</h2>
							<div
								:id="`collapse-f-${fkey}`"
								class="accordion-collapse collapse accordion-collapse collapse"
								:class="{
									show: activeFilingsTab === fkey ? true : false,
								}"
							>
								<div
									v-for="(file, fkey) in filing.files"
									:key="fkey"
									class="documentCard"
								>
									<img
										class="pdfIcon"
										src="@/assets/images/pdf-icon.svg"
										alt=""
									/>
									<div class="documentCardContent">
										<div class="documentSubj">
											<h3 v-if="file.date !== ''">{{ file.date }}</h3>
											<p>{{ file.description }}</p>
										</div>
										<a href="">
											<img
												class="lightIcon"
												src="@/assets/images/arrow-right-dark.svg"
												alt=""
											/>
											<img
												class="darkIcon"
												src="@/assets/images/arrow-right-gray.svg"
												alt=""
											/>
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<!-- filings section ends here -->

			<!-- other documents section starts here -->
			<section class="otherDocsSections">
				<div class="otherDocsContainer">
					<div class="heading">
						<h1>{{ $t("filings.other_documents") }}</h1>
					</div>
					<div class="row">
						<div
							v-for="(otherDocument, oKey) in otherDocuments"
							:key="oKey"
							class="col-md-6"
						>
							<div class="otherDocCard">
								<img src="@/assets/images/excel-icon.svg" alt="" />
								<p>{{ otherDocument.title }}</p>
							</div>
						</div>
					</div>
				</div>
			</section>
			<!-- other documents section ends here -->
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
			activeIncorporationTab: 0,
			activeResolutionsTab: 0,
			activeFilingsTab: 0,
			incorpations: [
				{
					title: "Reports 2017",
					files: [
						{
							date: "7th September",
							description: "ETCC LLC – LLC Agreement (EXECUTED)",
							fileLink: "",
						},
					],
				},
				{
					title: "Reports 2018",
					files: [
						{
							date: "29th April",
							description: "ETCC Inc. Form 1023",
							fileLink: "",
						},
						{
							date: "9th March",
							description:
								"ETCC LLC – Member Action To Convert to Not-For-Profit and Appoint Board (EXECUTED)",
							fileLink: "",
						},
						{
							date: "10th March",
							description: "ETCC LLC – Conversion Certificate (FILED)",
							fileLink: "",
						},
						{
							date: "10th March",
							description:
								"ETCC Inc. – Minutes re Certificate, Bylaws, and Directors",
							fileLink: "",
						},
						{
							date: "10th April",
							description: "ETCC Inc. – By-Laws (EXECUTED)",
							fileLink: "",
						},
					],
				},
			],
			resolutions: [
				{
					title: "Resolutions 2019",
					files: [
						{
							date: "29th March",
							description:
								"ETC Coop - Resolutions (Appointing and Removing Officers)",
							fileLink: "",
						},
					],
				},
				{
					title: "Resolutions 2020",
					files: [
						{
							date: "20th March",
							description:
								"ETC Coop - Resolutions (Appointing and Removing Officers)",
							fileLink: "",
						},
					],
				},
				{
					title: "Resolutions 2022",
					files: [
						{
							date: "12th April",
							description:
								"ETC Coop 2022 AGM Resolutions (Resignation of Directors, Approval of Corporation Governance Documentation)",
							fileLink: "",
						},
					],
				},
			],
			filings: [
				{
					title: "Filings 2018",
					files: [
						{
							date: "25th November",
							description: "ETC Coop – Form 990 (2018 tax year)",
							fileLink: "",
						},
					],
				},
				{
					title: "Filings 2019",
					files: [
						{
							date: "20th November",
							description: "ETC Coop – Form 990 (2019 tax year)",
							fileLink: "",
						},
					],
				},
				{
					title: "Filings 2020",
					files: [
						{
							date: "21st November",
							description: "ETC Coop – Form 990 (2020 tax year)",
							fileLink: "",
						},
					],
				},
			],
			otherDocuments: [
				{ title: "ETC Coop 2020 Goals & Objectives", fileLink: "" },
				{ title: "ETC Coop 2020 Goals & Objectives", fileLink: "" },
				{ title: "ETC Coop 2020 Goals & Objectives", fileLink: "" },
				{ title: "ETC Coop 2020 Goals & Objectives", fileLink: "" },
				{ title: "ETC Coop 2020 Goals & Objectives", fileLink: "" },
				{ title: "ETC Coop 2020 Goals & Objectives", fileLink: "" },
				{ title: "ETC Coop 2020 Goals & Objectives", fileLink: "" },
			],
		};
	},
	methods: {
		updateAccordionText(typeKey, key) {
			const element = document.querySelector(
				`[data-bs-target="#collapse-${typeKey}-${key}"] .showAndHide`
			);

			if (element.textContent === this.$t("filings.hide")) {
				element.textContent = this.$t("filings.show");
			} else if (element.textContent === this.$t("filings.show")) {
				element.textContent = this.$t("filings.hide");
			}
		},
	},
};
</script>
