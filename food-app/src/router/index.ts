import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

// pages
import pageNotfound from "@/pages/errors/404.page.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "404",
    component: pageNotfound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
