<script lang="ts" setup>
import { ref, watch } from 'vue';
import { storeToRefs } from 'pinia';
import { useLayoutStore } from 'src/stores/layoutStore';
import MenuList, { MenuItemInterface } from './MenuList.vue';

const menuList: MenuItemInterface[] = [
  {
    title: 'Dashboard',
    caption: 'Estadisticas',
    icon: 'mdi-view-dashboard',
    link: '#/dashboard',
  },
  {
    title: 'Usuarios',
    caption: 'Gestion de Usuarios',
    icon: 'mdi-account-group',
    link: '#/users',
  },
  {
    title: 'Activos',
    caption: 'Gestion de Activos',
    icon: 'mdi-view-list',
    children: [
      {
        title: 'Mis Activos',
        caption: 'Activos Adquiridos',
        icon: 'mdi-store-cog-outline',
        link: '#/active',
      },
      {
        title: 'Activos Presupuestados',
        caption: 'Activos Deseados',
        icon: 'mdi-store',
        link: '#/active',
      },
    ],
  },
  {
    title: 'Parametros',
    caption: 'Gestion de Parametros',
    icon: 'mdi-tools',
    link: '#/parameter',
  },
  {
    title: 'Forum',
    caption: 'forum.quasar.dev',
    icon: 'mdi-alert-circle',
    link: 'https://forum.quasar.dev',
  },
  {
    title: 'Twitter',
    caption: '@quasarframework',
    icon: 'mdi-alert-circle',
    link: 'https://twitter.quasar.dev',
  },
  {
    title: 'Facebook',
    caption: '@QuasarFramework',
    icon: 'mdi-alert-circle',
    link: 'https://facebook.quasar.dev',
  },
  {
    title: 'Quasar Awesome',
    caption: 'Community Quasar projects',
    icon: 'mdi-alert-circle',
    link: 'https://awesome.quasar.dev',
  },
];
const store = useLayoutStore();
const { menuActive } = storeToRefs(store);

const leftDrawerOpen = ref(menuActive);

watch(leftDrawerOpen, () => {
  store.setActive(leftDrawerOpen.value);
});
</script>
<template>
  <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
    <q-list>
      <q-item-label header> Essential Links </q-item-label>

      <MenuList v-for="link in menuList" :key="link.title" v-bind="link" />
    </q-list>
  </q-drawer>
</template>
