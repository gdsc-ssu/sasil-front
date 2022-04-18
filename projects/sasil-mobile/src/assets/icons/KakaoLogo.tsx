/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';
import Svg, {
  SvgProps,
  Path,
  Defs,
  Pattern,
  Use,
  Image,
} from 'react-native-svg';

const kakaoLogo = (props: SvgProps) => (
  <Svg width={18} height={18} fill="none" {...props}>
    <Path
      d="M9 0c1.627 0 3.132.343 4.515 1.029 1.383.685 2.476 1.618 3.28 2.797C17.598 5.005 18 6.29 18 7.684c0 1.393-.402 2.681-1.205 3.864-.804 1.183-1.896 2.117-3.275 2.803-1.38.685-2.886 1.028-4.52 1.028-.516 0-1.048-.04-1.597-.12-2.384 1.793-3.653 2.7-3.807 2.722a.24.24 0 0 1-.211-.011.197.197 0 0 1-.06-.087.286.286 0 0 1-.02-.098v-.044c.04-.283.345-1.462.914-3.537-1.293-.697-2.319-1.62-3.079-2.77A6.667 6.667 0 0 1 0 7.684c0-1.393.402-2.68 1.205-3.858.804-1.18 1.897-2.112 3.28-2.797C5.868.343 7.373 0 9 0Z"
      fill="#000"
    />
  </Svg>
);

export default kakaoLogo;
