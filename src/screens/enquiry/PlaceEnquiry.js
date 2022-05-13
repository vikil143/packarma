import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableWithoutFeedback,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import BackHeader from '../../components/back-header';
import typography from '../../utility/typography';
import {Colors} from '../../utility/constants';
import Spacing from '../../components/spacing';
import Picker from '../../components/picker';
import Label from '../../components/label';
import useLocalization from '../../hooks/useLocalization';
import api from '../../utility/api';

export default function PlaceEnquiry({navigation}) {
  const [dropDownList, setDropDownList] = useState({
    measureUnits: [],
    storageConditions: [],
    machine: [],
    productForm: [],
    machine: [],
  });
  const [formState, setFormState] = useState({
    productCategory: '',
    products: '',
    shelfLife: '',
    productWeight: '',
    storageConditions: '',
    machine: '',
    productForm: '',
    packagingType: '',
    treatment: '',
    location: '',
    //
    units: '',
    days: '',
  });
  const t = useLocalization();

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    getMeasureUnits();
    getStorageCondition();
    getMachine();
    getProductForm();
  };

  const getMeasureUnits = async () => {
    try {
      const formData = {
        search: '',
        unit_id: '',
        unit_name: '',
        unit_symbol: '',
        page_no: '',
        limit: '',
      };
      const response = await api({
        url: 'measurement_unit/listing',
        data: formData,
      });

      setDropDownList({
        ...dropDownList,
        measureUnits: response.data.data.result,
      });

      console.log('response data', response.data.data);
    } catch (error) {
      console.log('Error ', error);
    }
  };

  const getStorageCondition = async () => {
    try {
      const formData = {
        search: '',
        storage_condition_id: '',
        storage_condition_title: '',
        page_no: '',
        limit: '',
      };
      const response = await api({
        url: 'storage_condition/listing',
        data: formData,
      });

      setDropDownList({
        ...dropDownList,
        storageConditions: response.data.data.result,
      });

      console.log('response data storage', response.data.data);
    } catch (error) {
      console.log('Error ', error);
    }
  };

  const getMachine = async () => {
    try {
      const formData = {
        search: '',
        machine_id: '',
        machine_name: '',
        page_no: '',
        limit: '',
      };
      const response = await api({
        url: 'packaging_machine/listing',
        data: formData,
      });

      setDropDownList({
        ...dropDownList,
        machine: response.data.data.result,
      });

      console.log('response data', response.data.data);
    } catch (error) {
      console.log('Error ', error);
    }
  };

  const getProductForm = async () => {
    try {
      const formData = {
        search: '',
        form_id: '',
        form_name: '',
        page_no: '',
        limit: '',
      };
      const response = await api({
        url: 'product_form/listing',
        data: formData,
      });

      setDropDownList({
        ...dropDownList,
        productForm: response.data.data.result,
      });

      console.log('response data', response.data.data);
    } catch (error) {
      console.log('Error ', error);
    }
  };

  const handlePickerChanges = (value, name) =>
    setFormState({...formState, [name]: value});
  return (
    <View style={{flex: 1}}>
      <BackHeader title={'Help Request'} />
      <View style={{flex: 1}}>
        <ScrollView style={{padding: 15}}>
          <View style={{}}>
            {/* <Text
            style={{
              fontFamily: typography.poppinsRegular,
              fontSize: 14,
              color: Colors.black,
            }}>
            Product Category*
          </Text> */}
            <Label required>Product Category</Label>
            <Spacing size={5} />
            <Picker
              data={[
                {label: 'Python', value: 'python'},
                {label: 'Java', value: 'java'},
              ]}
              placeHolder="Select Product Category"
              name={'productCategory'}
              selectedValue={formState.productCategory}
              onValueChange={handlePickerChanges}
            />
          </View>
          <Spacing size={10} />
          <View style={{}}>
            <Label required>Product</Label>
            <Spacing size={5} />
            <Picker
              containerStyle={{backgroundColor: '#ddd'}}
              data={[
                {label: 'Python', value: 'python'},
                {label: 'Java', value: 'java'},
              ]}
              placeHolder="Select Products"
              name={'products'}
              selectedValue={formState.products}
              onValueChange={handlePickerChanges}
            />
          </View>
          <Spacing size={10} />
          <View style={{}}>
            <Label required>Shelf Life</Label>
            <Spacing size={5} />
            <View style={{flexDirection: 'row'}}>
              <View
                style={{
                  backgroundColor: Colors.white,
                  padding: 10,
                  flex: 1,
                  justifyContent: 'center',
                }}>
                <Text style={{color: '#707070', fontSize: 16}}>
                  Days/Months
                </Text>
              </View>

              <Spacing />
              <Picker
                data={[{label: 'Days', value: 'days'}]}
                containerStyle={{flex: 1 / 2}}
                placeHolder="Days"
                name={'days'}
                selectedValue={formState.days}
                onValueChange={handlePickerChanges}
              />
            </View>
          </View>

          <Spacing size={10} />
          <View style={{}}>
            <Label required>Product Weight</Label>
            <Spacing size={5} />
            <View style={{flexDirection: 'row'}}>
              <View
                style={{
                  backgroundColor: Colors.white,
                  padding: 10,
                  flex: 1,
                  justifyContent: 'center',
                }}>
                <Text style={{color: '#707070', fontSize: 16}}>
                  Days/Months
                </Text>
              </View>

              <Spacing />
              <Picker
                data={dropDownList.measureUnits}
                containerStyle={{flex: 1 / 2}}
                placeHolder={'Kg'}
                name={'units'}
                selectedValue={formState.units}
                onValueChange={handlePickerChanges}
              />
            </View>
          </View>

          <Spacing size={10} />
          <View style={{}}>
            <Label required>Storage conditions</Label>
            <Spacing size={5} />
            <View>
              <Picker
                data={dropDownList.storageConditions}
                containerStyle={{flex: 1 / 2}}
                placeHolder="Select storage conditions"
                name={'storageConditions'}
                selectedValue={formState.storageConditions}
                onValueChange={handlePickerChanges}
              />
            </View>
          </View>
          <Spacing size={10} />
          <View style={{}}>
            <Label required>Machine</Label>
            <Spacing size={5} />
            <View>
              <Picker
                data={dropDownList.machine}
                placeHolder="Select Machine"
                name={'machine'}
                selectedValue={formState.machine}
                onValueChange={handlePickerChanges}
              />
            </View>
          </View>

          <Spacing size={10} />

          <View style={{}}>
            <Label required>Product form</Label>
            <Spacing size={5} />
            <View>
              <Picker
                data={dropDownList.productForm}
                placeHolder="Select Product form"
                name={'productForm'}
                selectedValue={formState.productForm}
                onValueChange={handlePickerChanges}
              />
            </View>
          </View>
          <Spacing size={10} />

          <View style={{}}>
            <Label required>Packaging Type </Label>
            <Spacing size={5} />
            <View>
              <Picker
                data={[{label: 'Days', value: 'days'}]}
                placeHolder="Enter PIN number"
                name={'packagingType'}
                selectedValue={formState.packagingType}
                onValueChange={handlePickerChanges}
              />
            </View>
          </View>
          <Spacing size={10} />

          <View style={{}}>
            <Label required>Treatments</Label>
            <Spacing size={5} />
            <View>
              <Picker
                data={[{label: 'Days', value: 'days'}]}
                placeHolder="Select Machine"
                name={'treatment'}
                selectedValue={formState.treatment}
                onValueChange={handlePickerChanges}
              />
            </View>
          </View>
          <Spacing size={10} />

          <View style={{}}>
            <Label required>Location</Label>
            <Spacing size={5} />
            <View>
              <Picker
                data={[{label: 'Days', value: 'days'}]}
                placeHolder="Enter PIN number"
                name={'location'}
                selectedValue={formState.location}
                onValueChange={handlePickerChanges}
              />
            </View>
          </View>
          <Spacing size={10} />

          <TouchableWithoutFeedback
            onPress={() => navigation.navigate('EnquiryDescription')}>
            <View
              style={{
                backgroundColor: Colors.brownColor,
                padding: 15,
                paddingHorizontal: 30,
              }}>
              <Text
                style={{
                  color: Colors.white,
                  textAlign: 'center',
                  fontSize: 16,
                  fontStyle: typography.poppinsRegular,
                }}>
                {t('common.proceed')}
                {/* Proceed */}
              </Text>
            </View>
          </TouchableWithoutFeedback>

          <Spacing size={30} />
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
