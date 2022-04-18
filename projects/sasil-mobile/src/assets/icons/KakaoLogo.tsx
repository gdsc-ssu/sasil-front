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

const SvgComponent = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path fill="url(#a)" d="M0 .5h18v17H0z" />
    <Defs>
      <Pattern
        id="a"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <Use xlinkHref="#b" transform="scale(.02778 .02941)" />
      </Pattern>
      <Image
        id="b"
        width={36}
        height={34}
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAiCAYAAAA3WXuFAAAACXBIWXMAAAsTAAALEwEAmpwYAAACC0lEQVRYhc3Yv2sTYRzH8VfOqpWUDAoigiI4KOiiaMcaxVHIZEFBXUQcHHVx8A+QDg6CDroKtS7i4FDUok5KC6JSERHxR2n9BQarwUpxeHJyBpO7liTXN2T55uHuzXPf75NPrmBhrMEAdmErNmAtVtS//4WPeItJTOA+vmS9QSHDmuWo4DD6EWW9eJ15PMI13MTcYoUiDOI01i9QohlTGMJ1QTSz0CZcxM42iTQygVN4k0VoHy6jr0MyMd9xEneTxWUNiw7gCno7LEMYhApe4WVcTO5QP0aEJu4mczgoNP5foRLGsK7LMjEz2INq/MjO1gt50YeVGCsIh91j3embVtSwOxIaK28ZgkMlQjlnkSTlCNvytkiwPRJ6aKmwOpLtB7ZbzEdCXFgqfI4wnrdFgqcRHuRtkWC0gKKwS6WcZarojzCLqznLEFJGNZ6wXoxic04yr7EftTgf13BC2LZuM4vjdYd/AvskjglJrlv8wFG8iAuNifGDMHVlnW/yGRzScOw0CsE0bmAjtnRI5jaOyBjykwziQhtFnuA87jVb0JNygVVtkKgKEzyMh2mL04TSYu3X+qcoDMhPfMJ7PBf6Yxy/00RiWj2yHjzTvLlHcA7fst4sC612aEcTmWmcwZ12isS0enEw8J/asHAkdEQmjVvCy4EpoQ/25iERU8I74aAckn8SUMQlOfwj+QP9mWADykS8VAAAAABJRU5ErkJggg=="
      />
    </Defs>
  </Svg>
);

export default SvgComponent;
