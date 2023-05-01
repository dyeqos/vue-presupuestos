<script lang="ts" setup>
import useUser from '../composables/useUser';
const {getUserList} = useUser();
const data = getUserList();
</script>
<template>
    <q-btn icon="add" label="Crear" color="primary"></q-btn>
</template>