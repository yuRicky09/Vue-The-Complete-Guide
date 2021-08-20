import VueRouter from "vue-router";
import Home from "../pages/Home";
import About from "../pages/About";
import News from "../pages/News";
import Message from "../pages/Message";
import Detail from "../pages/Detail";

export default new VueRouter({
  routes: [
    {
      path: "/about",
      component: About,
    },
    {
      path: "/home",
      component: Home,
      children: [
        {
          path: "news",
          component: News,
        },
        {
          path: "message",
          component: Message,
          children: [
            {
              // 當是高層級的路由組件時，可使用name屬性來跳轉，代替寫完整path路徑。
              name: "messageItem",
              //! 不使用query使用params方式傳參時必須給參數占位。
              path: "detail/:id/:title",
              component: Detail,
            },
          ],
        },
      ],
    },
  ],
});
