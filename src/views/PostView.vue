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
		<pre>{{ meta }}</pre>
		<p v-html="body"></p>
	</div>
</template>
<script>
export default {
	data() {
		return {
			id: null,
			title: null,
			img: null,
			body: null,
			meta: null,
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
			let sourceFile = `${this.$route.params.alias}/index.md`;

			import(`@/contents/posts/${locale}/${sourceFile}`)
				.then((module) => {
					const { html, meta } = this.md(module.default);
					this.body = html;
					this.meta = meta;
				})
				.catch(() => {
					// load default locale (en)
					import(`@/contents/posts/en/${sourceFile}`).then((module) => {
						const { html, meta } = this.md(module.default);
						this.body = html;
						this.meta = meta;
					});
				});
		},
	},
	mounted() {
		const locale = this.$i18n.locale;
		this.getContent(locale);
	},
};
</script>
