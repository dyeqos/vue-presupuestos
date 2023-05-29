import { RouteRecordRaw } from 'vue-router';

const routeAuth: RouteRecordRaw[] = [
  {
    path: 'login',
    name: 'auth-login',
    component: () => import('src/modules/auth/pages/AuthLogin.vue'),
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routeAuth;
