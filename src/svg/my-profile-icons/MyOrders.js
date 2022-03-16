import * as React from 'react';
import Svg, {Defs, ClipPath, Path, G} from 'react-native-svg';

function MyOrdersIcon(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={16.667}
      height={21.333}
      viewBox="0 0 16.667 21.333"
      {...props}>
      <Defs>
        <ClipPath id="a">
          <Path fill="none" d="M0 0H16.667V21.333H0z" />
        </ClipPath>
      </Defs>
      <G
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1}
        data-name="Repeat Grid 1"
        clipPath="url(#a)">
        <Path
          d="M9.792 0H1.958A1.922 1.922 0 00.574.6 2.074 2.074 0 000 2.033V18.3a2.074 2.074 0 00.574 1.438 1.922 1.922 0 001.385.6h11.75a1.922 1.922 0 001.385-.6 2.074 2.074 0 00.574-1.438V6.1z"
          transform="translate(-36.5 -243.167) translate(37 243.667)"
        />
        <Path
          data-name="Vector"
          d="M11.5 15.25H4.167M11.5 11.183H4.167M5.785 7.117H3.952M10.167 0v5.5h5.5"
          transform="translate(-36.5 -243.167) translate(37 243.667)"
        />
      </G>
    </Svg>
  );
}

export default MyOrdersIcon;
