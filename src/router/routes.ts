import { RouteRecordRaw } from 'vue-router';
import isAuthenticated from 'src/guards/auth-guard';
import dashboardRoute from '../modules/dashboard/routes/dashboard-route';
import authRoute from '../modules/auth/routes/auth.route';
import paramRoute from '../modules/parameter/routes/param.route';
import usersRoute from '../modules/users/routes/users-route';
import activeRoute from '../modules/active/routes/active-route';

const routes: RouteRecordRaw[] = [
  {
    path: '/auth',
    component: () => import('../modules/auth/layouts/AuthMain.vue'),
    children: authRoute,
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
    path: '/parameter',
    beforeEnter: [isAuthenticated],
    component: () => import('layouts/MainLayout.vue'),
    children: paramRoute,
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
