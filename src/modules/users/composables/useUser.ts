// import { useQuery } from '@tanstack/vue-query';
import { storeToRefs } from 'pinia';
import { api } from 'src/boot/axios';
import { useUserStore } from '../store/userStore';

import { UserResponseInterface } from '../interfaces/response.interface';
import { UserModel } from '../models/user.model';

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

const setUserSaveRequest = async (
  userData: UserModel
): Promise<UserResponseInterface> => {
  const { data } = await api.post<UserResponseInterface>(
    '/usuarios/',
    userData,
    {
      headers: {
        'x-token': sessionStorage.getItem('v-token') || '',
      },
    }
  );
  return data;
};

const setUserUpdateRequest = async (
  userData: UserModel
): Promise<UserResponseInterface> => {
  const { data } = await api.put<UserResponseInterface>(
    '/usuarios/',
    userData,
    {
      headers: {
        'x-token': sessionStorage.getItem('v-token') || '',
      },
    }
  );
  return data;
};
const setUserDeleteRequest = async (
  uid: string
): Promise<UserResponseInterface> => {
  const headers = {
    'x-token': sessionStorage.getItem('v-token') || '',
  };
  const { data } = await api.delete<UserResponseInterface>('/usuarios/', {
    headers,
    data: { uid },
  });
  return data;
};

const useUser = () => {
  const store = useUserStore();
  const { userList, user } = storeToRefs(store);

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

  const saveUser = (): Promise<UserResponseInterface> => {
    const userResponse = setUserSaveRequest(user.value)
      .then(({ ok, msg }) => {
        if (ok === true) {
          console.log(msg);
          getUserList();
          store.resetUser();
        } else {
          console.log(msg);
        }
        return { ok, msg };
      })
      .catch((err) => {
        return err.response.data;
      });

    return userResponse;
  };

  const updateUser = (): Promise<UserResponseInterface> => {
    const userResponse = setUserUpdateRequest(user.value)
      .then(({ ok, msg }) => {
        if (ok === true) {
          console.log(msg);
          getUserList();
          store.resetUser();
        } else {
          console.log(msg);
        }
        return { ok, msg };
      })
      .catch((err) => {
        console.log(err);
        return err.response.data;
      });

    return userResponse;
  };

  const deleteUser = (uid: string): Promise<UserResponseInterface> => {
    const userResponse = setUserDeleteRequest(uid || '')
      .then(({ ok, msg }) => {
        if (ok === true) {
          console.log(msg);
          getUserList();
        } else {
          console.log(msg);
        }
        return { ok, msg };
      })
      .catch((err) => {
        console.log(err);
        return err.response.data;
      });

    return userResponse;
  };

  return {
    getUserList,
    saveUser,
    updateUser,
    deleteUser,
    //state
    userList,
    user,
    //methods
    setUser: store.setUser,
    resetUser: store.resetUser,
  };
};

export default useUser;
