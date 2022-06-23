import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconProps } from './iconType';

const SvgComponent = ({ color }: IconProps) => (
  <Svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth="1.6"
    color={color}
  >
    <Path
      d="M9.30684 20.7834V17.8781C9.30682 17.1391 9.90927 16.5387 10.6557 16.5337H13.3899C14.1399 16.5337 14.7478 17.1356 14.7478 17.8781V17.8781V20.7925C14.7477 21.4199 15.2535 21.9327 15.8871 21.9474H17.7099C19.527 21.9474 21 20.4891 21 18.6902V18.6902V10.4253C20.9903 9.71763 20.6547 9.05307 20.0886 8.62077L13.8547 3.64923C12.7626 2.78359 11.2101 2.78359 10.118 3.64923L3.91139 8.62979C3.34319 9.06034 3.007 9.726 3 10.4343V18.6902C3 20.4891 4.47304 21.9474 6.29013 21.9474H8.11291C8.76223 21.9474 9.28861 21.4263 9.28861 20.7834V20.7834"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default SvgComponent;
