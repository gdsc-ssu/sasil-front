import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
import { IconProps } from './iconType';

const SvgComponent = ({ color }: IconProps) => (
  <Svg width={24} height={24} fill="currentColor" color={color}>
    <Path
      clipRule="evenodd"
      d="M12.889 4.889a.889.889 0 0 0-1.778 0v6.222H4.89a.889.889 0 0 0 0 1.778h6.222v6.222a.889.889 0 0 0 1.778 0V12.89h6.222a.889.889 0 0 0 0-1.778H12.89V4.89Z"
    />
  </Svg>
);

export default SvgComponent;
