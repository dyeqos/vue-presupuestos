import { RouteRecordRaw } from 'vue-router';

const routeUsers: RouteRecordRaw[] = [
  {
    path: '',
    component: () => import('../layouts/UsersMain.vue'),
    children: [
      {
        path: '',
        name: 'users',
        component: () => import('../pages/UsersPage.vue'),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routeUsers;
