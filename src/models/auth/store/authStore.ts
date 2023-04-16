import { ref } from 'vue';
import { defineStore } from 'pinia';

import { AuthInterface } from '../interfaces/auth.interface';
import { LoginInterface } from '../interfaces/login.interface';

export const useAuthStore = defineStore('auth', () => {

  //state
  const auth = ref<AuthInterface>();
  const login = ref<LoginInterface>();

  return{
    //state
    auth,
    login,
    //getters
    

    //actions
    setAuth( newAuth: AuthInterface) {
      auth.value = newAuth
    },
    setLogin( newLogin: LoginInterface ){
      login.value = newLogin
    }
  }

  

  // state: () => ({
  //   usaurio: '',
  //   email: '',
  //   token: '',
  // }),
  // getters: {
  //   token: (state) => state.token,
  // },
  // actions: {
  //   async setToken (token: string) {
  //     this.token = token;
  //   },
  // },
});
