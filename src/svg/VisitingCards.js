import * as React from 'react';
import Svg, {G, Path} from 'react-native-svg';

function VisitingCard(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={36}
      height={31.5}
      viewBox="0 0 36 31.5"
      {...props}>
      <G data-name="Group 319" fill="#fff">
        <Path
          data-name="Path 1088"
          d="M30.734 11.658A10.546 10.546 0 0011.573 6.8a4.984 4.984 0 00-1.891-.373 5.207 5.207 0 00-5.02 5.161A6.868 6.868 0 000 18.105a6.613 6.613 0 006.391 6.645h10.695v-9.977l-3.368 3.319a.915.915 0 11-1.287-1.3l4.922-4.852a.894.894 0 01.288-.19.872.872 0 01.352-.07.916.916 0 01.64.26l4.922 4.852a.915.915 0 11-1.287 1.3l-3.354-3.319v9.977h10.695a6.618 6.618 0 001.125-13.092z"
          transform="translate(0 -2.25)"
        />
        <Path
          data-name="Path 1089"
          d="M17.086 32.836a.914.914 0 001.828 0V24.75h-1.828z"
          transform="translate(0 -2.25)"
        />
      </G>
    </Svg>
  );
}

export default VisitingCard;
