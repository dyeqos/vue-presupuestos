<script lang="ts" setup>
import { QTableProps } from 'quasar';

import useUser from '../composables/useUser';
import useModal from '../composables/useModal';

import { UserModelList } from '../models/user.model';
//use composable
const { getUserList, userList, user, deleteUser } = useUser();
const { modalState } = useModal();
//table
const rows = userList;
const columns: QTableProps['columns'] = [
  {
    name: 'paterno',
    label: 'PATERNO',
    align: 'center',
    field: (row: UserModelList) => row.paterno,
  },
  {
    name: 'materno',
    label: 'MATERNO',
    align: 'center',
    field: (row: UserModelList) => row.materno,
  },
  {
    name: 'nombre',
    label: 'NOMBRE',
    align: 'center',
    field: (row: UserModelList) => row.nombre,
  },
  {
    name: 'correo',
    label: 'CORREO',
    align: 'center',
    field: (row: UserModelList) => row.correo,
  },
  {
    name: 'rol',
    label: 'ROL',
    align: 'center',
    field: (row: UserModelList) => row.rol.nombre,
  },
  {
    name: 'estado',
    label: 'ESTADO',
    align: 'center',
    field: (row: UserModelList) => row.estado,
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
await getUserList();
//metodos
const editRow = (data: UserModelList) => {
  const { correo, materno, nombre, paterno, estado, google, password, uid } =
    data;
  user.value = {
    correo,
    materno,
    nombre,
    paterno,
    estado,
    google,
    password,
    uid,
    rol: data.rol._id,
  };
  modalState.value = true;
};
const deleteRow = async (data: UserModelList) => {
  await deleteUser(data.uid || '');
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
