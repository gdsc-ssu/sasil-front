import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
import { IconProps } from './iconType';

const SvgComponent = ({ color }: IconProps) => (
  <Svg width={14} height={14} fill="none">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.94 2.316c.171-.171.448-.171.62 0L9.933 6.69c.171.17.171.447 0 .618L5.56 11.684a.438.438 0 0 1-.618-.618L9.006 7 4.941 2.934a.438.438 0 0 1 0-.618Z"
      fill="#616161"
    />
  </Svg>
);

export default SvgComponent;
