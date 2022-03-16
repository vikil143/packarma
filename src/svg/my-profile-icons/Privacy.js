import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function Privacy(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={19.733}
      height={19.733}
      viewBox="0 0 19.733 19.733"
      {...props}>
      <Path
        d="M18.333 9.167A9.167 9.167 0 119.167 0a9.167 9.167 0 019.166 9.167z"
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.4}
        transform="translate(.7 .7)"
      />
      <Path
        data-name="Icon material-security"
        d="M9.515 1.5L4.5 3.351v2.777a6.028 6.028 0 005.015 5.554 6.028 6.028 0 005.015-5.554V3.351zm0 5.086h3.9a5.235 5.235 0 01-3.9 4.138V6.591h-3.9V3.953l3.9-1.439z"
        transform="translate(.7 .7) translate(-.348 2.576)"
      />
    </Svg>
  );
}

export default Privacy;
