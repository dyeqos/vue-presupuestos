import { RouteRecordRaw } from 'vue-router';

const routeDashboard: RouteRecordRaw[] = [
  {
    path: '',
    component: () => import('../layouts/DashboardMain.vue'),
    children: [
      {
        path: '',
        name: 'activos-gestion',
        component: () => import('../pages/ActivosPage.vue'),
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
