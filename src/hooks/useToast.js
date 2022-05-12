import {useContext} from 'react';
import {ToastContext} from '../context/Toast';

const useToast = () => {
  const {showToast} = useContext(ToastContext);

  return {showToast};
};

export default useToast;
