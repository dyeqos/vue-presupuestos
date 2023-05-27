import { RouteRecordRaw } from 'vue-router';
import isAuthenticated from 'src/guards/auth-guard';
import dashboardRoute from '../modules/dashboard/routes/dashboard-route';
import usersRoute from '../modules/users/routes/users-route';
import activeRoute from '../modules/active/routes/active-route';

const routes: RouteRecordRaw[] = [
  {
    path: '/auth',
    component: () => import('../modules/auth/layouts/AuthMain.vue'),
    children: [
      {
        path: 'login',
        name: 'auth-login',
        component: () => import('../modules/auth/pages/AuthLogin.vue'),
      },
    ],
  },
  {
    path: '/dashboard',
    beforeEnter: [isAuthenticated],
    component: () => import('layouts/MainLayout.vue'),
    children: dashboardRoute,
  },
  {
    path: '/users',
    beforeEnter: [isAuthenticated],
    component: () => import('layouts/MainLayout.vue'),
    children: usersRoute,
  },
  {
    path: '/active',
    beforeEnter: [isAuthenticated],
    component: () => import('layouts/MainLayout.vue'),
    children: activeRoute,
  },
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/IndexPage.vue') }],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
