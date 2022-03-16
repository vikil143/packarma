import * as React from 'react';
import Svg, {G, Path} from 'react-native-svg';

function Help(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={19.4}
      height={19.4}
      viewBox="0 0 19.4 19.4"
      {...props}>
      <G
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.4}>
        <Path
          d="M0 15V9a9 9 0 0118 0v6"
          transform="translate(-2.3 -2.3) translate(3 3)"
        />
        <Path
          data-name="Vector"
          d="M18 16a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM0 16a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H0z"
          transform="translate(-2.3 -2.3) translate(3 3)"
        />
      </G>
    </Svg>
  );
}

export default Help;
