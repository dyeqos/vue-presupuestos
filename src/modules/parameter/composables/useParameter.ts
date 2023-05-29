import { api } from 'src/boot/axios';
import { parameterStore } from '../stores/parameterStore';
import { ParameterResponseInterface } from '../interfaces/parameterResponse.interface.';
import { ParameterModel } from '../models/parameter.model';
import ParamListVue from '../components/ParamList.vue';
import { ParameterListInterface } from '../interfaces/parameterList.interface';

const store = parameterStore();

const getParameters = async (
  type: string
): Promise<ParameterResponseInterface> => {
  const url = `/params/${type}`.toLowerCase();
  const { data } = await api.get<ParameterResponseInterface>(url);
  console.log(data);
  return data;
};

const useParameter = () => {
  const getParameterList = (
    type?: string
  ): Promise<ParameterResponseInterface> => {
    const data = getParameters(type || '')
      .then(({ ok, msg, data }) => {
        if (ok === true) {
          store.setParameterList(data || []);
        } else {
          store.setParameterList([]);
        }
        return { ok, msg, data };
      })
      .catch((err) => {
        store.setParameterList([]);
        return err.response.data;
      });
    return data;
  };

  const getParameterListView = (): Promise<ParameterListInterface[]> => {
    let paramList: ParameterModel[] = [];
    const rols: string[] = [];
    const tipsActives: string[] = [];
    const banks: string[] = [];
    const accounts: string[] = [];
    const resultList = getParameterList()
      .then(({ data, ok }) => {
        if (ok === true) {
          paramList = data || [];
          paramList.forEach((param) => {
            console.log(param.tipo);
            switch (param.tipo.toUpperCase()) {
              case 'ROL':
                rols.push(param.nombre);
                break;
            }
          });

          const result: ParameterListInterface[] = [];
          result.push({ tipo: 'ROL', nombre: rols });
          return result;
        } else {
          return [];
        }
      })
      .catch(() => {
        return [];
      });

    return resultList;
  };

  return {
    getParameterList,
    getParameterListView,
    //methods
    parameterList: store.getParameterList,
  };
};

export default useParameter;
