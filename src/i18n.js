import { createI18n } from "vue-i18n";
import posts from "@/contents/posts.json";

/**
 * Load locale messages
 *
 * The loaded `JSON` locale messages is pre-compiled by `@intlify/vue-i18n-loader`, which is integrated into `vue-cli-plugin-i18n`.
 */
function loadLocaleMessages() {
	const locales = require.context(
		"./locales",
		true,
		/[A-Za-z0-9-_,\s]+\.json$/i
	);

	const messages = {};
	locales.keys().forEach((key) => {
		const matched = key.match(/([A-Za-z0-9-_]+)\./i);
		if (matched && matched.length > 1) {
			const locale = matched[1];
			messages[locale] = locales(key);

			// add posts titles to locale
			if (posts.list && posts.list.length) {
				posts.list.forEach((postsItem) => {
					let titleText = "";
					let title = postsItem.title.find((t) => t.locale === locale);
					if (title) {
						titleText = title.text;
					} else {
						title = postsItem.title.find((t) => t.locale === "en");
						if (title) {
							titleText = title.text;
						}
					}
					messages[locale][`posts.title.content.${postsItem.id}`] = titleText;
				});
			}
		}
	});

	console.log(messages);

	return messages;
}

function getStartingLocale() {
	if (localStorage.getItem("last-locale")) {
		return localStorage.getItem("last-locale");
	}
	return process.env.VUE_APP_I18N_LOCALE || "en";
}

export default createI18n({
	legacy: false,
	globalInjection: true,
	locale: getStartingLocale(),
	fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || "en",
	messages: loadLocaleMessages(),
});
