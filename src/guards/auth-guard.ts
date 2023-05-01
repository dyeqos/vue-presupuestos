import useAuth from 'src/modules/auth/composables/useAuth';
import { NavigationGuardNext, RouteLocationNormalized } from 'vue-router';
//const { validateToken } = useAuth();

const isAuthenticated = async (
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext
) => {
  const { validateToken } = useAuth();
  const authenticated = await validateToken();
  if(authenticated.ok===true){
      next()
  }else{
      next({name:'auth-login' })
  }
};

export default isAuthenticated;
