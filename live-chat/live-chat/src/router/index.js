import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import ChatRoom from "../views/ChatRoom";

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
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
