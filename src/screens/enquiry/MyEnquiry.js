import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';
import React from 'react';
import crashlytics from '@react-native-firebase/crashlytics';
import BackHeader from '../../components/back-header';
import {Colors} from '../../utility/constants';
import typography from '../../utility/typography';
import Spacing from '../../components/spacing';
import commonStyles from '../../utility/commonStyles';

function EnquireCard({onPress}) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={[styles.cardContainer]}>
        <View style={[styles.titleContainer]}>
          <Text style={[styles.title]}>Dried & dehydrated food Products</Text>
        </View>
        <View style={[styles.subContainer]}>
          <Text style={[styles.foodText]}>Food</Text>
          <Text style={[styles.subText]}>15-03-22 10:12 AM</Text>
        </View>
        <View style={[styles.line]} />

        <View style={[commonStyles.rowAlignCenter, styles.padding15]}>
          <Image
            style={[styles.width30]}
            source={require('../../../assests/images/enquiry_icon.png')}
          />
          <Spacing />
          <Text style={[styles.subTitleText]}>
            15 μ BOPP PLAIN PCT 1 /10μ MET PET / 4.5 GSM COLD SEAL
          </Text>
        </View>

        <View style={[styles.row10]}>
          <Text style={[styles.productText]}>
            Product Wt. <Text>200 Kg</Text>
          </Text>
          {/* <View style={{flex: 1}} /> */}
          <View style={[commonStyles.flexOne]} />
          <View style={{}}>
            <Image
              style={[styles.width20]}
              resizeMode="contain"
              source={require('../../../assests/icons/my_order.png')}
            />

            <View style={[styles.containerCard]}>
              <Text style={[styles.numberText]}>3</Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default function MyEnquiry({navigation}) {
  return (
    <View style={[commonStyles.flexOne]}>
      <BackHeader title={'Help Requests'} />
      <View style={[styles.container]}>
        <EnquireCard
          onPress={() => {
            crashlytics().log('Go to Enquiry Description...');
            navigation.navigate('EnquiryDescription');
          }}
        />
        <Spacing />
        <EnquireCard
          onPress={() => {
            crashlytics().log('Go to Enquiry Description...');
            navigation.navigate('EnquiryDescription');
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  width20: {width: 20, height: 25},
  productText: {
    color: Colors.black,
    fontFamily: typography.poppinsRegular,
    fontSize: 14,
  },
  row10: {padding: 10, flexDirection: 'row'},
  subTitleText: {
    fontFamily: typography.poppinsRegular,
    fontSize: 14,
    flex: 1,
    color: '#4C4C4C',
  },
  subText: {
    color: Colors.black,
    fontFamily: typography.poppinsRegular,
    fontSize: 12,
  },
  width30: {width: 30, height: 30},
  numberText: {
    fontFamily: typography.poppinsRegular,
    fontSize: 10,
    color: Colors.white,
  },
  containerCard: {
    width: 15,
    height: 15,
    backgroundColor: '#B83332',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: -5,
    left: -5,
  },
  padding15: {padding: 15},
  line: {width: '100%', height: 2, backgroundColor: Colors.greyColor},
  foodText: {
    color: Colors.black,
    fontFamily: typography.poppinsRegular,
    fontSize: 12,
  },
  subContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    paddingTop: 5,
  },
  title: {
    color: Colors.black,
    fontFamily: typography.poppinsMedium,
    fontSize: 14,
  },
  titleContainer: {flexDirection: 'row', padding: 10},
  cardContainer: {
    backgroundColor: Colors.white,
    borderRadius: 10,
  },
  container: {flex: 1, padding: 15, paddingBottom: 0},
});
