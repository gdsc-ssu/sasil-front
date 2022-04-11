import COLORS from '@sasil/common/dist/constants/style';
import { TextStyleName, TEXT_STYLES } from '@/constants/styles/textStyles';
import styled from '@emotion/styled';

export interface StyledTextProps {
  color?: string;
  textStyleName: TextStyleName;
}

const StyledText = styled.div<StyledTextProps>((props) => ({
  color: props.color || COLORS.grayscale.black,
  fontSize: TEXT_STYLES[props.textStyleName].fontSize,
  fontFamily: TEXT_STYLES[props.textStyleName].fontFamily,
  fontWeight: TEXT_STYLES[props.textStyleName].fontWeight,
}));

export default StyledText;
