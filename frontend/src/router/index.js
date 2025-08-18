import { createRouter, createWebHistory } from "vue-router";
import Login from "../views/Login.vue";
import Dashboard from "../views/Dashboard.vue";

const routes = [
  { path: "/", component: Login },
  { path: "/dashboard", component: Dashboard, meta: { requiresAuth: true } },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem("access");

  if (to.meta.requiresAuth && !token) {
    next({ path: "/" });
  } else if (to.path === "/" && token) {
    // redirect logged-in users from login page to dashboard
    next({ path: "/dashboard" });
  } else {
    next();
  }
});

export default router;
