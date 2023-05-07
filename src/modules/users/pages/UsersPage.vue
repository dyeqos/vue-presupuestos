<script lang="ts" setup>
import UsersTable from '../components/UsersTable.vue';
import UserModal from '../components/UserModal.vue';
</script>
<template>
  <q-btn icon="mdi-plus" label="Crear" color="primary" />
  <q-space></q-space>
  <Suspense>
    <UsersTable></UsersTable>
  </Suspense>
  <UserModal></UserModal>
</template>
