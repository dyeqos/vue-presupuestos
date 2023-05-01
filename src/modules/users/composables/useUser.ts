// import { useQuery } from '@tanstack/vue-query';
// import { storeToRefs } from 'pinia';
import { UserResponseInterface } from '../interfaces/response.interface';
import { useUserStore } from '../store/userStore';
import { api } from 'src/boot/axios';

// const getAuth = async (objlogin: LoginInterface): Promise<AuthInterface> => {
//   const { data } = await api.post<AuthInterface>('/auth/login', objlogin);
//   return data;
// };

const getUserResponse = async (): Promise<UserResponseInterface> => {
  const { data } = await api.get<UserResponseInterface>('/usuarios/', {
    headers: {
      'x-token': sessionStorage.getItem('v-token') || '',
    },
  });
  return data;
};

const useUser = () => {
  const store = useUserStore();
  // const {  } = storeToRefs(store);

  // USE-QUERY9
  // const data = useQuery( (data:string) => {
  //   ['auth'],
  //   () => getAuth(objlogin),
  // });

  const getUserList = (): Promise<UserResponseInterface> => {
    const data = getUserResponse()
      .then(({ ok, msg, data }) => {
        if (ok === true) {
          if (data) {
            store.setUserList(data);
          }
        }
        return { ok, msg };
      })
      .catch((err) => {
        return err.response.data;
      });
    return data;
  };

  return {
    getUserList,
  };
};

export default useUser;
