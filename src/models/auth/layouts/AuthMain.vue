<script setup lang="ts">
import { useQuasar } from 'quasar';
const $q = useQuasar();
$q.dark.set(true);
</script>
<template>
  <div class="window-height window-width row justify-center items-center">
    <q-card class="col-10 col-sm-7 col-md-5 col-lg-3 q-pa-md q-gutter-sm">
      <router-view />
    </q-card>
  </div>
</template>
