import { watch } from 'vue';
import { storeToRefs } from 'pinia';
import { useQuery } from '@tanstack/vue-query';
import { api } from '../../../boot/axios';
import { useAuthStore } from '../store/authStore';

import { AuthInterface } from '../interfaces/auth.interface';
import { LoginInterface } from '../interfaces/login.interface';

const getAuth = async (objlogin: LoginInterface): Promise<AuthInterface> => {
    debugger;
  const { data } = await api.post<AuthInterface>('/auth/login', objlogin);
  return data;
};

const useAuth = (objlogin: LoginInterface) => {
  debugger;
  const store = useAuthStore();
  const { auth } = storeToRefs(store);

  const { isLoading, data } = useQuery(['/auth/login'], () =>
    getAuth(objlogin)
  );

  watch(data, (auth) => {
    if (auth) {
      store.setAuth(auth);
    }
  });

  return {
    isLoading,
    auth,
  };
};

export default useAuth;
