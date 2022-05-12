import {StyleSheet, Text, View, Animated, Easing} from 'react-native';
import React, {useState, useRef} from 'react';
import {Colors} from '../utility/constants';

export const ToastContext = React.createContext();

class Toast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
      color: '',
      animatedValue: new Animated.Value(0),
    };
  }

  //   const [textMessage, setTextMessage] = useState('');
  //   const animatedValue = useRef(new Animated.Value(0)).current;

  //   const openToast = (message, duration = 3000) =>{

  //     Animated.timing(animatedValue, {
  //       toValue: 1,
  //       easing: Easing.linear,
  //       useNativeDriver: true,
  //     }).start(() => setTimeout(closeToast, duration))};

  //   const closeToast = () =>
  //     Animated.timing(animatedValue, {
  //       toValue: 1,
  //       easing: Easing.linear,
  //       useNativeDriver: true,
  //     }).start();

  showToast = (message, duration = 2000, color = Colors.success) => {
    this.setState({message: message, color: color}, () =>
      Animated.timing(this.state.animatedValue, {
        toValue: 1,
        easing: Easing.linear,
        useNativeDriver: true,
      }).start(() => setTimeout(this.closeToast, duration)),
    );
  };

  closeToast = () =>
    Animated.timing(this.state.animatedValue, {
      toValue: 0,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();

  render() {
    const style = {
      transform: [
        {
          translateY: this.state.animatedValue.interpolate({
            inputRange: [0, 1],
            outputRange: [150, 0],
          }),
        },
      ],
    };

    return (
      <ToastContext.Provider value={{showToast: this.showToast}}>
        {this.props.children}
        <Animated.View
          style={[
            styles.container,
            {backgroundColor: this.state.color},
            style,
          ]}>
          <Text style={[styles.textStyles]}>{this.state.message}</Text>
        </Animated.View>
      </ToastContext.Provider>
    );
  }
}

const styles = StyleSheet.create({
  textStyles: {
    fontSize: 14,
    textAlign: 'left',
  },
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 10,
  },
});

export default Toast;
