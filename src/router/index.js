import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import PostView from "@/views/PostView.vue";
import EthereumClassic from "@/views/EthereumClassic.vue";
import Mining from "@/views/Mining.vue";
import DevelopingForEtc from "@/views/DevelopingForEtc.vue";
import WhatIsEtcCoop from "@/views/WhatIsEtcCoop.vue";
import Governance from "@/views/Governance.vue";
import Filings from "@/views/Filings.vue";
import People from "@/views/People.vue";
import Contact from "@/views/Contact.vue";

const routes = [
	{
		path: "/",
		name: "home",
		component: HomeView,
	},
	{
		path: "/posts/:alias",
		name: "posts",
		component: PostView,
	},
	{
		path: "/ethereum-classic",
		name: "ethereum-classic",
		component: EthereumClassic,
	},
	{
		path: "/mining",
		name: "mining",
		component: Mining,
	},
	{
		path: "/developing-for-etc",
		name: "developing-for-etc",
		component: DevelopingForEtc,
	},
	{
		path: "/what-is-etc-cooperative",
		name: "what-is-etc-cooperative",
		component: WhatIsEtcCoop,
	},
	{
		path: "/governance",
		name: "governance",
		component: Governance,
	},
	{
		path: "/filings",
		name: "filings",
		component: Filings,
	},
	{
		path: "/people",
		name: "people",
		component: People,
	},
	{
		path: "/contact",
		name: "contact",
		component: Contact,
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
