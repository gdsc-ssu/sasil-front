import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
import { IconProps } from './iconType';

const SvgComponent = ({ color, size }: IconProps) => (
  <Svg width={size ?? '100%'} height={size ?? '100%'} fill="none" color={color}>
    <Path
      d="M13.75 23.75c5.523 0 10-4.477 10-10s-4.477-10-10-10-10 4.477-10 10 4.477 10 10 10ZM26.25 26.25l-5.438-5.438"
      stroke="#9E9E9E"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default SvgComponent;
