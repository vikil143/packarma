import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import BackHeader from '../../components/back-header';
import SearchIcon from '../../svg/search';
import Search from '../../components/search';
import ProductItem from './Product';
import {Colors} from '../../utility/constants';
import typography from '../../utility/typography';
import Spacing from '../../components/spacing';
import useLocalization from '../../hooks/useLocalization';

export default function Product({}) {
  const t = useLocalization();

  return (
    <View style={{flex: 1}}>
      <BackHeader title={'Products'} />
      <View style={{padding: 10, flex: 1}}>
        <Search />
        <Spacing size={5} />
        <ProductItem name="Dairy" />
        <ProductItem name="Beverages" />
        <ProductItem name="Jams & Jelly" />
        <ProductItem name="Bakery" />
        <ProductItem name="Pickles & chutneys" />
        <ProductItem name="Fresh Fruits & vegetables" />
        <ProductItem name="Fresh Fruits & vegetables" />
        <ProductItem name="Dried & dehydrated food products" />
        <ProductItem name="Pickles & chutneys" />
        <ProductItem name="Fresh Fruits & vegetables" />
        <ProductItem name="Bakery" />
        <ProductItem name="Fresh Fruits & vegetables" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
