import {StyleSheet, Text, View} from 'react-native';
import React, {useContext} from 'react';
import I18n from '../utility/I18n';

export const LocalizationContext = React.createContext();

export default function Localization({children}) {
  const [locale, setLocale] = React.useState('en');

  const localizationContext = React.useMemo(
    () => ({
      t: (scope, options) => I18n.t(scope, {locale, ...options}),
      locale,
      setLocale,
    }),
    [locale],
  );

  return (
    <LocalizationContext.Provider value={localizationContext}>
      {children}
    </LocalizationContext.Provider>
  );
}

const styles = StyleSheet.create({});
