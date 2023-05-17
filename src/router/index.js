import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import PostView from "@/views/PostView.vue";
import WhatIsEtc from "@/views/WhatIsEtc.vue";

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
		path: "/what-is-etc",
		name: "what-is-etc",
		component: WhatIsEtc,
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
