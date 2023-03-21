<template>
	<div style="float: right">
		<select
			id="sel"
			class="uppercase rounded font-roboto bg-background font-semibold text-textColor font16 border-0 selectMenu py-2 px-1 hidden"
			v-model="$i18n.locale"
		>
			<option
				class="uppercase rounded bg-background border-0"
				key="`locale-${0}`"
				value="cn"
			>
				占位符符
			</option>
			<option
				class="uppercase rounded bg-background border-0"
				key="`locale-${1}`"
				value="en"
			>
				English
			</option>
		</select>
	</div>
	<div>
		<p v-html="body"></p>
	</div>
</template>
<script>
import posts from "@/contents/posts.json";

export default {
	data() {
		return {
			id: null,
			title: null,
			img: null,
			body: null,
		};
	},
	watch: {
		"$i18n.locale": function (newLang) {
			localStorage.setItem("last-locale", newLang);
			this.getContent(newLang);
		},
	},
	methods: {
		getContent(locale) {
			const postsData = posts.list.filter(
				(b) => b.alias === this.$route.params.alias
			);

			if (postsData.length > 0) {
				this.id = postsData[0].id;
				this.title = postsData[0].title;
				this.img = postsData[0].img;

				// try to load current locale folder's md files.
				// If not exist, read default md files in 'en' folder
				if (postsData[0].source) {
					const sourceFile = postsData[0].source;
					import(`@/contents/posts/${locale}/${sourceFile}`)
						.then((module) => {
							this.body = this.md(module.default);
						})
						.catch(() => {
							// load default locale (en)
							import(`@/contents/posts/en/${sourceFile}`).then((module) => {
								this.body = this.md(module.default);
							});
						});
				}
			}
		},
	},
	mounted() {
		const locale = this.$i18n.locale;
		this.getContent(locale);
	},
};
</script>
