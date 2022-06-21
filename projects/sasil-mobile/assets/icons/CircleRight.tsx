import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
import { IconProps } from './iconType';

const SvgComponent = ({ color }: IconProps) => (
  <Svg
    width="100%"
    height="100%"
    fill="currentColor"
    color={color}
    xmlns="http://www.w3.org/2000/svg"
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 3.75a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5ZM2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Z"
      fill="#424242"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.318 8.123a.75.75 0 0 1 1.059-.055l3.75 3.375a.75.75 0 0 1 0 1.114l-3.75 3.375a.75.75 0 1 1-1.004-1.114L13.503 12l-3.13-2.818a.75.75 0 0 1-.055-1.059Z"
      fill="#424242"
    />
  </Svg>
);

export default SvgComponent;
