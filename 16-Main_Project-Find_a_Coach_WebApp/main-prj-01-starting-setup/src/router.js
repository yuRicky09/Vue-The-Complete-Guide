import { createRouter, createWebHistory } from 'vue-router';

import NotFound from './pages/NotFound';

import CoachesList from './pages/coaches/CoachesList';
import CaoachDetail from './pages/coaches/CoachDetail';
// import CoachRegistration from './pages/coaches/CoachRegistration';
//! 懶加載， 當需要用到這路徑時才會下載引入這路徑需要用到的資源，能優化整個APP 減少用戶初次下載的負擔。
const CoachRegistration = () => import('./pages/coaches/CoachRegistration');

// import ContactCoach from './pages/requests/ContactCoach';
// import RequestsList from './pages/requests/RequestsList';
const ContactCoach = () => import('./pages/requests/ContactCoach');
const RequestsList = () => import('./pages/requests/RequestsList');

import UserAuth from './pages/auth/UserAuth';

import store from './store';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/coaches' },
    { path: '/coaches', component: CoachesList },
    {
      path: '/coaches/:id',
      component: CaoachDetail,
      props: true,
      children: [{ path: 'contact', component: ContactCoach, props: true }]
    },
    {
      path: '/register',
      component: CoachRegistration,
      meta: { needLogin: true }
    },
    { path: '/requests', component: RequestsList, meta: { needLogin: true } },
    { path: '/auth', component: UserAuth },
    { path: '/:notFound(.*)', component: NotFound }
  ]
});

router.beforeEach((to, _, next) => {
  //! 需登入網址在未登入狀態下被輸入時轉移至首頁
  if (to.meta.needLogin && !store.getters.token) {
    next('/coaches');
  } else {
    next(true);
  }
});

export default router;
