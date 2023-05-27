import { RouteRecordRaw } from 'vue-router';

const routeDashboard: RouteRecordRaw[] = [
  {
    path: '',
    component: () => import('../layouts/ActiveMain.vue'),
    children: [
      {
        path: '',
        name: 'activos-gestion',
        component: () => import('../pages/ActivePage.vue'),
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

export default routeDashboard;
