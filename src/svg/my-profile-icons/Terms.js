import * as React from 'react';
import Svg, {G, Path} from 'react-native-svg';

function Terms(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={19.733}
      height={19.733}
      viewBox="0 0 19.733 19.733"
      {...props}>
      <G
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.4}>
        <Path
          d="M18.333 9.167A9.167 9.167 0 119.167 0a9.167 9.167 0 019.166 9.167z"
          transform="translate(.7 .7)"
        />
        <Path
          data-name="Vector"
          d="M9.167 13.75h.009M6.499 6.416a2.75 2.75 0 015.344.917c0 1.833-2.75 2.75-2.75 2.75"
          transform="translate(.7 .7)"
        />
      </G>
    </Svg>
  );
}

export default Terms;
