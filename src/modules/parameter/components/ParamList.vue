<script lang="ts" setup>
import useParameter from '../composables/useParameter';

const { getParameterListView } = useParameter();

const parameterList = await getParameterListView();
// console.log(getParameterListView());

//use composable
</script>
<template>
  <q-expansion-item
    v-for="param in parameterList"
    :key="param.tipo"
    :content-inset-level="0.5"
    icon="mdi-account-group-outline"
    :label="param.tipo.toUpperCase()"
  >
    <q-item v-for="(par, key) in param.nombre" :key="key">
      <q-item-section avatar>
        <q-icon name="mdi-arrow-right-bottom" />
      </q-item-section>
      <q-item-section>
        <q-item-label>{{ par }}</q-item-label>
      </q-item-section>
      <q-item-section top side>
        <div class="text-grey-8 q-gutter-xs">
          <q-btn size="12px" flat dense round icon="mdi-delete" />
          <q-btn size="12px" flat dense round icon="mdi-dots-vertical" />
        </div>
      </q-item-section>
    </q-item>
  </q-expansion-item>
</template>
