import { defineStore } from 'pinia';

export const useLayoutStore = defineStore('layout', {
  state: () => ({
    menuActive: false,
  }),
  getters: {
    getActive: (state) => state.menuActive,
  },
  actions: {
    setActive(menuState: boolean) {
      this.menuActive = menuState;
    },
  },
});
