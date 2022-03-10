import * as React from 'react';
import Svg, {Defs, ClipPath, Path, G} from 'react-native-svg';

function UserIcon(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={17.4}
      height={19.4}
      viewBox="0 0 17.4 19.4"
      {...props}>
      <Defs>
        <ClipPath id="a">
          <Path fill="none" d="M0 0H17.4V19.4H0z" />
        </ClipPath>
      </Defs>
      <G
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.4}
        data-name="Repeat Grid 10"
        clipPath="url(#a)">
        <Path
          d="M16 18v-2a4 4 0 00-4-4H4a4 4 0 00-4 4v2"
          stroke="#000"
          transform="translate(-333.3 -31.3) translate(334 32)"
        />
        <Path
          data-name="Vector"
          d="M12 4a4 4 0 11-4-4 4 4 0 014 4z"
          stroke="#ee3f27"
          transform="translate(-333.3 -31.3) translate(334 32)"
        />
      </G>
    </Svg>
  );
}

export default UserIcon;
