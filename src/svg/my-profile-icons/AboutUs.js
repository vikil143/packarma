import * as React from 'react';
import Svg, {Defs, ClipPath, Path, G} from 'react-native-svg';

function AboutUs(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={21.4}
      height={21.4}
      viewBox="0 0 21.4 21.4"
      {...props}>
      <Defs>
        <ClipPath id="a">
          <Path fill="none" d="M0 0H21.4V21.4H0z" />
        </ClipPath>
      </Defs>
      <G
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.4}
        data-name="Repeat Grid 4"
        clipPath="url(#a)">
        <Path
          d="M20 10A10 10 0 1110 0a10 10 0 0110 10z"
          transform="translate(-1.3 -1.3) translate(2 2)"
        />
        <Path
          data-name="Vector"
          d="M10 14h.01M10 6v4"
          transform="translate(-1.3 -1.3) translate(2 2)"
        />
      </G>
    </Svg>
  );
}

export default AboutUs;
