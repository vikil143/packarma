import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {getNumberOfLines} from '../../utility/helpers';

class HorizontalLine extends React.Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    const {
      width,
      lineWidth,
      lineColor = '#ddd',
      containerStyle,
      noDots,
    } = this.props;
    return (
      <View style={[styles.container, containerStyle]}>
        {noDots ? (
          <View
            style={{width: '100%', height: 1, backgroundColor: lineColor}}
          />
        ) : (
          new Array(getNumberOfLines(width, lineWidth + 4))
            .fill(0)
            .map((_, ind) => (
              <View
                style={{
                  backgroundColor: lineColor,
                  width: lineWidth,
                  height: 1,
                  margin: 2,
                }}
                key={`horizontal-${ind}`}
              />
            ))
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
});

export default HorizontalLine;
