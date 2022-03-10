import * as React from 'react';
import Svg, {Defs, ClipPath, Path, G} from 'react-native-svg';

function QuestionMark(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={9.81}
      height={15.689}
      viewBox="0 0 9.81 15.689"
      {...props}>
      <Defs>
        <ClipPath id="a">
          <Path fill="none" d="M0 0H9.81V15.689H0z" />
        </ClipPath>
      </Defs>
      <G data-name="Repeat Grid 9">
        <G
          data-name="Group 100"
          fill="none"
          stroke="#fff"
          strokeLinecap="round"
          strokeLinejoin="round"
          clipPath="url(#a)">
          <Path
            d="M187.209 56.996h.013"
            strokeWidth={2.4}
            transform="translate(-182.188 -42.507)"
          />
          <Path
            data-name="Vector"
            d="M183.332 46.135a4.057 4.057 0 011.745-2.16 3.932 3.932 0 012.7-.5 3.98 3.98 0 012.382 1.388 4.121 4.121 0 01.939 2.629c0 2.715-4 4.073-4 4.073"
            strokeWidth={1.8}
            transform="translate(-182.188 -42.507)"
          />
        </G>
      </G>
    </Svg>
  );
}

export default QuestionMark;
