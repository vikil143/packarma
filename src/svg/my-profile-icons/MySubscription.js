import * as React from 'react';
import Svg, {G, Rect, Path} from 'react-native-svg';

function MySubscription(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={26}
      height={20}
      viewBox="0 0 26 20"
      {...props}>
      <G data-name="Group 313" transform="translate(-32 -297)">
        <G
          data-name="Rectangle 71"
          transform="translate(32 297)"
          fill="#fff"
          stroke="#000"
          strokeWidth={1}>
          <Rect width={26} height={20} rx={4} stroke="none" />
          <Rect x={0.5} y={0.5} width={25} height={19} rx={3.5} fill="none" />
        </G>
        <Path
          data-name="Rectangle 72"
          transform="translate(38 303)"
          d="M0 0H3V3H0z"
        />
        <G
          data-name="Rectangle 73"
          transform="translate(44 303)"
          stroke="#fff"
          strokeWidth={1}>
          <Path stroke="none" d="M0 0H3V3H0z" />
          <Path fill="none" d="M0.5 0.5H2.5V2.5H0.5z" />
        </G>
        <G
          data-name="Rectangle 74"
          transform="translate(50 303)"
          stroke="#fff"
          strokeWidth={1}>
          <Path stroke="none" d="M0 0H3V3H0z" />
          <Path fill="none" d="M0.5 0.5H2.5V2.5H0.5z" />
        </G>
        <G
          data-name="Rectangle 76"
          transform="translate(38 309)"
          stroke="#fff"
          strokeWidth={1}>
          <Path stroke="none" d="M0 0H3V3H0z" />
          <Path fill="none" d="M0.5 0.5H2.5V2.5H0.5z" />
        </G>
        <G
          data-name="Rectangle 77"
          transform="translate(44 309)"
          stroke="#fff"
          strokeWidth={1}>
          <Path stroke="none" d="M0 0H3V3H0z" />
          <Path fill="none" d="M0.5 0.5H2.5V2.5H0.5z" />
        </G>
        <G
          data-name="Rectangle 78"
          transform="translate(50 309)"
          stroke="#fff"
          strokeWidth={1}>
          <Path stroke="none" d="M0 0H3V3H0z" />
          <Path fill="none" d="M0.5 0.5H2.5V2.5H0.5z" />
        </G>
      </G>
    </Svg>
  );
}

export default MySubscription;
