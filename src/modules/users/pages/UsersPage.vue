<script lang="ts" setup>
import useModal from '../composables/useModal';
import UsersTable from '../components/UsersTable.vue';
import UserModal from '../components/UserModal.vue';

const { setModalState } = useModal();

//metodos
const openModel = () => {
  setModalState(true);
};
</script>
<template>
  <q-btn icon="mdi-plus" label="Crear" color="primary" @click="openModel" />
  <q-space></q-space>
  <Suspense>
    <UsersTable></UsersTable>
  </Suspense>
  <UserModal></UserModal>
</template>
