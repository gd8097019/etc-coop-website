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
			<!-- filings section starts here -->
			<section class="documentsSection filingsPage">
				<div class="documentsContainer">
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
									<a
										target="_blank"
										:href="file.fileLink"
										:download="file.date"
									>
										<img
											class="pdfIcon"
											src="@/assets/images/pdf-icon.svg"
											alt=""
										/>
									</a>
									<div class="documentCardContent">
										<div class="documentSubj">
											<h3 v-if="file.date !== ''">{{ file.date }}</h3>
											<a
												target="_blank"
												:href="file.fileLink"
												:download="file.date"
											>
												<p>{{ file.description }}</p>
											</a>
										</div>
										<a
											target="_blank"
											:href="file.fileLink"
											:download="file.date"
										>
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
					<div class="row">
						<div
							v-for="(otherDocument, oKey) in otherDocuments"
							:key="oKey"
							class="col-md-6"
						>
							<a
								target="_blank"
								:href="otherDocument.fileLink"
								:download="otherDocument.title"
							>
								<div class="otherDocCard">
									<img src="@/assets/images/excel-icon.svg" alt="" />
									<p>{{ otherDocument.title }}</p>
								</div>
							</a>
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
	watch: {
		"$i18n.locale": function (newLang) {
			this.getContent(newLang);
		},
	},
	data() {
		return {
			activeIncorporationTab: 0,
			activeResolutionsTab: 0,
			activeFilingsTab: 0,
			incorpations: null,
			resolutions: null,
			filings: null,
			otherDocuments: null,
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
		getContent(lang) {
			import(`@/config/${lang}/filing.consolidated.json`).then((contentEN) => {
				this.filings = contentEN.default.filings;
			});
		},
	},
	created() {
		const lang = this.$i18n.locale;
		this.getContent(lang);
	},
};
</script>
