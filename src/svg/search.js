import * as React from 'react';
import Svg, {Defs, ClipPath, Path, G} from 'react-native-svg';

function Search(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={18.19}
      height={18.19}
      viewBox="0 0 18.19 18.19"
      {...props}>
      <Defs>
        <ClipPath id="a">
          <Path fill="none" d="M0 0H18.19V18.19H0z" />
        </ClipPath>
      </Defs>
      <G
        stroke="#e4e4e4"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.4}
        data-name="Repeat Grid 8"
        clipPath="url(#a)">
        <Path
          d="M16.5 16.5l-3.988-3.988"
          fill="#e4e4e4"
          transform="translate(-11.073 -12.05) translate(11.773 12.75)"
        />
        <Path
          data-name="Vector"
          d="M14.667 7.333A7.333 7.333 0 117.333 0a7.333 7.333 0 017.334 7.333z"
          fill="none"
          transform="translate(-11.073 -12.05) translate(11.773 12.75)"
        />
      </G>
    </Svg>
  );
}

export default Search;
