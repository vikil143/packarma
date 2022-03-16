import * as React from 'react';
import Svg, {Defs, ClipPath, Path, G} from 'react-native-svg';

function MapIcon(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={19.4}
      height={23.4}
      viewBox="0 0 19.4 23.4"
      {...props}>
      <Defs>
        <ClipPath id="a">
          <Path fill="none" d="M0 0H19.4V23.4H0z" />
        </ClipPath>
      </Defs>
      <G
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.4}
        data-name="profile"
        clipPath="url(#a)">
        <Path
          d="M18 9c0 7-9 13-9 13S0 16 0 9a9 9 0 0118 0z"
          transform="translate(-2.3 -.3) translate(3 1)"
        />
        <Path
          data-name="Vector"
          d="M12 9a3 3 0 11-3-3 3 3 0 013 3z"
          transform="translate(-2.3 -.3) translate(3 1)"
        />
      </G>
    </Svg>
  );
}

export default MapIcon;
