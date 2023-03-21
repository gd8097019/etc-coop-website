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
		{{ $t("hello") }}
	</div>
	<div v-for="(postsItem, postsKey) in posts" :key="postsKey">
		<a :href="`/posts/${postsItem.alias}`">{{
			$t(`posts.title.content.${postsItem.id}`)
		}}</a>
	</div>
</template>
<script>
import posts from "@/contents/posts.json";

export default {
	data() {
		return {
			posts: posts.list,
		};
	},
	watch: {
		"$i18n.locale": function (newLang) {
			localStorage.setItem("last-locale", newLang);
		},
	},
};
</script>
