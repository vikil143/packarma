import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function PlaceIcon(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={15.167}
      height={18.833}
      viewBox="0 0 15.167 18.833"
      {...props}>
      <Path
        d="M9.417.25H2.083A1.833 1.833 0 00.25 2.083V16.75a1.833 1.833 0 001.833 1.833h11a1.833 1.833 0 001.834-1.833v-11z"
        fill="#fff"
        stroke="#a2a2a2"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={0.5}
      />
    </Svg>
  );
}

export default PlaceIcon;
