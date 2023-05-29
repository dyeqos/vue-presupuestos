import { ref } from 'vue';
import { defineStore } from 'pinia';
import { ParameterModel } from '../models/parameter.model';
import { ParameterListInterface } from '../interfaces/parameterList.interface';

export const parameterStore = defineStore('parameter', () => {
  //state
  const parameterList = ref<ParameterModel[]>([]);
  const parameterListView = ref<ParameterListInterface[]>([]);
  const types = ref<string[]>(['ROLES']);
  return {
    //state
    parameterList,
    parameterListView,
    types,
    //getters
    getParameterList(): ParameterModel[] {
      return [...parameterList.value];
    },
    getTypesParameters(): string[] {
      return { ...types.value };
    },
    getParameterListView(): ParameterListInterface[] {
      return parameterListView.value;
    },
    //setters
    setParamListView(data: ParameterListInterface[]) {
      parameterListView.value = data;
    },
    //actions
    setParameterList(data: ParameterModel[]): void {
      parameterList.value = data;
    },
  };
});
