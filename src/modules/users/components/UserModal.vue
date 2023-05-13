<script lang="ts" setup>
import { ref, watch } from 'vue';
import useModal from '../composables/useModal';
import useUser from '../composables/useUser';

//import { UserModel } from '../models/user.model';

const { modalState, setModalState } = useModal();
const {
  //setUser,
  user,
} = useUser();

const userRef = ref(user);
const state = ref<boolean>(modalState.value);

watch(state, () => {
  setModalState(state.value);
});
watch(modalState, () => {
  state.value = modalState.value;
});
const par = [
  {
    id: 1,
    nombre: 'Admin',
  },
];
const save = () => {
  console.log(userRef);
};
</script>
<template>
  <q-dialog v-model="state">
    <q-card>
      <q-form @submit="save">
        <q-card-section>
          <div class="text-h6">Usuario</div>
          <div class="text-subtitle">Crear Usuario</div>
        </q-card-section>
        <q-separator />
        <q-card-section>
          <q-input v-model="userRef.nombre" label="PATERNO"></q-input>
          <q-input v-model="userRef.nombre" label="MATERNO"></q-input>
          <q-input v-model="userRef.nombre" label="NOMBRE"></q-input>
          <q-select
            v-model="userRef.nombre"
            :options="par"
            label="Rol de Usuario"
          />
        </q-card-section>

        <q-separator />

        <q-card-actions class="right-action">
          <q-btn v-close-popup flat color="primary" label="Cancelar" />
          <q-btn v-close-popup color="primary" label="Guardar" type="submit" />
        </q-card-actions>
      </q-form>
    </q-card>
  </q-dialog>
</template>
<style scoped>
.q-card {
  width: 500px;
  max-width: 80vw;
}
.right-action {
  float: right !important;
}
.q-field {
  margin-bottom: 5px;
}
</style>
