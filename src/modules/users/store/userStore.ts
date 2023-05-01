import { ref } from 'vue';
import { defineStore } from 'pinia';
import { UserModel } from '../models/user.model';

export const useUserStore = defineStore('user', () => {
  //state
  const userList = ref<UserModel[]>([]);
  return {
    //state
    userList,
    //getters
    getUserList() {
      return userList;
    },
    //actions
    setUserList(data: UserModel[]){
        userList.value = data
    }
  };
});
