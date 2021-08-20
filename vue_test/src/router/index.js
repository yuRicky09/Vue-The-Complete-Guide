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
              //! 路由的props接參屬性
              // 1. 這種寫方可以讓params參數的所有key-value用props型式接收 ['key', 'key']，記住只能用於params
              // props: true,
              // 2. 這種寫法不管query or params都可使用props形式接收
              // props($route) {
              //   return {
              //     id: $route.params.id,
              //     title: $route.params.title,
              //   };
              // },
              // 3. 第二種寫法再搭配雙重解構
              props({ params: { id, title } }) {
                return {
                  id,
                  title,
                };
              },
            },
          ],
        },
      ],
    },
  ],
});
