import { ref } from 'vue';
import { defineStore } from 'pinia';
import { ParameterModel } from '../models/parameter.model';

export const parameterStore = defineStore('parameter', () => {
    //state
    const parameterList = ref<ParameterModel[]>([]);
    const types = ref<string[]>(['ROLES']);
    return {
        //state
        parameterList,
        types,
        //getters
        getParameterList(): ParameterModel[] {
            return [...parameterList.value];
        },
        getTypesParameters(): string[] {
            return { ...types.value }
        },
        //actions
        setParameterList(data: ParameterModel[]): void {
            parameterList.value = data
        }
    };
});
