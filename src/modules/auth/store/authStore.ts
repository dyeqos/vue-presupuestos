import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', () => {
  //state
  const token = ref<string>();
  const user = ref<string>();
  const email = ref<string>();

  return {
    //state
    token,
    user,
    email,

    //getters
    getToken() {
      return token.value;
    },

    //actions
    setToken(newToken: string) {
      token.value = newToken;
    },
  };
});
