import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Image,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import BackHeader from '../../components/back-header';
import useLocalization from '../../hooks/useLocalization';
import commonStyles from '../../utility/commonStyles';
import {Colors} from '../../utility/constants';
import Spacing from '../../components/spacing';
import Label from '../../components/label';
import WhiteTextBox from '../../components/white_text_box';

export default function AddAddress({}) {
  const [activeTab, setActiveTab] = useState(true);
  const t = useLocalization();

  return (
    <View style={[commonStyles.flexOne]}>
      <BackHeader title={t('common.addAddress')} />
      <View style={[commonStyles.flexOne]}>
        <View style={[commonStyles.row]}>
          <TouchableWithoutFeedback onPress={() => setActiveTab(true)}>
            <View style={[styles.tabItems]}>
              <View style={{padding: 10}}>
                <Text style={[styles.tabHeading]}>
                  {t('common.shippingAddress')}
                </Text>
              </View>
              {activeTab && (
                <View
                  style={{
                    width: '100%',
                    height: 1,
                    backgroundColor: Colors.brownColor,
                  }}
                />
              )}
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={() => setActiveTab(false)}>
            <View style={[styles.tabItems]}>
              <View style={{padding: 10}}>
                <Text style={[styles.tabHeading]}>
                  {t('common.billingAddress')}
                </Text>
              </View>
              {!activeTab && (
                <View
                  style={{
                    width: '100%',
                    height: 1,
                    backgroundColor: Colors.brownColor,
                  }}
                />
              )}
            </View>
          </TouchableWithoutFeedback>
        </View>
        <Spacing size={5} />
        <View style={[commonStyles.flexOne, {}]}>
          <ScrollView contentContainerStyle={{flexGrow: 1}}>
            {activeTab ? (
              <View style={[commonStyles.flexOne, {padding: 10}]}>
                <View>
                  <Label required>{t('common.contactName')}</Label>
                  <Spacing size={5} />
                  <WhiteTextBox />
                  <Spacing />
                </View>
                <View>
                  <Label required>{t('common.mobileNumber')}</Label>
                  <Spacing size={5} />
                  <WhiteTextBox />
                  <Spacing />
                </View>
                <View>
                  <Label required>{t('common.buildingCompany')}</Label>
                  <Spacing size={5} />
                  <WhiteTextBox />
                  <Spacing />
                </View>
                <View>
                  <Label required>{t('common.area')}</Label>
                  <Spacing size={5} />
                  <WhiteTextBox />
                  <Spacing />
                </View>
                <View>
                  <Label required>{t('common.landmark')}</Label>
                  <Spacing size={5} />
                  <WhiteTextBox />
                  <Spacing />
                </View>
                <View>
                  <Label required>{t('common.pincode')}</Label>
                  <Spacing size={5} />
                  <WhiteTextBox />
                  <Spacing />
                </View>
                <View>
                  <TouchableWithoutFeedback>
                    <View
                      style={[
                        {backgroundColor: Colors.brownColor, padding: 15},
                      ]}>
                      <Text style={{textAlign: 'center'}}>
                        {t('common.add')}
                      </Text>
                    </View>
                  </TouchableWithoutFeedback>
                </View>
              </View>
            ) : (
              <View style={[commonStyles.flexOne, {padding: 10}]}>
                <View>
                  <Label required>{t('labels.companyName')}</Label>
                  <Spacing size={5} />
                  <WhiteTextBox />
                  <Spacing />
                </View>
                <View>
                  <Label required>{t('common.mobileNumber')}</Label>
                  <Spacing size={5} />
                  <WhiteTextBox />
                  <Spacing />
                </View>
                <View>
                  <Label required>{t('labels.buildCompany')}</Label>
                  <Spacing size={5} />
                  <WhiteTextBox />
                  <Spacing />
                </View>
                <View>
                  <Label required>{t('labels.areaStreet')}</Label>
                  <Spacing size={5} />
                  <WhiteTextBox />
                  <Spacing />
                </View>
                <View>
                  <Label required>{t('common.landmark')}</Label>
                  <Spacing size={5} />
                  <WhiteTextBox />
                  <Spacing />
                </View>
                <View>
                  <Label required>{t('common.pincode')}</Label>
                  <Spacing size={5} />
                  <WhiteTextBox />
                  <Spacing />
                </View>
                <View>
                  <Label required>{t('labels.gstin')}</Label>
                  <Spacing size={5} />
                  <WhiteTextBox />
                  <Spacing />
                </View>
                <View>
                  <TouchableWithoutFeedback>
                    <View
                      style={[
                        {backgroundColor: Colors.brownColor, padding: 15},
                      ]}>
                      <Text style={{textAlign: 'center'}}>
                        {t('common.add')}
                      </Text>
                    </View>
                  </TouchableWithoutFeedback>
                </View>
              </View>
            )}
          </ScrollView>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  tabHeading: {
    color: Colors.black,
    textAlign: 'center',
  },
  tabItems: {
    flex: 1,
  },
});
