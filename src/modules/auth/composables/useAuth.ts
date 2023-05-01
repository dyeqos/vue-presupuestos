// import { useQuery } from '@tanstack/vue-query';
// import { storeToRefs } from 'pinia';
import { useAuthStore } from '../store/authStore';
import { api } from 'src/boot/axios';

import { AuthInterface } from '../interfaces/auth.interface';
import { LoginInterface } from '../interfaces/login.interface';

const getAuth = async (objlogin: LoginInterface): Promise<AuthInterface> => {
  const { data } = await api.post<AuthInterface>('/auth/login', objlogin);
  return data;
};

const getValidateJWT = async (): Promise<AuthInterface> => {
  const { data } = await api.get<AuthInterface>('/auth/validarJWT', {
    headers: {
      'x-token': sessionStorage.getItem('v-token') || '',
    },
  });

  return data;
};

const useAuth = () => {
  const store = useAuthStore();
  // const {  } = storeToRefs(store);

  // USE-QUERY9
  // const data = useQuery( (data:string) => {
  //   ['auth'],
  //   () => getAuth(objlogin),
  // });

  const authLogin = (objlogin: LoginInterface): Promise<AuthInterface> => {
    const data = getAuth(objlogin)
      .then(({ ok, msg }) => {
        if (ok === true) {
          store.setToken(msg);
          sessionStorage.setItem('v-token', msg);
        }
        return { ok, msg };
      })
      .catch((err) => {
        return err.response.data;
      });
    return data;
  };

  const validateToken = (): Promise<AuthInterface> => {
    const data = getValidateJWT()
      .then(({ ok, msg }) => {
        if (ok === true) {
          store.setToken(msg);
          sessionStorage.setItem('v-token', msg);
        }
        return { ok, msg };
      })
      .catch((err) => {
        return err.response.data;
      });
    return data;
  };

  return {
    authLogin,
    validateToken,
    getToken: store.getToken,
    setToken: store.setToken,
  };
};

export default useAuth;
