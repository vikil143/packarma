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
import Card from './Card';

export default function ManageAddress({navigation}) {
  const [activeTab, setActiveTab] = useState(true);
  const t = useLocalization();

  return (
    <View style={[commonStyles.flexOne]}>
      <BackHeader title={t('common.manageAddress')} />
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
        <View style={[commonStyles.flexOne]}>
          <ScrollView contentContainerStyle={{flexGrow: 1}}>
            {activeTab ? (
              <View style={[commonStyles.flexOne, {padding: 10}]}>
                <View style={[commonStyles.alignCenter]}>
                  <TouchableWithoutFeedback
                    onPress={() => navigation.navigate('AddAddress')}>
                    <View
                      style={[commonStyles.row, commonStyles.rowAlignCenter]}>
                      <Image
                        style={{width: 28, height: 28}}
                        resizeMethod="auto"
                        source={require('../../../assests/icons/profile.png')}
                      />
                      <Spacing size={5} />
                      <Text style={{color: Colors.brownColor}}>
                        {t('common.addAddress')}
                      </Text>
                    </View>
                  </TouchableWithoutFeedback>
                </View>
                <Spacing size={5} />
                <Card />
              </View>
            ) : (
              <View style={[commonStyles.flexOne, {padding: 10}]}>
                <View style={[commonStyles.alignCenter]}>
                  <TouchableWithoutFeedback
                    onPress={() => navigation.navigate('AddAddress')}>
                    <View
                      style={[commonStyles.row, commonStyles.rowAlignCenter]}>
                      <Image
                        style={{width: 28, height: 28}}
                        resizeMethod="auto"
                        source={require('../../../assests/icons/profile.png')}
                      />
                      <Spacing size={5} />
                      <Text style={{color: Colors.brownColor}}>
                        {t('common.addAddress')}
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
