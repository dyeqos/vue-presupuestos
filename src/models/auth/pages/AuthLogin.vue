<script lang="ts" setup>
import { ref } from 'vue';
// import { api } from 'boot/axios';
// import { useAuthStore } from '../store/authStore';
import  useAuth  from '../composables/useAuth';

// const authStore = useAuthStore();
const email = ref('dyeqos@gmail.com');
const password = ref('123456');

const login = () => {

  const {auth} = useAuth( {correo:email.value ,password: password.value } )

  console.log(auth)
  // const loguin = await api.post('/auth/login', {
  //   correo: email.value,
  //   password: password.value,
  // });

  // console.log(loguin);

  // loguin.then(({ data }) => {
  //   console.log(data);
  //   if (data.ok === true) {
  //     authStore.setToken(data.msg);
  //   }
  // });
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
