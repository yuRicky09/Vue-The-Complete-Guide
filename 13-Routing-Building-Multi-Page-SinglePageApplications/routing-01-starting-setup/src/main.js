import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import TeamsList from './components/teams/TeamsList';
import TeamMembers from './components/teams/TeamMembers';
import TeamFooter from './components/teams/TeamFooter';

import UsersList from './components/users/UsersList';
import UserFooter from './components/users/UserFooter';

import NotFound from './components/nav/NotFound';

import App from './App.vue';

const router = createRouter({
  // 告知用內建的瀏覽器歷史紀錄方式記錄瀏覽歷史。
  history: createWebHistory(),
  routes: [
    //* redirect: 轉址，往只會實際改變成要轉去的網址  alias:別名  可以決定多的網址都要秀出同一個路由組件
    { path: '/', redirect: '/teams' },
    {
      name: 'teams',
      path: '/teams',
      // component: TeamsList,
      //* 一個路徑也可以配置多個路由組件， 當有多個組件時就要告知每個組件非別要對應哪個router view
      components: {
        default: TeamsList,
        footer: TeamFooter
      },
      alias: '/group',
      children: [
        {
          name: 'team-members',
          path: ':teamId',
          component: TeamMembers,
          props: true
        }
      ]
    },
    {
      path: '/users',
      components: {
        default: UsersList,
        footer: UserFooter
      }
    },
    //* 路由的最後防線  router支援正規表達式的寫法
    { path: '/:notFound(.*)', component: NotFound }
  ],
  //* 更改vuerouter為active的連結預設添加的class name
  linkActiveClass: 'active',

  //* 提升用戶體驗
  scrollBehavior(to, from, savedPostion) {
    console.log(to, from, savedPostion);
    //! 當用戶使用返回上一頁時才會收到savedPostion這個參數，這個參數紀錄了前次網址跳轉前距離瀏覽器左上角多少滾動距離。 可以讓用戶使用返回上頁時直接返回上次滾動到的地點。
    if (savedPostion) {
      return savedPostion;
    } else {
      //! 每次跳轉往址時都跳轉都新網址的最上方
      return { top: 0, left: 0 };
    }
    // return { top: 0, left: 0 };
  }
});

const app = createApp(App);

app.use(router);

app.mount('#app');
