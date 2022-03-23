import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableWithoutFeedback,
} from 'react-native';
import React, {useState} from 'react';
import Modal from 'react-native-modal';
import Spacing from '../../components/spacing';
import BottomSheet from '../../components/bottomsheet/BottomSheet';
import typography from '../../utility/typography';
import {Colors, SCREEN_WIDTH} from '../../utility/constants';
import BackHeader from '../../components/back-header';
import Search from '../../components/search';

export default function Category({}) {
  const [open, setOpen] = useState(false);
  const [treatmentSheet, setTreatMentSheet] = useState(false);
  const [treatmentDetails, setTreatmentDetails] = useState(false);

  return (
    <View style={{}}>
      <Modal
        isVisible={treatmentDetails}
        style={{margin: 0}}
        onBackButtonPress={() => setTreatmentDetails(false)}>
        <View
          style={{
            flex: 1,
            backgroundColor: Colors.white,
          }}>
          <BackHeader title={'Treatments'} />
          <View style={{}}>
            <View style={{padding: 8, borderRadius: 20}}>
              <Image
                style={{
                  width: SCREEN_WIDTH - 16,
                  height: 250,
                  borderRadius: 10,
                }}
                source={require('../../../assests/images/glasses.png')}
              />
            </View>

            <View>
              <Text
                style={{
                  fontFamily: typography.poppinsMedium,
                  fontSize: 16,
                  color: Colors.black,
                  paddingHorizontal: 15,
                }}>
                Aseptic Filling
              </Text>

              <Text
                style={{
                  paddingHorizontal: 15,
                  fontFamily: typography.poppinsRegular,
                  fontSize: 14,
                  color: Colors.black,
                }}>
                We provide packaging solutions for all type of dried foods and
                dehydrated products like beans , Grains, dried vegetables, dried
                fruits , processed foods, dried fish and seafood etc.{' '}
              </Text>
              <Spacing size={5} />
              <Text
                style={{
                  fontFamily: typography.poppinsRegular,
                  fontSize: 14,
                  color: Colors.black,
                  paddingHorizontal: 15,
                }}>
                Applicable Products
              </Text>
            </View>
          </View>
        </View>
      </Modal>

      <Modal
        isVisible={treatmentSheet}
        style={{margin: 0}}
        onBackButtonPress={() => setTreatMentSheet(false)}>
        <View
          style={{
            flex: 1,
            backgroundColor: Colors.white,
          }}>
          <BackHeader title={'Treatments'} />
          <TouchableWithoutFeedback onPress={() => setTreatmentDetails(true)}>
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
                    We provide packaging solutions for all type of dried foods
                    and dehydrated products like beans…
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
      </Modal>
      <BottomSheet show={open} hide={() => setOpen(false)}>
        <View style={{padding: 20}}>
          <View style={{alignItems: 'center'}}>
            <Image
              style={{}}
              source={require('../../../assests/images/products.png')}
            />
          </View>
          <Spacing size={10} />
          <Text
            style={{
              fontSize: 16,
              fontFamily: typography.poppinsMedium,
              color: Colors.black,
              textAlign: 'center',
            }}>
            Dried & dehydrated food Products
          </Text>
          <Spacing size={2} />
          <Text style={{textAlign: 'center', color: Colors.black}}>Food</Text>
          <Spacing size={5} />
          <Text
            style={{
              fontFamily: typography.poppinsRegular,
              color: Colors.black,
            }}>
            We provide packaging solutions for all type of dried foods and
            dehydrated products like beans , Grains, dried vegetables, dried
            fruits , processed foods, dried fish and seafood etc
          </Text>
          <Spacing size={5} />
          <Text
            style={{
              fontSize: 14,
              color: Colors.black,
              fontFamily: typography.poppinsRegular,
            }}>
            Packaging Treatments
          </Text>

          <Text
            style={{
              fontFamily: typography.poppinsRegular,
              fontSize: 14,
              color: Colors.black,
            }}>
            Aseptic Filling, Gamma / E-beam Sterilisation, Deep freezing{' '}
          </Text>
          <Spacing size={5} />
          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <TouchableWithoutFeedback onPress={() => setTreatMentSheet(true)}>
              <View
                style={{
                  padding: 15,
                  backgroundColor: Colors.brownColor,
                  borderRadius: 10,
                }}>
                <Text style={{color: Colors.white}}>Place enquiry</Text>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </View>
      </BottomSheet>

      <View style={{padding: 10}}>
        <Search />
      </View>
      <View style={{flexDirection: 'row'}}>
        <View>
          <TouchableWithoutFeedback>
            <View style={{padding: 20, paddingHorizontal: 30}}>
              <Image
                style={{width: 40, height: 40}}
                source={require('../../../assests/images/grid_bar.png')}
                resizeMode="contain"
              />
              <Spacing size={10} />
              <Text
                style={{
                  fontSize: 12,
                  fontFamily: typography.poppinsRegular,
                  color: Colors.black,
                }}>
                Food
              </Text>
            </View>
          </TouchableWithoutFeedback>

          <View style={{backgroundColor: Colors.white, elevation: 5}}>
            <View
              style={{
                padding: 20,
                paddingHorizontal: 30,
              }}>
              <Image
                style={{width: 40, height: 40}}
                source={require('../../../assests/images/grid_bar.png')}
                resizeMode="contain"
              />
              <Spacing size={10} />
              <Text
                style={{
                  fontSize: 12,
                  fontFamily: typography.poppinsRegular,
                  color: Colors.black,
                }}>
                Food
              </Text>
            </View>

            <View
              style={{
                padding: 20,
                paddingHorizontal: 30,
              }}>
              <Image
                style={{width: 40, height: 40}}
                source={require('../../../assests/images/grid_bar.png')}
                resizeMode="contain"
              />
              <Spacing size={10} />
              <Text
                style={{
                  fontSize: 12,
                  fontFamily: typography.poppinsRegular,
                  color: Colors.black,
                }}>
                Food
              </Text>
            </View>

            <View
              style={{
                padding: 20,
                paddingHorizontal: 30,
              }}>
              <Image
                style={{width: 40, height: 40}}
                source={require('../../../assests/images/grid_bar.png')}
                resizeMode="contain"
              />
              <Spacing size={10} />
              <Text
                style={{
                  fontSize: 12,
                  fontFamily: typography.poppinsRegular,
                  color: Colors.black,
                }}>
                Food
              </Text>
            </View>

            <View
              style={{
                padding: 20,
                paddingHorizontal: 30,
              }}>
              <Image
                style={{width: 40, height: 40}}
                source={require('../../../assests/images/grid_bar.png')}
                resizeMode="contain"
              />
              <Spacing size={10} />
              <Text
                style={{
                  fontSize: 12,
                  fontFamily: typography.poppinsRegular,
                  color: Colors.black,
                }}>
                Food
              </Text>
            </View>

            <View
              style={{
                padding: 20,
                paddingHorizontal: 30,
              }}>
              <Image
                style={{width: 40, height: 40}}
                source={require('../../../assests/images/grid_bar.png')}
                resizeMode="contain"
              />
              <Spacing size={10} />
              <Text
                style={{
                  fontSize: 12,
                  fontFamily: typography.poppinsRegular,
                  color: Colors.black,
                }}>
                Food
              </Text>
            </View>

            <View
              style={{
                padding: 20,
                paddingHorizontal: 30,
              }}>
              <Image
                style={{width: 40, height: 40}}
                source={require('../../../assests/images/grid_bar.png')}
                resizeMode="contain"
              />
              <Spacing size={10} />
              <Text
                style={{
                  fontSize: 12,
                  fontFamily: typography.poppinsRegular,
                  color: Colors.black,
                }}>
                Food
              </Text>
            </View>
          </View>
        </View>

        <Spacing size={10} />
        <ScrollView contentContainerStyle={{flexGrow: 1}}>
          <View style={{flex: 1}}>
            <Text
              style={{
                fontSize: 18,
                fontFamily: typography.poppinsMedium,
                color: Colors.black,
              }}>
              Product{' '}
            </Text>
            <Text>Total : 21</Text>
            {/* <Spacing size={5} /> */}
            <TouchableWithoutFeedback onPress={() => setOpen(true)}>
              <View style={{flexDirection: 'row'}}>
                <Image
                  style={{}}
                  source={require('../../../assests/images/friuts.png')}
                />

                <Spacing size={10} />
                <Image
                  style={{}}
                  source={require('../../../assests/images/dairy.png')}
                />
              </View>
            </TouchableWithoutFeedback>
            <Spacing size={5} />
            <View style={{flexDirection: 'row'}}>
              <Image
                style={{}}
                source={require('../../../assests/images/friuts.png')}
              />

              <Spacing size={10} />
              <Image
                style={{}}
                source={require('../../../assests/images/dairy.png')}
              />
            </View>

            <Spacing size={5} />
            <View style={{flexDirection: 'row'}}>
              <Image
                style={{}}
                source={require('../../../assests/images/friuts.png')}
              />

              <Spacing size={10} />
              <Image
                style={{}}
                source={require('../../../assests/images/dairy.png')}
              />
            </View>

            <Spacing size={5} />
            <View style={{flexDirection: 'row'}}>
              <Image
                style={{}}
                source={require('../../../assests/images/friuts.png')}
              />

              <Spacing size={10} />
              <Image
                style={{}}
                source={require('../../../assests/images/dairy.png')}
              />
            </View>

            <Spacing size={5} />
            <View style={{flexDirection: 'row'}}>
              <Image
                style={{}}
                source={require('../../../assests/images/friuts.png')}
              />

              <Spacing size={10} />
              <Image
                style={{}}
                source={require('../../../assests/images/dairy.png')}
              />
            </View>

            <Spacing size={5} />
            <View style={{flexDirection: 'row'}}>
              <Image
                style={{}}
                source={require('../../../assests/images/friuts.png')}
              />

              <Spacing size={10} />
              <Image
                style={{}}
                source={require('../../../assests/images/dairy.png')}
              />
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
