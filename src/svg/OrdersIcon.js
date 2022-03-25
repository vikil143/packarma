import * as React from 'react';
import Svg, {G, Path} from 'react-native-svg';

function OrdersIcon(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={16.067}
      height={19.733}
      viewBox="0 0 16.067 19.733"
      {...props}>
      <G
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.4}>
        <Path
          d="M9.167 0H1.833A1.833 1.833 0 000 1.833V16.5a1.833 1.833 0 001.833 1.833h11a1.833 1.833 0 001.834-1.833v-11z"
          stroke="#000"
          transform="translate(.7 .7)"
        />
        <Path
          data-name="Vector"
          d="M11 13.75H3.667"
          stroke="#000"
          transform="translate(.7 .7)"
        />
        <Path
          data-name="Vector"
          d="M11 10.083H3.667"
          stroke="#b83332"
          transform="translate(.7 .7)"
        />
        <Path
          data-name="Vector"
          d="M5.5 6.417H3.667M9.167 0v5.5h5.5"
          stroke="#000"
          transform="translate(.7 .7)"
        />
      </G>
    </Svg>
  );
}

export default OrdersIcon;
