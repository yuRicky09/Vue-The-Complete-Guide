import VueRouter from "vue-router";
import Home from "../pages/Home";
import About from "../pages/About";
import News from "../pages/News";
import Message from "../pages/Message";
import Detail from "../pages/Detail";

const router = new VueRouter({
  routes: [
    {
      path: "/about",
      component: About,
      meta: { title: "About頁面" },
    },
    {
      path: "/home",
      component: Home,
      meta: { title: "Home頁面" },
      children: [
        {
          path: "news",
          component: News,
          //! 路由的meta屬性可以讓程序員自定義一些功能
          meta: { needLogin: true, title: "News頁面" },
        },
        {
          path: "message",
          component: Message,
          meta: { needLogin: true, title: "Message頁面" },
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

// 路由權限設置(路由守衛)
//! 在1.初始化時 2.路由切換前觸發
router.beforeEach((to, from, next) => {
  if (to.meta.needLogin) {
    if (localStorage.getItem("login") === "true") {
      next();
    } else {
      alert("請先登入");
    }
  } else {
    next();
  }
});

// 路由切換後
// 雖然使用上比較少，但還是能幫忙完成一些事情
//! document.title能獲得現在頁面名
router.afterEach((to) => {
  document.title = to.meta.title;
});

export default router;
