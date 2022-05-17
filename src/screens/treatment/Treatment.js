import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';
import React from 'react';
import crashlytics from '@react-native-firebase/crashlytics';
import commonStyles from '../../utility/commonStyles';
import {Colors} from '../../utility/constants';
import BackHeader from '../../components/back-header';
import Spacing from '../../components/spacing';
import typography from '../../utility/typography';

export default function Treatment({navigation}) {
  return (
    <View style={[styles.container]}>
      <BackHeader title={'Treatments'} />
      <TouchableWithoutFeedback
        onPress={() => {
          crashlytics().log('Go To Treament Details...');
          navigation.navigate('TreatmentDetails');
        }}>
        <View style={[styles.rowPad10]}>
          <View style={{}}>
            <Image
              style={[styles.glass]}
              resizeMode="contain"
              source={require('../../../assests/images/glasses.png')}
            />
          </View>
          <Spacing size={8} />
          <View style={[commonStyles.flexOne]}>
            <Spacing size={8} />
            <Text style={[styles.poppinsMedium]}>Aseptic Filling</Text>
            <Spacing size={5} />
            <View>
              <Text style={[styles.blackColor]}>
                We provide packaging solutions for all type of dried foods and
                dehydrated products like beans…
              </Text>
            </View>
            <Spacing size={5} />
          </View>
        </View>
      </TouchableWithoutFeedback>
      {/* <Spacing size={5} /> */}
      <View style={[styles.line]} />
      {/* <Spacing size={5} /> */}

      <View style={[styles.rowPad10]}>
        <View style={{}}>
          <Image
            style={[styles.size150]}
            resizeMode="contain"
            source={require('../../../assests/images/glasses.png')}
          />
        </View>
        <Spacing size={8} />
        <View style={[commonStyles.flexOne]}>
          <Spacing size={8} />
          <Text style={[styles.poppinsMedium]}>Aseptic Filling</Text>
          <Spacing size={5} />
          <View>
            <Text style={[styles.blackColor]}>
              We provide packaging solutions for all type of dried foods and
              dehydrated products like beans…
            </Text>
          </View>
          <Spacing size={5} />
        </View>
      </View>

      {/* <Spacing size={5} /> */}
      <View style={[styles.line]} />
      {/* <Spacing size={5} /> */}

      <View style={[styles.rowPad10]}>
        <View style={{}}>
          <Image
            style={[styles.size150]}
            resizeMode="contain"
            source={require('../../../assests/images/glasses.png')}
          />
        </View>
        <Spacing size={8} />
        <View style={[commonStyles.flexOne]}>
          <Spacing size={8} />
          <Text style={[styles.poppinsMedium]}>Aseptic Filling</Text>
          <Spacing size={5} />
          <View>
            <Text style={[styles.blackColor]}>
              We provide packaging solutions for all type of dried foods and
              dehydrated products like beans…
            </Text>
          </View>
          <Spacing size={5} />
        </View>
      </View>

      {/* <Spacing size={5} /> */}
      <View style={[styles.line]} />
      {/* <Spacing size={5} /> */}

      <View style={[styles.rowPad10]}>
        <View style={{}}>
          <Image
            style={[styles.size150]}
            resizeMode="contain"
            source={require('../../../assests/images/glasses.png')}
          />
        </View>
        <Spacing size={8} />
        <View style={[commonStyles.flexOne]}>
          <Spacing size={8} />
          <Text style={[styles.poppinsMedium]}>Aseptic Filling</Text>
          <Spacing size={5} />
          <View>
            <Text style={[styles.blackColor]}>
              We provide packaging solutions for all type of dried foods and
              dehydrated products like beans…
            </Text>
          </View>
          <Spacing size={5} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  poppinsMedium: {
    fontFamily: typography.poppinsMedium,
    fontSize: 14,
    color: Colors.black,
  },
  size150: {width: 150, height: 150},
  blackColor: {color: Colors.black},
  line: {height: 1, backgroundColor: Colors.greyColor, width: '100%'},
  glass: {width: 150, height: 150},
  rowPad10: {flexDirection: 'row', padding: 10},
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
});
