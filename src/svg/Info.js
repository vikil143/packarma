import * as React from 'react';
import Svg, {
  Defs,
  ClipPath,
  Path,
  G,
  Rect,
  Text,
  TSpan,
} from 'react-native-svg';

function Info(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={15}
      height={15}
      viewBox="0 0 15 15"
      {...props}>
      <Defs>
        <ClipPath id="a">
          <Path fill="none" d="M0 0H15V15H0z" />
        </ClipPath>
        <ClipPath id="b">
          <Path fill="none" d="M0 0H4V13H0z" />
        </ClipPath>
      </Defs>
      <G data-name="info" clipPath="url(#a)">
        <G data-name="Repeat Grid 3" clipPath="url(#a)">
          <Rect width={15} height={15} rx={7.5} fill="#f4d090" />
        </G>
        <G
          data-name="Repeat Grid 2"
          transform="translate(6 1)"
          clipPath="url(#b)">
          <G
            data-name="Repeat Grid 4"
            transform="translate(-6 -1) translate(6 1)"
            clipPath="url(#b)">
            <Text
              transform="translate(-6 -1) translate(6 1)"
              fill="#fff"
              fontSize={10}
              fontFamily="Roboto-Black, Roboto"
              fontWeight={800}>
              <TSpan x={0} y={10}>
                {'i'}
              </TSpan>
            </Text>
          </G>
        </G>
      </G>
    </Svg>
  );
}

export default Info;
