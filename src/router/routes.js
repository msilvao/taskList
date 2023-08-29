import VueRouter from "vue-router";
import HomePage from "@/views/HomePage.vue";

const router = new VueRouter({
  routes: [
    {
      path: "/",
      name: "HomePage",
      component: HomePage,
    },
  ],
});

export default router;
