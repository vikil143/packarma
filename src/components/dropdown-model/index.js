import React, {useContext, useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
  FlatList,
  TouchableNativeFeedback,
  ActivityIndicator,
  SafeAreaView,
} from 'react-native';
import Modal from 'react-native-modal';
import {Colors} from '../../utility/constants';
import commonStyles from '../../utility/commonStyles';
import BackAppBar from '../back-header';
import EmptyComp from '../empty_comp';
import HorizontalLine from '../horizontal';
import RadioButton from '../radio-button';
import Spacing from '../spacing';
import useLocalization from '../../hooks/useLocalization';
import typography from '../../utility/typography';

export default function ModalDropDown({
  prefix,
  actionButton,
  list,
  title,
  keyElement,
  containerStyle,
  textInputStyle,
  selectedIndex,
  onValueChange,
  loader = false,
  placeholder,
  isShowNoneOfTheAbove = true,
  name, // newly added for dynamic state link
  // below are search loaders
  disabled = false,
  reloadData,
}) {
  //   const {t} = useContext(LocalizationContext);
  const t = useLocalization();
  const [modal, setModal] = useState(false);
  const [reloadLoader, setReloadLoader] = useState(false);

  const showModal = () => {
    if (!disabled) setModal(true);
  };
  const hideModal = () => {
    setModal(false);
  };

  const onSelect = index => {
    hideModal();
    // Added plus one so that it never asume falsy value 0
    onValueChange(index + 1, name);
  };

  const onSelectNoneoftheBelow = () => {
    hideModal();
    // Added plus one so that it never asume falsy value 0
    onValueChange('', name);
  };

  const handleReload = async () => {
    setReloadLoader(true);
    await reloadData();
    setReloadLoader(false);
  };

  return (
    <>
      <TouchableWithoutFeedback onPress={showModal}>
        <View
          style={[
            commonStyles.rowBetween,
            styles.container,
            containerStyle,
            {
              borderWidth: 0,
            },
          ]}>
          <View
            style={[commonStyles.rowBetween, styles.container, containerStyle]}>
            {!!prefix && prefix}
            <View style={[styles.textInput, textInputStyle]}>
              <Text style={[styles.activeItem]}>
                {/* Added minus so that it will go to its first position*/}
                {!!selectedIndex
                  ? list[selectedIndex - 1][keyElement]
                  : placeholder
                  ? placeholder
                  : ''}
              </Text>
            </View>

            <View style={[commonStyles.row]}>
              {!loader ? (
                <Image
                  style={[styles.actionStyles]}
                  source={require('../../../assests/icons/drop_down_two.png')}
                  resizeMode="contain"
                />
              ) : (
                <ActivityIndicator color={colors.darkBlue} />
              )}
              <Spacing size={5} />
            </View>
          </View>

          {actionButton && actionButton}
        </View>
      </TouchableWithoutFeedback>
      <Modal
        style={{margin: 0}}
        isVisible={modal}
        animationInTiming={400}
        animationOutTiming={400}
        onBackButtonPress={hideModal}>
        <SafeAreaView style={{flex: 1}}>
          <View style={styles.dropDownContainer}>
            <BackAppBar child={title} onBackButtonPress={hideModal} />
            <HorizontalLine noDots />

            <FlatList
              data={list}
              contentContainerStyle={{flexGrow: 1}}
              keyExtractor={(_, ind) => ind.toString()}
              ListHeaderComponent={() => {
                return isShowNoneOfTheAbove ? (
                  <>
                    <TouchableNativeFeedback
                      onPress={() => onSelectNoneoftheBelow('')}>
                      <View
                        pointerEvents="box-only"
                        style={[commonStyles.row, styles.dropDownItem]}>
                        <RadioButton selected={!selectedIndex} />
                        <Spacing size={5} />
                        <Text style={{color: Colors.black}}>
                          {t('common.noBelowOne')}
                        </Text>
                      </View>
                    </TouchableNativeFeedback>
                    <View
                      style={{
                        width: '100%',
                        height: 1,
                        backgroundColor: '#ddd',
                      }}
                    />
                  </>
                ) : (
                  <View />
                );
              }}
              renderItem={({item, index}) => {
                console.log('Flatlist item,', item, keyElement);
                return (
                  <TouchableNativeFeedback onPress={() => onSelect(index)}>
                    <View
                      style={[commonStyles.row, styles.dropDownItem]}
                      pointerEvents="box-only">
                      <RadioButton selected={index + 1 === selectedIndex} />
                      <Spacing size={5} />
                      <Text style={{color: Colors.black}}>
                        {item[keyElement]}
                      </Text>
                    </View>
                  </TouchableNativeFeedback>
                );
              }}
              ItemSeparatorComponent={() => {
                return (
                  <View
                    style={{width: '100%', height: 1, backgroundColor: '#ddd'}}
                  />
                );
              }}
              ListEmptyComponent={() => {
                return !isShowNoneOfTheAbove ? <EmptyComp /> : <View />;
              }}
            />
          </View>
        </SafeAreaView>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  activeItem: {
    color: Colors.black,
    fontSize: 14,
    fontFamily: typography.poppinsRegular,
  },
  dropDownItem: {
    padding: 20,
  },
  dropDownContainer: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  actionStyles: {
    width: 10,
    height: 10,
  },
  textInput: {
    flex: 1,
    paddingLeft: 10,
    padding: 15,
    alignItems: 'flex-start',
  },
  container: {
    // borderWidth: 1,
    // borderColor: Colors.brownColor,
    // borderRadius: 8,
    backgroundColor: Colors.white,
    alignItems: 'center',
  },
});
