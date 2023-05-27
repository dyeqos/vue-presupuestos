<script lang="ts" setup>
import { ref } from 'vue';
import useModal from '../composables/useModal';
import useUser from '../composables/useUser';
import useParameter from '../../parameter/composables/useParameter';

import { UserModel } from '../models/user.model';
import { ParameterModel } from '../../parameter/models/parameter.model';
import { isValidEmail } from '../../../tools/validations/format.validation';

const { modalState } = useModal();
const { getParameterList, parameterList } = useParameter();
const { user: userRef } = useUser();

//const userRef = ref<UserModel>(user.value);
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
const save = () => {
  userRef.value.password = userRef.value.correo;
  console.log(userRef.value);
  console.log(parameterRolList.value);
};
</script>
<template>
  <q-dialog v-model="modalState">
    <q-card>
      <q-form @submit="save">
        <q-card-section>
          <div class="text-h6">Usuario</div>
          <div class="text-subtitle">Crear Usuario</div>
        </q-card-section>
        <q-separator />
        <q-card-section>
          <q-input
            v-model="userRef.paterno"
            label="Apellido Paterno"
            @update:model-value="(val) => val?.toString().toUpperCase()"
          ></q-input>
          <q-input
            v-model="userRef.materno"
            label="Apellido Materno"
            class="text-uppercase"
          ></q-input>
          <q-input
            v-model="userRef.nombre"
            label="Nombres"
            class="text-uppercase"
          ></q-input>
          <q-input
            v-model="userRef.correo"
            label="Correo"
            :rules="[(val:string)=> isValidEmail(val) || 'No es un correo válido']"
            class="text-lowercase"
          ></q-input>
          <q-select
            v-model="userRef.rol"
            :options="parameterRolList"
            option-value="uid"
            option-label="nombre"
            label="Rol de Usuario"
            emit-value
          />
        </q-card-section>

        <q-separator />

        <q-card-actions class="right-action">
          <q-btn v-close-popup flat color="primary" label="Cancelar" />
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
