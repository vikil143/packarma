import * as React from 'react';
import Svg, {Defs, ClipPath, Path, G, Rect} from 'react-native-svg';

function MySubscription(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={26}
      height={20}
      viewBox="0 0 26 20"
      {...props}>
      <Defs>
        <ClipPath id="a">
          <Path fill="none" d="M0 0H26V20H0z" />
        </ClipPath>
      </Defs>
      <G data-name="Repeat Grid 2">
        <G data-name="Group 309" clipPath="url(#a)">
          <G
            data-name="Rectangle 71"
            transform="translate(5342 7258.159) translate(-5342 -7258.159)"
            fill="#fff"
            stroke="#000"
            strokeWidth={1}>
            <Rect width={26} height={20} rx={4} stroke="none" />
            <Rect x={0.5} y={0.5} width={25} height={19} rx={3.5} fill="none" />
          </G>
        </G>
      </G>
    </Svg>
  );
}

export default MySubscription;
