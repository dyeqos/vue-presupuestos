<script lang="ts" setup>
import { ref } from 'vue';
import useModal from '../composables/useModal';
import useUser from '../composables/useUser';
import useParameter from '../../parameter/composables/useParameter';

import { ParameterModel } from '../../parameter/models/parameter.model';
import { isValidEmail } from 'src/tools/validations/format.validation';

const { modalState } = useModal();
const { getParameterList, parameterList } = useParameter();
const { user, saveUser, resetUser, updateUser } = useUser();

const parameterRolList = ref<ParameterModel[]>([]);
//methods
const getRolParameter = async () => {
  const data = await getParameterList('roles');
  if (data.ok === true) {
    parameterRolList.value = parameterList();
  }
  console.log(parameterRolList);
};
getRolParameter();
const save = async () => {
  if (user.value.uid) {
    user.value.password = '';
    await updateUser();
    modalState.value = false;
    return;
  }
  user.value.password = user.value.correo;
  await saveUser();
  modalState.value = false;
};
</script>
<template>
  <q-dialog v-model="modalState">
    <q-card>
      <q-form @submit="save" autocomplete="off">
        <q-card-section class="q-pa-xsmd">
          <div class="text-h6">Usuario</div>
          <div class="text-subtitle">Crear Usuario</div>
        </q-card-section>
        <q-separator />
        <q-card-section>
          <q-input
            v-model="user.paterno"
            label="Apellido Paterno"
            @update:model-value="
              (val) => (user.paterno = val?.toString().toUpperCase() || '')
            "
            :rules="[(val:string) => (val != null && val != '') || 'El Apellido es requerido']"
          ></q-input>
          <q-input
            v-model="user.materno"
            label="Apellido Materno"
            @update:model-value="
              (val) => (user.materno = val?.toString().toUpperCase() || '')
            "
            :rules="[(val:string) => (val != null && val != '') || 'El Apellido es requerido']"
          ></q-input>
          <q-input
            v-model="user.nombre"
            label="Nombres"
            @update:model-value="
              (val) => (user.nombre = val?.toString().toUpperCase() || '')
            "
            :rules="[(val:string) => (val != null && val != '') || 'El Nombre es requerido']"
          ></q-input>
          <q-input
            v-model="user.correo"
            label="Correo"
            @update:model-value="
              (val) => (user.correo = val?.toString().toLowerCase() || '')
            "
            :rules="[(val:string) => (val != null && val != '') || 'El Correo es requerido',
                     (val:string)=> isValidEmail(val) || 'No es un correo válido']"
          ></q-input>
          <q-select
            v-model="user.rol"
            :options="parameterRolList"
            option-value="uid"
            option-label="nombre"
            label="Rol de Usuario"
            emit-value
            :rules="[(val:string) => (val != null && val != '') || 'El Rol es requerido' + val]"
          />
        </q-card-section>

        <q-separator />

        <q-card-actions class="right-action">
          <q-btn
            v-close-popup
            flat
            color="primary"
            label="Cancelar"
            @click="resetUser"
          />
          <q-btn color="primary" label="Guardar" type="submit" />
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
