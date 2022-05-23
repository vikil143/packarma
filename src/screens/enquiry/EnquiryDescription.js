import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  ScrollView,
  Image,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import useLocalization from '../../hooks/useLocalization';
import BackHeader from '../../components/back-header';
import DownArrow from '../../svg/DownArrow';
import UpArrow from '../../svg/UpArrow';
import {Colors, SUCCESS} from '../../utility/constants';
import typography from '../../utility/typography';
import Spacing from '../../components/spacing';
import Info from '../../svg/Info';
import Tooltip from 'react-native-walkthrough-tooltip';
import commonStyles from '../../utility/commonStyles';
import {connect} from 'react-redux';
import api from '../../utility/api';
import useToast from '../../hooks/useToast';

function EnquiryDescription({navigation, route, homeData, masterData}) {
  const [collapuse, setCollapuse] = useState(true);
  const [showThisToolTip, setShowThisToolTip] = useState(false);

  const [nextTooltip, setNextTooltip] = useState(false);
  const [collapusePS, setCollapusePS] = useState(false);
  const [selectedSolution, setSelectdSolution] = useState(-1);
  const [loader, setLoader] = useState(false);
  const t = useLocalization();
  const {showToast} = useToast();
  const {formState, packagingSolution} = route.params;
  const [packageToolTip, setPackageToolTip] = useState(
    new Array(packagingSolution.length),
  );
  const {productData, categoryData, treamentData} = homeData;
  const {measureUnits, storageConditions, machine, productForm, packagingType} =
    masterData;

  const onSetToolTip = () => {
    setShowThisToolTip(false);
  };

  const onPlaceRequest = async () => {
    try {
      setLoader(true);
      const formData = {
        description: '',
        user_id: '',
        category_id: categoryData[Number(formState.productCategory) - 1].id,
        sub_category_id: '',
        product_id: productData[Number(formState.products) - 1].id,
        shelf_life: formState.shelfLife,
        product_weight: formState.productWeight,
        measurement_unit_id:
          measureUnits[Number(formState.measureUnits) - 1].id,
        product_quantity: '',
        storage_condition_id: '',
        packaging_machine_id: '',
        product_form_id: '',
        packing_type_id: '',
        packaging_treatment_id: '',
        recommendation_engine_id: '',
        user_address_id: '',
      };

      const response = await api({
        url: 'customer_enquiry/my_place_enquiry',
        data: formData,
      });

      if (response.data.success === SUCCESS) {
        setLoader(false);
      } else {
        setLoader(false);
        showToast(response.data.message, 2000, Colors.danger);
      }
    } catch (error) {
      setLoader(false);
      showToast(error.response, 2000, Colors.danger);
    }
  };

  console.log('Enquiry Description ', {
    storageConditions,
    units: formState.storageConditions,
    packagingSolution,
    packageToolTip,
  });
  return (
    <View style={[commonStyles.flexOne]}>
      <BackHeader title={t('common.requestDescription')} />
      <View style={{flex: 1}}>
        <ScrollView>
          {/* Collapuse View */}
          <TouchableWithoutFeedback onPress={() => setCollapuse(!collapuse)}>
            <View style={[styles.cardContainer]}>
              <Text style={[styles.cardText]}>
                {t('common.productDetails')}
              </Text>
              {collapuse ? <UpArrow /> : <DownArrow />}
            </View>
          </TouchableWithoutFeedback>
          {/*  */}
          {collapuse ? (
            <View style={[styles.collapuseContainer]}>
              <View style={[commonStyles.row]}>
                <View style={[styles.categoryView]}>
                  <Text style={[styles.categoryText]}>Category</Text>
                </View>
                <Spacing size={5} />
                <View>
                  <Text style={[styles.blackColor]}>:</Text>
                </View>
                <Spacing size={5} />
                <View style={[commonStyles.flexOne]}>
                  <Text style={[styles.categoryText]}>
                    {
                      categoryData[Number(formState.productCategory) - 1]
                        .category_name
                    }
                  </Text>
                </View>
              </View>
              <Spacing size={10} />
              <View style={[commonStyles.row]}>
                <View style={[styles.categoryView]}>
                  <Text style={[styles.categoryText]}>Product</Text>
                </View>
                <Spacing size={5} />
                <View>
                  <Text style={[styles.blackColor]}>:</Text>
                </View>
                <Spacing size={5} />
                <View style={[commonStyles.flexOne]}>
                  <Text style={[styles.categoryText]}>
                    {productData[Number(formState.products) - 1].product_name}
                    {/* Dried & dehydrated Products */}
                  </Text>
                </View>
              </View>
              <Spacing size={10} />
              <View style={[commonStyles.row]}>
                <View style={[styles.categoryView]}>
                  <Text style={[styles.categoryText]}>Product Wt.</Text>
                </View>
                <Spacing size={5} />
                <View>
                  <Text style={[styles.blackColor]}>:</Text>
                </View>
                <Spacing size={5} />
                <View style={[commonStyles.flexOne]}>
                  <Text style={[styles.categoryText]}>
                    {formState.productWeight} {formState.units}
                  </Text>
                </View>
              </View>
              <Spacing size={10} />
              <View style={[commonStyles.row]}>
                <View style={[styles.categoryView]}>
                  <Text style={[styles.categoryText]}>Shelf Life</Text>
                </View>
                <Spacing size={5} />
                <View>
                  <Text style={[styles.blackColor]}>:</Text>
                </View>
                <Spacing size={5} />
                <View style={[commonStyles.flexOne]}>
                  <Text style={[styles.categoryText]}>
                    {formState.shelfLife} {formState.days}
                  </Text>
                </View>
              </View>

              <Spacing size={10} />
              <View style={[commonStyles.row]}>
                <View style={[styles.categoryView]}>
                  <Text style={[styles.categoryText]}>Storage Conditions</Text>
                </View>
                <Spacing size={5} />
                <View>
                  <Text style={[styles.blackColor]}>:</Text>
                </View>
                <Spacing size={5} />
                <View style={[commonStyles.flexOne]}>
                  <Text style={[styles.categoryText]}>
                    {
                      storageConditions[Number(formState.storageConditions) - 1]
                        .storage_condition_title
                    }
                  </Text>
                </View>
              </View>

              <Spacing size={10} />
              <View style={[commonStyles.row]}>
                <View style={[styles.categoryView]}>
                  <Text style={[styles.categoryText]}>Machine</Text>
                </View>
                <Spacing size={5} />
                <View>
                  <Text style={[styles.blackColor]}>:</Text>
                </View>
                <Spacing size={5} />
                <View style={[commonStyles.flexOne]}>
                  <Text style={[styles.categoryText]}>
                    {
                      machine[Number(formState.machine) - 1]
                        .packaging_machine_name
                    }
                  </Text>
                </View>
              </View>

              <Spacing size={10} />
              <View style={[commonStyles.row]}>
                <View style={[styles.categoryView]}>
                  <Text style={[styles.categoryText]}>Product Form</Text>
                </View>
                <Spacing size={5} />
                <View>
                  <Text style={[styles.blackColor]}>:</Text>
                </View>
                <Spacing size={5} />
                <View style={[commonStyles.flexOne]}>
                  <Text style={[styles.categoryText]}>
                    {
                      productForm[Number(formState.productForm) - 1]
                        .product_form_name
                    }
                  </Text>
                </View>
              </View>

              <Spacing size={10} />
              <View style={[commonStyles.row]}>
                <View style={[styles.categoryView]}>
                  <Text style={[styles.categoryText]}>Packaging Type</Text>
                </View>
                <Spacing size={5} />
                <View>
                  <Text style={[styles.blackColor]}>:</Text>
                </View>
                <Spacing size={5} />
                <View style={[commonStyles.flexOne]}>
                  <Text style={[styles.categoryText]}>
                    {
                      packagingType[Number(formState.packagingType) - 1]
                        .packing_name
                    }
                  </Text>
                </View>
              </View>

              <Spacing size={10} />
              <View style={[commonStyles.row]}>
                <View style={[styles.categoryView]}>
                  <Text style={[styles.categoryText]}>Treatments</Text>
                </View>
                <Spacing size={5} />
                <View>
                  <Text style={[styles.blackColor]}>:</Text>
                </View>
                <Spacing size={5} />
                <View style={[commonStyles.flexOne]}>
                  <Text style={[styles.categoryText]}>
                    {/* Gamma/E-beam Sterilisation */}
                    {
                      treamentData[Number(formState.treatment) - 1]
                        .packaging_treatment_name
                    }
                  </Text>
                </View>
              </View>

              <Spacing size={10} />
              <View style={[commonStyles.row]}>
                <View style={[styles.categoryView]}>
                  <Text style={[styles.categoryText]}>Location</Text>
                </View>
                <Spacing size={5} />
                <View>
                  <Text style={[styles.blackColor]}>:</Text>
                </View>
                <Spacing size={5} />
                <View style={[commonStyles.flexOne]}>
                  <Text style={[styles.categoryText]}>
                    {formState.location}
                  </Text>
                </View>
              </View>
            </View>
          ) : (
            <View></View>
          )}
          <View style={{padding: 20}}>
            {packagingSolution.length > 0 && (
              <>
                <Text style={[styles.packageSolution]}>
                  {/* Packaging Solutions */}
                  {t('titles.packagingSolution')}
                </Text>
                <Spacing size={5} />
              </>
            )}
            {packagingSolution.map((item, ind) => {
              console.log('^^^ packaging Solution item', item);
              return (
                <TouchableWithoutFeedback
                  onPress={() => setSelectdSolution(ind)}>
                  <View
                    style={[
                      styles.solutionContainer,
                      {
                        borderWidth: selectedSolution === ind ? 1 : 0,
                        borderColor: Colors.black,
                      },
                    ]}>
                    <View style={[commonStyles.row]}>
                      <Text style={[styles.solutionTitle]}>
                        {t('titles.conventionalStructure')}
                      </Text>

                      <Tooltip
                        isVisible={toolTipVisible}
                        contentStyle={styles.toolTipContainer}
                        onClose={() => setTooltipVisible(false)}
                        content={
                          <View style={[styles.tipContainer]}>
                            <Text
                              style={{
                                fontFamily: typography.poppinsMedium,
                                fontSize: 14,
                                color: Colors.black,
                              }}>
                              Properties :
                            </Text>
                            <Spacing size={5} />
                            <View
                              style={{
                                alignItems: 'center',
                                flexDirection: 'row',
                              }}>
                              <View style={[styles.dot]} />
                              <Spacing size={5} />
                              <Text style={{flex: 1, color: Colors.black}}>
                                Water vapor transmission rate (WVTR) :{' '}
                                <Text style={{color: Colors.black}}>
                                  g/m2/24 hr
                                </Text>
                              </Text>
                            </View>

                            <Spacing size={5} />
                            <View
                              style={{
                                alignItems: 'center',
                                flexDirection: 'row',
                              }}>
                              <View
                                style={{
                                  width: 8,
                                  height: 8,
                                  backgroundColor: Colors.black,
                                  borderRadius: 8 / 2,
                                }}
                              />
                              <Spacing size={5} />
                              <Text style={{flex: 1, color: Colors.black}}>
                                Oxygen transmission rate (OTR) :{' '}
                                <Text style={{color: Colors.black}}>
                                  cc/m2/24 hr
                                </Text>
                              </Text>
                            </View>
                            <Spacing size={5} />
                            <View
                              style={{
                                alignItems: 'center',
                                flexDirection: 'row',
                              }}>
                              <View
                                style={{
                                  width: 8,
                                  height: 8,
                                  backgroundColor: Colors.black,
                                  borderRadius: 8 / 2,
                                }}
                              />
                              <Spacing size={5} />
                              <Text style={{flex: 1, color: Colors.black}}>
                                Coefficient of friction (COF) :0.00-1.00
                              </Text>
                            </View>
                            <Spacing size={5} />

                            <View
                              style={{
                                alignItems: 'center',
                                flexDirection: 'row',
                              }}>
                              <View
                                style={{
                                  width: 8,
                                  height: 8,
                                  backgroundColor: Colors.black,
                                  borderRadius: 8 / 2,
                                }}
                              />
                              <Spacing size={5} />
                              <Text style={{color: Colors.black}}>
                                Seal Initiation Temperature (SIT):{' '}
                                <Text style={{color: Colors.black}}>
                                  5N/24mm
                                </Text>
                              </Text>
                            </View>
                            <Spacing size={5} />
                          </View>
                        }
                        placement="top">
                        <TouchableWithoutFeedback onPress={onSetToolTip}>
                          <Info />
                        </TouchableWithoutFeedback>
                      </Tooltip>
                    </View>

                    <Spacing size={5} />
                    <View style={[commonStyles.row]}>
                      <View>
                        <View>
                          <Image
                            style={{width: 30, height: 30}}
                            source={require('../../../assests/images/enquiry_icon.png')}
                          />
                        </View>
                      </View>
                      <Spacing size={10} />
                      <Text
                        style={{
                          fontSize: 14,
                          fontFamily: typography.poppinsRegular,
                          color: Colors.black,
                          flex: 1,
                        }}>
                        {item.engine_name}
                        {/* 15 μ BOPP PLAIN PCT 1 /10μ MET PET / 4.5 GSM COLD SEAL */}
                      </Text>
                    </View>

                    <Spacing size={5} />
                    <View>
                      <Text
                        style={{
                          fontSize: 14,
                          fontFamily: typography.poppinsMedium,
                          color: Colors.black,
                        }}>
                        {t('labels.shelfLife')} :{' '}
                        <Text style={{fontFamily: typography.poppinsRegular}}>
                          {item.max_shelf_life} {t('common.days')}
                        </Text>
                      </Text>
                    </View>
                  </View>
                </TouchableWithoutFeedback>
              );
            })}

            <Spacing size={10} />

            <TouchableWithoutFeedback onPress={onPlaceRequest}>
              <View style={[styles.proceedButton]}>
                <Text style={[styles.proceedButtonText]}>
                  {t('common.placeRequest')}
                </Text>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  tipContainer: {
    backgroundColor: Colors.yellowColor,
    padding: 10,
  },
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
  dot: {
    width: 8,
    height: 8,
    backgroundColor: Colors.black,
    borderRadius: 8 / 2,
  },
  toolTipContainer: {
    padding: 0,
    backgroundColor: Colors.yellowColor,
  },
  solutionTitle: {
    fontSize: 14,
    fontFamily: typography.poppinsMedium,
    color: Colors.black,
    flex: 1,
  },
  solutionContainer: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: Colors.white,
    elevation: 5,
  },
  packageSolution: {
    fontFamily: typography.poppinsMedium,
    fontSize: 16,
    color: Colors.black,
  },
  categoryText: {
    fontFamily: typography.poppinsRegular,
    fontSize: 14,
    color: Colors.black,
  },
  categoryView: {flex: 0.65},
  collapuseContainer: {backgroundColor: Colors.white, padding: 15},
  cardText: {
    fontFamily: typography.poppinsMedium,
    fontSize: 16,
    flex: 1,
    paddingHorizontal: 10,
    color: Colors.black,
  },
  blackColor: {color: Colors.black},
  cardContainer: {
    flexDirection: 'row',
    backgroundColor: Colors.white,
    padding: 15,
    alignItems: 'center',
    elevation: 5,
  },
});

const mapStateToProps = ({homeData, masterData}) => ({homeData, masterData});

export default connect(mapStateToProps)(EnquiryDescription);
