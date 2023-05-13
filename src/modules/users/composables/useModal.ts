import { storeToRefs } from 'pinia';
import { useModalStore } from '../store/modalStore';
const store = useModalStore();
const { modalState } = storeToRefs(store);

const useModal = () => {
  return {
    modalState,
    setModalState: store.setModalState,
  };
};

export default useModal;
