import { createRouter, createWebHistory } from 'vue-router';

import NotFound from './pages/NotFound';

import CoachesList from './pages/coaches/CoachesList';
import CaoachDetail from './pages/coaches/CoachDetail';
import CoachRegistration from './pages/coaches/CoachRegistration';

import ContactCoach from './pages/requests/ContactCoach';
import RequestsList from './pages/requests/RequestsList';

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
    { path: '/register', component: CoachRegistration },
    { path: '/requests', component: RequestsList },
    { path: '/:notFound(.*)', component: NotFound }
  ]
});

export default router;
