<script lang="ts" setup>
import { ref, watch } from 'vue';
import { storeToRefs } from 'pinia';
import { useLayoutStore } from 'src/stores/layoutStore';
import MenuList, { MenuItemInterface } from './MenuList.vue';

const menuList: MenuItemInterface[] = [
  {
    title: 'Dashboard',
    caption: 'Estadisticas',
    icon: 'dashboard',
    link: '#/dashboard',
  },
  {
    title: 'Usuarios',
    caption: 'Gestion de Usuarios',
    icon: 'group',
    link: '#/users',
  },
  {
    title: 'Discord Chat Channel',
    caption: 'chat.quasar.dev',
    icon: 'chat',
    link: 'https://chat.quasar.dev',
  },
  {
    title: 'Forum',
    caption: 'forum.quasar.dev',
    icon: 'record_voice_over',
    link: 'https://forum.quasar.dev',
  },
  {
    title: 'Twitter',
    caption: '@quasarframework',
    icon: 'rss_feed',
    link: 'https://twitter.quasar.dev',
  },
  {
    title: 'Facebook',
    caption: '@QuasarFramework',
    icon: 'public',
    link: 'https://facebook.quasar.dev',
  },
  {
    title: 'Quasar Awesome',
    caption: 'Community Quasar projects',
    icon: 'favorite',
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
