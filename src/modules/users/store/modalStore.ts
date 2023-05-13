import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useModalStore = defineStore('modal', () => {
  //state
  const modalState = ref<boolean>(false);
  return {
    //state
    modalState,
    //getters
    // getUserList() {
    //   return userList;
    // },
    //actions
    setModalState(state: boolean) {
      modalState.value = state;
    },
  };
});
