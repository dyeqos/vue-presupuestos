<script lang="ts" setup>
import { useLayoutStore } from 'src/stores/layoutStore';
const store = useLayoutStore();
const toggleLeftDrawer = () => {
  store.setActive(!store.getActive);
};
</script>

<template>
  <q-header elevated>
    <q-toolbar>
      <q-btn
        flat
        dense
        round
        icon="mdi-menu"
        aria-label="Menu"
        @click="toggleLeftDrawer"
      />

      <q-toolbar-title> Quasar App </q-toolbar-title>

      <div>Quasar v{{ $q.version }}</div>
    </q-toolbar>
  </q-header>
</template>
