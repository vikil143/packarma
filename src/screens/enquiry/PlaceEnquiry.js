import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableWithoutFeedback,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import crashlytics from '@react-native-firebase/crashlytics';
import BackHeader from '../../components/back-header';
import ModalDropDown from '../../components/dropdown-model';
import {
  getMachine as getMachineData,
  getMeasureUnits as getMeasureUnitsData,
  getPackagingType as getPackagingTypeData,
  getProductForm as getProductFormData,
  getStorageCondition as getStorageConditionData,
} from '../../reducers/masterData';
import typography from '../../utility/typography';
import {Colors, SUCCESS} from '../../utility/constants';
import Spacing from '../../components/spacing';
import Picker from '../../components/picker';
import Label from '../../components/label';
import useLocalization from '../../hooks/useLocalization';
import api from '../../utility/api';
import WhiteTextBox from '../../components/white_text_box';
import commonStyles from '../../utility/commonStyles';
import useToast from '../../hooks/useToast';

function PlaceEnquiry({navigation, homeData, dispatch, masterData}) {
  // const [dropDownList, setDropDownList] = useState({
  //   measureUnits: [],
  //   storageConditions: [],
  //   machine: [],
  //   productForm: [],
  // });
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
  const {productData, categoryData, treamentData} = homeData;
  const {measureUnits, storageConditions, machine, productForm, packagingType} =
    masterData;
  const t = useLocalization();
  const {showToast} = useToast();

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    getMeasureUnits();
    getStorageCondition();
    getMachine();
    getProductForm();
    getPackagingType();
  };

  const getPackagingType = () => {
    const formData = {
      search: '',
      packaging_type_id: '',
      packaging_type_name: '',
      page_no: '',
      limit: '',
    };
    dispatch(getPackagingTypeData({data: formData}));
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

      dispatch(getMeasureUnitsData({data: formData}));
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

      dispatch(getStorageConditionData({data: formData}));
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

      dispatch(getMachineData({data: formData}));

      // const response = await api({
      //   url: 'packaging_machine/listing',
      //   data: formData,
      // });

      // setDropDownList({
      //   ...dropDownList,
      //   machine: response.data.data.result,
      // });

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

      dispatch(getProductFormData({data: formData}));

      console.log('response data', response.data.data);
    } catch (error) {
      console.log('Error ', error);
    }
  };

  const handlePickerChanges = (value, name) =>
    setFormState({...formState, [name]: value});

  const onChangeText = (name, value) =>
    setFormState({...formState, [name]: value});

  const handleValidation = () => {
    if (!formState.location) {
      showToast(t('errorMessage.required.location'), 2000, Colors.danger);
      return false;
    }

    if (!formState.treatment) {
      showToast(t('errorMessage.required.treament'), 2000, Colors.danger);
      return false;
    }

    if (!formState.packagingType) {
      showToast(t('errorMessage.required.packingType'), 2000, Colors.danger);
      return false;
    }

    if (!formState.productForm) {
      showToast(t('errorMessage.required.productForm'), 2000, Colors.danger);
      return false;
    }

    if (!formState.machine) {
      showToast(t('errorMessage.required.machine'), 2000, Colors.danger);
      return false;
    }

    if (!formState.storageConditions) {
      showToast(
        t('errorMessage.required.storageCondition'),
        2000,
        Colors.danger,
      );
      return false;
    }

    if (!formState.units) {
      showToast(t('errorMessage.required.units'), 2000, Colors.danger);
      return false;
    }

    if (!formState.productWeight) {
      showToast(t('errorMessage.required.productWeight'), 2000, Colors.danger);
      return false;
    }

    if (!formState.days) {
      showToast(t('errorMessage.required.days'), 2000, Colors.danger);
      return false;
    }

    if (!formState.shelfLife) {
      showToast(t('errorMessage.required.shelfLife'), 2000, Colors.danger);
      return false;
    }

    if (!formState.products) {
      showToast(t('errorMessage.required.products'), 2000, Colors.danger);
      return false;
    }

    if (!formState.productCategory) {
      showToast(
        t('errorMessage.required.productCategory'),
        2000,
        Colors.danger,
      );
      return false;
    }

    return true;
  };

  const onProceed = async () => {
    const validate = handleValidation();

    if (validate) {
      try {
        /*
          Product 
        */
        const formData = {
          category_id: categoryData[Number(formState.productCategory) - 1].id,
          product_id: productData[Number(formState.products) - 1].id,
          storage_condition_id:
            storageConditions[Number(formState.storageConditions) - 1].id,
          product_form_id: productForm[Number(formState.productForm) - 1].id,
          packing_type_id:
            packagingType[Number(formState.packagingType) - 1].id,
        };

        const response = await api({
          url: 'packaging_solution/get_packaging_solution',
          data: formData,
        });

        console.log('packaging solution...', response.data);

        if (response.data.success === SUCCESS) {
          crashlytics().log('Go to Enquiry Description');
          navigation.navigate('EnquiryDescription', {
            formState,
            packagingSolution: response.data.data.result,
          });
        } else {
          showToast(response.data.message, 2000, Colors.danger);
        }
      } catch (error) {
        showToast(error.message, 2000, Colors.danger);
        console.log('Error ', error);
      }
    }
  };

  return (
    <View style={[commonStyles.flexOne]}>
      <BackHeader title={t('common.helpRequest')} />
      <View style={[commonStyles.flexOne]}>
        <ScrollView style={{padding: 15}}>
          <View style={{}}>
            <Label required>{t('labels.productCategory')}</Label>
            <Spacing size={5} />
            <ModalDropDown
              list={categoryData}
              selectedIndex={formState.productCategory}
              name="productCategory"
              onValueChange={handlePickerChanges}
              keyElement="category_name"
              placeholder="Select Product Category"></ModalDropDown>
          </View>
          <Spacing size={10} />
          <View style={{}}>
            <Label required>{t('labels.products')}</Label>
            <Spacing size={5} />

            <ModalDropDown
              list={productData}
              containerStyle={{backgroundColor: '#E4E4E4'}}
              selectedIndex={formState.products}
              name="products"
              onValueChange={handlePickerChanges}
              keyElement="product_name"
              placeholder="Select Products"></ModalDropDown>
          </View>
          <Spacing size={10} />
          <View style={{}}>
            <Label required>{t('labels.shelfLife')}</Label>
            <Spacing size={5} />
            <View style={[commonStyles.row]}>
              {/* <View
                style={{
                  backgroundColor: Colors.white,
                  padding: 10,
                  flex: 1,
                  justifyContent: 'center',
                }}>
                <Text style={{color: '#707070', fontSize: 16}}>
                  Days/Months
                </Text>
              </View> */}
              <WhiteTextBox
                containerStyle={[commonStyles.flexOne]}
                placeholder="Days/Months"
                keyboardType="numeric"
                value={formState.shelfLife}
                name="shelfLife"
                onChangeText={onChangeText}
              />

              <Spacing />

              <Picker
                data={[{label: 'Days', value: 'days'}]}
                containerStyle={{flex: 1 / 2}}
                placeHolder="Select"
                name={'days'}
                selectedValue={formState.days}
                onValueChange={handlePickerChanges}
              />
            </View>
          </View>

          <Spacing size={10} />
          <View style={{}}>
            <Label required>{t('labels.productWeight')}</Label>
            <Spacing size={5} />
            <View style={[commonStyles.row]}>
              {/* <View
                style={{
                  backgroundColor: Colors.white,
                  padding: 10,
                  flex: 1,
                  justifyContent: 'center',
                }}>
                <Text style={{color: '#707070', fontSize: 16}}>
                  Days/Months
                </Text>
              </View> */}

              <WhiteTextBox
                containerStyle={[commonStyles.flexOne]}
                placeholder="kg/g"
                keyboardType="numeric"
                value={formState.productWeight}
                name="productWeight"
                onChangeText={onChangeText}
              />

              <Spacing />
              <Picker
                data={measureUnits}
                containerStyle={{flex: 1 / 2}}
                placeHolder={'Select'}
                name={'units'}
                keyElement="unit_name"
                valueElement="unit_symbol"
                selectedValue={formState.units}
                onValueChange={handlePickerChanges}
              />
            </View>
          </View>

          <Spacing size={10} />
          <View style={{}}>
            <Label required>{t('labels.storageCondition')}</Label>
            <Spacing size={5} />
            <View>
              <ModalDropDown
                list={storageConditions}
                selectedIndex={formState.storageConditions}
                name="storageConditions"
                onValueChange={handlePickerChanges}
                keyElement="storage_condition_title"
                placeholder="Select storage conditions"></ModalDropDown>
            </View>
          </View>
          <Spacing size={10} />
          <View style={{}}>
            <Label required>{t('labels.machine')}</Label>
            <Spacing size={5} />
            <View>
              <ModalDropDown
                list={machine}
                selectedIndex={formState.machine}
                name="machine"
                onValueChange={handlePickerChanges}
                keyElement="packaging_machine_name"
                placeholder="Select Machine"></ModalDropDown>

              {/* <Picker
                data={dropDownList.machine}
                placeHolder="Select Machine"
                name={'machine'}
                selectedValue={formState.machine}
                onValueChange={handlePickerChanges}
              /> */}
            </View>
          </View>

          <Spacing size={10} />

          <View style={{}}>
            <Label required>{t('labels.productForm')}</Label>
            <Spacing size={5} />
            <View>
              <ModalDropDown
                list={productForm}
                selectedIndex={formState.productForm}
                name="productForm"
                onValueChange={handlePickerChanges}
                keyElement="product_form_name"
                placeholder="Select Product form"></ModalDropDown>
            </View>
          </View>
          <Spacing size={10} />

          <View style={{}}>
            <Label required>{t('labels.packagingType')} </Label>
            <Spacing size={5} />
            <View>
              <ModalDropDown
                list={packagingType}
                selectedIndex={formState.packagingType}
                name="packagingType"
                onValueChange={handlePickerChanges}
                keyElement="packing_name"
                placeholder="Select Machine"></ModalDropDown>

              {/* <Picker
                data={[{label: 'Days', value: 'days'}]}
                placeHolder="Enter PIN number"
                name={'packagingType'}
                selectedValue={formState.packagingType}
                onValueChange={handlePickerChanges}
              /> */}
            </View>
          </View>
          <Spacing size={10} />

          <View style={{}}>
            <Label required>{t('labels.treatment')}</Label>
            <Spacing size={5} />
            <View>
              <ModalDropDown
                list={treamentData}
                selectedIndex={formState.treatment}
                name="treatment"
                onValueChange={handlePickerChanges}
                keyElement="packaging_treatment_name"
                placeholder="Select Machine"></ModalDropDown>
            </View>
          </View>
          <Spacing size={10} />

          <View style={{}}>
            <Label required>{t('labels.location')}</Label>
            <Spacing size={5} />
            <View>
              <WhiteTextBox
                value={formState.location}
                name="location"
                onChangeText={onChangeText}
                keyboardType="numeric"
              />

              {/* <Picker
                data={[{label: 'Days', value: 'days'}]}
                placeHolder="Enter PIN number"
                name={'location'}
                selectedValue={formState.location}
                onValueChange={handlePickerChanges}
              /> */}
            </View>
          </View>
          <Spacing size={10} />

          <TouchableWithoutFeedback onPress={onProceed}>
            <View style={[styles.proceedButton]}>
              <Text style={[styles.proceedButtonText]}>
                {t('common.placeRequest')}
              </Text>
            </View>
          </TouchableWithoutFeedback>

          <Spacing size={30} />
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  proceedButton: {
    backgroundColor: Colors.brownColor,
    padding: 15,
    paddingHorizontal: 30,
  },
  proceedButtonText: {
    color: Colors.white,
    textAlign: 'center',
    fontSize: 16,
    fontFamily: typography.poppinsRegular,
  },
});

const mapStateToProps = ({homeData, masterData}) => ({homeData, masterData});

export default connect(mapStateToProps)(PlaceEnquiry);
