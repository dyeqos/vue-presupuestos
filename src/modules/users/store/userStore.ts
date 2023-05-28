import { ref } from 'vue';
import { defineStore } from 'pinia';
import { UserModel, UserModelList } from '../models/user.model';

export const useUserStore = defineStore('user', () => {
  //state
  const userList = ref<UserModelList[]>([]);
  const user = ref<UserModel>({
    correo: null,
    materno: null,
    nombre: null,
    paterno: null,
    password: null,
    rol: null,
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
    setUserList(data: UserModelList[]) {
      userList.value = data;
    },
    setUser(data: UserModel) {
      user.value = data;
    },
    resetUser() {
      user.value = {
        correo: null,
        materno: null,
        nombre: null,
        paterno: null,
        password: null,
        rol: null,
      };
    },
  };
});
