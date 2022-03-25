import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';
import React from 'react';
import commonStyles from '../../utility/commonStyles';
import {Colors} from '../../utility/constants';
import BackHeader from '../../components/back-header';
import Spacing from '../../components/spacing';
import typography from '../../utility/typography';

export default function Treatment({navigation}) {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: Colors.white,
      }}>
      <BackHeader title={'Treatments'} />
      <TouchableWithoutFeedback
        onPress={() => navigation.navigate('TreatmentDetails')}>
        <View style={{flexDirection: 'row', padding: 10}}>
          <View style={{}}>
            <Image
              style={{width: 150, height: 150}}
              resizeMode="contain"
              source={require('../../../assests/images/glasses.png')}
            />
          </View>
          <Spacing size={8} />
          <View style={{flex: 1}}>
            <Spacing size={8} />
            <Text
              style={{
                fontFamily: typography.poppinsMedium,
                fontSize: 14,
                color: Colors.black,
              }}>
              Aseptic Filling
            </Text>
            <Spacing size={5} />
            <View>
              <Text style={{color: Colors.black}}>
                We provide packaging solutions for all type of dried foods and
                dehydrated products like beans…
              </Text>
            </View>
            <Spacing size={5} />
          </View>
        </View>
      </TouchableWithoutFeedback>

      <View style={{flexDirection: 'row', padding: 10}}>
        <View style={{}}>
          <Image
            style={{width: 150, height: 150}}
            resizeMode="contain"
            source={require('../../../assests/images/glasses.png')}
          />
        </View>
        <Spacing size={8} />
        <View style={{flex: 1}}>
          <Spacing size={8} />
          <Text
            style={{
              fontFamily: typography.poppinsMedium,
              fontSize: 14,
              color: Colors.black,
            }}>
            Aseptic Filling
          </Text>
          <Spacing size={5} />
          <View>
            <Text style={{color: Colors.black}}>
              We provide packaging solutions for all type of dried foods and
              dehydrated products like beans…
            </Text>
          </View>
          <Spacing size={5} />
        </View>
      </View>
      <View style={{flexDirection: 'row', padding: 10}}>
        <View style={{}}>
          <Image
            style={{width: 150, height: 150}}
            resizeMode="contain"
            source={require('../../../assests/images/glasses.png')}
          />
        </View>
        <Spacing size={8} />
        <View style={{flex: 1}}>
          <Spacing size={8} />
          <Text
            style={{
              fontFamily: typography.poppinsMedium,
              fontSize: 14,
              color: Colors.black,
            }}>
            Aseptic Filling
          </Text>
          <Spacing size={5} />
          <View>
            <Text style={{color: Colors.black}}>
              We provide packaging solutions for all type of dried foods and
              dehydrated products like beans…
            </Text>
          </View>
          <Spacing size={5} />
        </View>
      </View>

      <View style={{flexDirection: 'row', padding: 10}}>
        <View style={{}}>
          <Image
            style={{width: 150, height: 150}}
            resizeMode="contain"
            source={require('../../../assests/images/glasses.png')}
          />
        </View>
        <Spacing size={8} />
        <View style={{flex: 1}}>
          <Spacing size={8} />
          <Text
            style={{
              fontFamily: typography.poppinsMedium,
              fontSize: 14,
              color: Colors.black,
            }}>
            Aseptic Filling
          </Text>
          <Spacing size={5} />
          <View>
            <Text style={{color: Colors.black}}>
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

const styles = StyleSheet.create({});
