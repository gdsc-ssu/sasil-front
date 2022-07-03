import { StyleProp, ViewStyle } from 'react-native';

import { TextStyleName } from '@sasil/common';
import * as styles from './StyledButton.style';

export interface StyledButtonProps {
  text: string;
  fontColor?: string;
  backgroundColor?: string;
  textStyleName: TextStyleName;
  numberOfLines?: number;
  style?: StyleProp<ViewStyle>;
  onPress?: () => void;
}

const StyledButton = ({
  text,
  fontColor,
  backgroundColor,
  textStyleName,
  numberOfLines,
  style,
  onPress,
}: StyledButtonProps) => (
  <styles.ButtonWrap
    onPress={onPress}
    style={style}
    backgroundColor={backgroundColor}
  >
    <styles.TextWrap
      fontColor={fontColor}
      textStyleName={textStyleName}
      numberOfLines={numberOfLines}
    >
      {text}
    </styles.TextWrap>
  </styles.ButtonWrap>
);

export default StyledButton;
