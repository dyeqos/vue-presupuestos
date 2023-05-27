import { api } from 'src/boot/axios';
import { parameterStore } from '../stores/parameterStore'
import { ParameterResponseInterface } from '../interfaces/parameterResponse.interface.';

const store = parameterStore();

const getParameters = async (type: string): Promise<ParameterResponseInterface> => {
    console.log(3);
    const url = `/params/${type}`.toLowerCase();
    const { data } = await api.get<ParameterResponseInterface>(url);
    console.log(data);
    return data;
}

const useParameter = () => {

    const getParameterList = (type: string | undefined): Promise<ParameterResponseInterface> => {
        console.log(2);
        const data = getParameters(type || '')
            .then(({ ok, msg, data }) => {
                if (ok === true) {
                    store.setParameterList(data || [])
                } else {
                    store.setParameterList([])
                }
                return { ok, msg }
            }).catch(err => {
                store.setParameterList([])
                return err.response.data;
            })
        return data;
    }
    return {
        getParameterList,
        //methods
        parameterList: store.getParameterList
    }
}

export default useParameter;