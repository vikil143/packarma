import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  I18nManager,
  TouchableWithoutFeedback,
  ActivityIndicator,
  Platform,
} from 'react-native';
import {Colors} from '../../utility/constants';
import commonStyles from '../../utility/commonStyles';
import Spacing from '../spacing';

const WhiteTextBox = React.forwardRef(
  (
    {
      action,
      actionStyles,
      leading,
      textInputStyle,
      containerStyle,
      secureTextEntry,
      placeholderCustText,
      prefix,
      name,
      value,
      onChangeText,
      loader = false,
      actionButtonClick,
      ...inputProps
    },
    ref,
  ) => {
    const [secureText, setSecureText] = useState(secureTextEntry || false);

    const toggleSecureText = () => setSecureText(!secureText);

    const renderCustAction = actionText => {
      switch (actionText) {
        case 'password': {
          return (
            <TouchableWithoutFeedback onPress={toggleSecureText}>
              {secureText ? (
                <Image
                  style={[styles.actionStyles, actionStyles]}
                  source={require(`../../../assests/icons/hide_password.png`)}
                  resizeMode="contain"
                />
              ) : (
                <Image
                  style={[styles.actionStyles, actionStyles]}
                  source={require('../../../assests/icons/show_password.png')}
                  resizeMode="contain"
                />
              )}
            </TouchableWithoutFeedback>
          );
        }
        default: {
          return (
            <TouchableWithoutFeedback
              onPress={() => {
                if (typeof actionButtonClick === 'function') {
                  actionButtonClick();
                }
              }}>
              <Image
                source={action}
                style={[styles.actionStyles, actionStyles]}
              />
            </TouchableWithoutFeedback>
          );
        }
      }
    };

    return (
      <View
        style={[
          commonStyles.rowBetween,
          styles.container,
          containerStyle,
          Platform.OS === 'ios' ? {paddingVertical: 12} : null,
        ]}>
        {!!prefix && prefix}
        <TextInput
          ref={ref}
          style={[styles.textInput, textInputStyle]}
          secureTextEntry={secureText}
          value={value}
          onChangeText={text => onChangeText(name, text)}
          placeholderTextColor={'#B6B6B6'}
          {...inputProps}
        />
        {placeholderCustText && value.length == 0 && (
          <View style={styles.placeholderWrapper} pointerEvents="none">
            <Text style={[styles.placeholderText]}>{placeholderCustText}</Text>
          </View>
        )}
        {!!action && (
          <>
            <View style={[commonStyles.row]}>
              {renderCustAction(action)}
              <Spacing size={8} />
            </View>
          </>
        )}
        {loader && (
          <>
            <Spacing size={3} />
            <ActivityIndicator color={Colors.black} />
            <Spacing size={3} />
          </>
        )}
      </View>
    );
  },
);

const styles = StyleSheet.create({
  placeholderWrapper: {
    position: 'absolute',
    left: 10,
  },
  placeholderText: {
    ...commonStyles.montserratMediumHead3,
    color: '#B6B6B6',
  },
  actionStyles: {
    width: 24,
    height: 24,
  },
  textInput: {
    flex: 1,
    paddingLeft: 10,
    textAlign: I18nManager.isRTL ? 'right' : 'left',
    color: Colors.black,
  },
  container: {
    alignItems: 'center',
    backgroundColor: Colors.white,
    borderRadius: 5,
  },
});

export default React.memo(WhiteTextBox);
