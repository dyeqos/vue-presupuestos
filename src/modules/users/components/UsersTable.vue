<script lang="ts" setup>
import { ref } from 'vue';
import { QTableProps } from 'quasar';

import useUser from '../composables/useUser';
import { UserModel } from '../models/user.model';

//use composable
const { getUserList, userList } = useUser();
//table
const rows = ref<UserModel[]>([]);
const columns: QTableProps['columns'] = [
  {
    name: 'paterno',
    label: 'PATERNO',
    align: 'center',
    field: (row: UserModel) => row.paterno,
  },
  {
    name: 'materno',
    label: 'MATERNO',
    align: 'center',
    field: (row: UserModel) => row.materno,
  },
  {
    name: 'nombre',
    label: 'NOMBRE',
    align: 'center',
    field: (row: UserModel) => row.nombre,
  },
  {
    name: 'correo',
    label: 'CORREO',
    align: 'center',
    field: (row: UserModel) => row.correo,
  },
  {
    name: 'rol',
    label: 'ROL',
    align: 'center',
    field: (row: UserModel) => row.rol.nombre,
  },
  {
    name: 'estado',
    label: 'ESTADO',
    align: 'center',
    field: (row: UserModel) => row.estado,
    format: (val: boolean) => (val === true ? 'ACTIVO' : 'INACTIVO'),
  },
  {
    name: 'actions',
    label: 'OPCIÓN',
    align: 'center',
    field: '',
  },
];
//get users
const data = await getUserList();
if (data.ok === true) {
  rows.value = userList.value;
} else {
  rows.value = [];
}
//metodos
const editRow = (data: UserModel) => {
  console.log(data);
};
const deleteRow = (data: UserModel) => {
  console.log(data);
};
</script>
<template>
  <q-table
    bordered
    class="q-my-md"
    :rows="rows"
    :columns="columns"
    row-key="UID"
  >
    <template v-slot:body-cell-actions="props">
      <q-td :props="props">
        <q-btn
          dense
          round
          flat
          color="grey"
          @click="editRow(props.row)"
          icon="mdi-pencil"
        ></q-btn>
        <q-btn
          dense
          round
          flat
          color="grey"
          @click="deleteRow(props.row)"
          icon="mdi-delete"
        ></q-btn>
      </q-td> </template
  ></q-table>
</template>
