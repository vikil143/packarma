import * as React from 'react';
import Svg, {Defs, ClipPath, Path, G} from 'react-native-svg';

function UpArrow(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={13.174}
      height={8.7}
      viewBox="0 0 13.174 8.7"
      {...props}>
      <Defs>
        <ClipPath id="a">
          <Path fill="none" d="M0 0H13.174V8.7H0z" />
        </ClipPath>
      </Defs>
      <G data-name="Repeat Grid 2" clipPath="url(#a)">
        <Path
          data-name="Path 872"
          d="M338.273 124.503l5.083-5.685 4.568 5.685"
          fill="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2.5}
          transform="translate(-336.508 -117.565)"
        />
      </G>
    </Svg>
  );
}

export default UpArrow;
