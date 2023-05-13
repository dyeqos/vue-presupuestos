import { ref } from 'vue';
import { defineStore } from 'pinia';
import { UserModel } from '../models/user.model';

export const useUserStore = defineStore('user', () => {
  //state
  const userList = ref<UserModel[]>([]);
  const user = ref<UserModel>({
    correo: '',
    materno: '',
    nombre: '',
    paterno: '',
    rol: {
      _id: '',
      nombre: '',
    },
  });
  return {
    //state
    userList,
    user,
    //getters
    // getUserList() {
    //   return userList;
    // },
    //actions
    setUserList(data: UserModel[]) {
      userList.value = data;
    },
    setUser(data: UserModel) {
      user.value = data;
    },
  };
});
