import { RouteRecordRaw } from 'vue-router';

const routeParam: RouteRecordRaw[] = [
  {
    path: '',
    name: '',
    component: () => import('src/modules/parameter/layouts/ParamMain.vue'),
    children: [
      {
        path: '',
        name: 'parameter',
        component: () => import('src/modules/parameter/pages/ParamsPage.vue'),
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

export default routeParam;
