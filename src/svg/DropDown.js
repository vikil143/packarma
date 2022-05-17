import * as React from 'react';
import Svg, {Defs, ClipPath, Path, G} from 'react-native-svg';

function DropDown(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={9.651}
      height={5.685}
      viewBox="0 0 9.651 5.685"
      {...props}>
      <Defs>
        <ClipPath id="a">
          <Path fill="none" d="M0 0H9.651V5.685H0z" />
        </ClipPath>
      </Defs>
      <G data-name="Repeat Grid 3" clipPath="url(#a)">
        <Path
          data-name="Path 762"
          d="M-6523.608-5407.887l5.083 5.685 4.568-5.685"
          transform="translate(-331 -639.955) translate(6854.608 6047.842)"
        />
      </G>
    </Svg>
  );
}

export default DropDown;
