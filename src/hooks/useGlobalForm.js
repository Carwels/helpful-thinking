import { useContext } from 'react';
import { FormContext } from '@/contexts/FormContext';

const useGlobalForm = () => {
  const { openForm } = useContext(FormContext);
  return openForm;
};

export default useGlobalForm;