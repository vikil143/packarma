import * as React from 'react';
import Svg, {G, Path} from 'react-native-svg';

function ViewAll(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={20.379}
      height={19.612}
      viewBox="0 0 20.379 19.612"
      {...props}>
      <G
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        data-name="Group 12180">
        <Path
          d="M10.083 11.505H16.5v6.417h-6.417z"
          strokeWidth={1.4}
          transform="translate(-105.05 -19.338) translate(105.75 20.328)"
        />
        <Path
          data-name="Vector"
          d="M0 11.505h6.417v6.417H0z"
          strokeWidth={1.4}
          transform="translate(-105.05 -19.338) translate(105.75 20.328)"
        />
        <Path
          data-name="Vector"
          d="M14.143 0l4.548 4.705L13.98 9.26 9.43 4.555z"
          strokeWidth={1.399986}
          transform="translate(-105.05 -19.338) translate(105.75 20.328)"
        />
        <Path
          data-name="Vector"
          d="M0 1.422h6.417v6.417H0z"
          strokeWidth={1.4}
          transform="translate(-105.05 -19.338) translate(105.75 20.328)"
        />
      </G>
    </Svg>
  );
}

export default ViewAll;
