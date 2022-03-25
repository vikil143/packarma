import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableWithoutFeedback,
} from 'react-native';
import React from 'react';
import BackHeader from '../../components/back-header';
import typography from '../../utility/typography';
import {Colors} from '../../utility/constants';
import Spacing from '../../components/spacing';
import Picker from '../../components/picker';
import Label from '../../components/label';

export default function PlaceEnquiry({navigation}) {
  return (
    <View style={{flex: 1}}>
      <BackHeader title={'Place Enquiry'} />
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
            />
          </View>
          <Spacing size={10} />
          <View style={{}}>
            <Label required>Self Life</Label>
            <Spacing size={5} />
            <View style={{flexDirection: 'row'}}>
              <View
                style={{backgroundColor: Colors.white, padding: 10, flex: 1}}>
                <Text></Text>
              </View>

              <Spacing />
              <Picker
                data={[{label: 'Days', value: 'days'}]}
                containerStyle={{flex: 1 / 2}}
              />
            </View>
          </View>

          <Spacing size={10} />
          <View style={{}}>
            <Label required>Product Weight</Label>
            <Spacing size={5} />
            <View style={{flexDirection: 'row'}}>
              <View
                style={{backgroundColor: Colors.white, padding: 10, flex: 1}}>
                <Text></Text>
              </View>

              <Spacing />
              <Picker
                data={[{label: 'Days', value: 'days'}]}
                containerStyle={{flex: 1 / 2}}
              />
            </View>
          </View>

          <Spacing size={10} />
          <View style={{}}>
            <Label required>Storage conditions</Label>
            <Spacing size={5} />
            <View style={{flexDirection: 'row'}}>
              <View
                style={{backgroundColor: Colors.white, padding: 10, flex: 1}}>
                <Text></Text>
              </View>

              <Spacing />
              <Picker
                data={[{label: 'Days', value: 'days'}]}
                containerStyle={{flex: 1 / 2}}
              />
            </View>
          </View>
          <Spacing size={10} />
          <View style={{}}>
            <Label required>Machine</Label>
            <Spacing size={5} />
            <View>
              <Picker data={[{label: 'Days', value: 'days'}]} />
            </View>
          </View>

          <Spacing size={10} />

          <View style={{}}>
            <Label required>Product form</Label>
            <Spacing size={5} />
            <View>
              <Picker data={[{label: 'Days', value: 'days'}]} />
            </View>
          </View>
          <Spacing size={10} />

          <View style={{}}>
            <Label required>Treatments</Label>
            <Spacing size={5} />
            <View>
              <Picker data={[{label: 'Days', value: 'days'}]} />
            </View>
          </View>
          <Spacing size={10} />

          <View style={{}}>
            <Label required>Location</Label>
            <Spacing size={5} />
            <View>
              <Picker data={[{label: 'Days', value: 'days'}]} />
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
              <Text style={{color: Colors.white, textAlign: 'center'}}>
                Procced
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
