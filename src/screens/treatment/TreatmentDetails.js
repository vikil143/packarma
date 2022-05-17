import {StyleSheet, Text, View, Image, FlatList} from 'react-native';
import React from 'react';
import {Colors, SCREEN_WIDTH} from '../../utility/constants';
import typography from '../../utility/typography';
import BackHeader from '../../components/back-header';
import Spacing from '../../components/spacing';

export default function TreatmentDetails() {
  return (
    <View style={[styles.container]}>
      <BackHeader title={'Treatments'} />
      <View style={{}}>
        <View style={[styles.pad10]}>
          <Image
            style={[styles.glassImage]}
            source={require('../../../assests/images/glasses.png')}
          />
        </View>

        <View>
          <Text style={[styles.poppinsMedium]}>Aseptic Filling</Text>
          <Spacing size={5} />
          <View style={[styles.line]} />
          <Spacing size={5} />

          <Text style={[styles.description]}>
            We provide packaging solutions for all type of dried foods and
            dehydrated products like beans , Grains, dried vegetables, dried
            fruits , processed foods, dried fish and seafood etc.{' '}
          </Text>
          <Spacing size={5} />
          <Text style={[styles.title]}>Applicable Products</Text>
        </View>

        <Spacing size={5} />
        <View style={[styles.line]} />
        <Spacing size={5} />
        {/* <Spacing /> */}
        <View style={[styles.rowWrap]}>
          {[1, 2, 3, 4, 5, 6, 7, 8].map((_, ind) => {
            return (
              <View key={ind} style={[styles.friutsImage]}>
                <Image
                  style={[styles.flexDirection]}
                  source={require('../../../assests/images/friuts.png')}
                />
                <Spacing size={1} />
                <Text
                  style={{
                    textAlign: 'center',
                    fontFamily: typography.poppinsRegular,
                    fontSize: 12,
                    color: Colors.black,
                  }}>
                  Dairy
                </Text>
              </View>
            );
          })}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontFamily: typography.poppinsMedium,
    fontSize: 14,
    color: Colors.black,
    paddingHorizontal: 15,
  },
  rowWrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  friutsImage: {
    width: (SCREEN_WIDTH - 80) / 4,
    height: (SCREEN_WIDTH - 80) / 4,
    margin: 8,
  },
  description: {
    paddingHorizontal: 15,
    fontFamily: typography.poppinsRegular,
    fontSize: 14,
    color: Colors.black,
  },
  poppinsMedium: {
    fontFamily: typography.poppinsMedium,
    fontSize: 16,
    color: Colors.black,
    paddingHorizontal: 15,
  },
  line: {
    height: 1,
    backgroundColor: Colors.greyColor,
    width: '100%',
  },
  pad10: {padding: 8, borderRadius: 20},
  glassImage: {
    width: SCREEN_WIDTH - 16,
    height: 250,
    borderRadius: 10,
  },
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
});
