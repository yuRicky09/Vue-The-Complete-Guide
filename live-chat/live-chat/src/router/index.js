import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import ChatRoom from "../views/ChatRoom";

import { auth } from "../../firebase/config.js";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/chatroom",
    name: "ChatRoom",
    component: ChatRoom,
    meta: {
      needAuth: true,
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, _, next) => {
  if (to.meta.needAuth) {
    if (!auth.currentUser) {
      next({ name: "Home" });
    } else {
      next();
    }
  } else if (to.name === "Home") {
    if (auth.currentUser) {
      next({ name: "ChatRoom" });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
