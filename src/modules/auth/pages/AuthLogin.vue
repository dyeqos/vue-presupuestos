<script lang="ts" setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import useAuth from '../composables/useAuth';

const { authLogin } = useAuth();
const router = useRouter();

const email = ref('dyeqos@gmail.com');
const password = ref('123456');

const login = async () => {
  const objLogin = {
    correo: email.value,
    password: password.value,
  };

  const login = await authLogin(objLogin);
  if (login.ok === true) {
    //redirect main
    router.push({ name: 'dashboard' });
  } else {
    //msg error
    console.log('usuario o contraseña incorrecto');
  }
};
</script>

<template>
  <q-card-section class="q-my-lg">
    <div class="text-center text-h3">Login</div>
  </q-card-section>
  <q-card-section class="q-px-md">
    <form>
      <q-field>
        <q-input
          v-model="email"
          placeholder="EMAIL"
          type="email"
          float-label="E-Mail"
          required
        ></q-input>
      </q-field>

      <q-field>
        <q-input
          v-model="password"
          placeholder="PASSWORD"
          type="password"
          float-label="Password"
          required
        ></q-input>
      </q-field>
    </form>
  </q-card-section>

  <q-card-actions>
    <q-btn @click="login" type="submit">Login</q-btn>
  </q-card-actions>
</template>
