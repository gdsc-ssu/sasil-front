import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const SvgComponent = (props: SvgProps) => (
  <Svg width={14} height={14} fill="none" {...props}>
    <Path
      d="m8 14-.87-.815C4.04 10.3 2 8.398 2 6.064 2 4.16 3.452 2.667 5.3 2.667c1.044 0 2.046.5 2.7 1.29.654-.79 1.656-1.29 2.7-1.29 1.848 0 3.3 1.494 3.3 3.397 0 2.334-2.04 4.236-5.13 7.127l-.87.81Z"
      fill="currentColor"
    />
  </Svg>
);

export default SvgComponent;
