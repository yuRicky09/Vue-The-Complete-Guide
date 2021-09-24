import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/auth/Login.vue";
import Signup from "../views/auth/Signup.vue";
import CreatePlayList from "../views/playList/CreatePlayList.vue";
import PlayListDetail from "../views/playList/PlayListDetail.vue";
import MyPlayList from "../views/playList/MyPlayList.vue";
import { auth } from "../../firebase/config";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/signup",
    name: "Signup",
    component: Signup,
  },
  {
    path: "/playlist/create",
    name: "CreatePlayList",
    component: CreatePlayList,
    meta: {
      needAuth: true,
    },
  },
  {
    path: "/playlist/:id",
    name: "PlayListDetail",
    component: PlayListDetail,
    props: true,
  },
  {
    path: "/playlist/user",
    name: "MyPlayList",
    component: MyPlayList,
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
    if (auth.currentUser) {
      next();
    } else {
      next({ name: "Home" });
    }
  } else {
    next();
  }
});

export default router;
