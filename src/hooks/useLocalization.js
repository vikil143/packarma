import React, {useContext} from 'react';
import {LocalizationContext} from '../context/Localization';

const useLocalization = () => {
  const {t} = useContext(LocalizationContext);

  return t;
};

export default useLocalization;
