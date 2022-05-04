import styled from '@emotion/native';
import { COLORS, TextStyleName, TEXT_STYLES_MOBILE } from '@sasil/common';

interface StyledTextProps {
  color?: string;
  textStyleName: TextStyleName;
}

/**
 * 주어진 인자를 바탕으로 style이 적용된 text를 생성하는 컴포넌트
 *
 * @param color : 텍스트 색 (인자를 지정해주지 않을 시, 기본값은 black)
 * @param textStyleName : 텍스트 스타일 종류로, TEXT_STYLE_NAME.* 로 지정된다.
 */
const StyledText = styled.Text<StyledTextProps>((props) => ({
  color: props.color || COLORS.grayscale.black,
  fontFamily: TEXT_STYLES_MOBILE[props.textStyleName].fontFamily,
  fontSize: TEXT_STYLES_MOBILE[props.textStyleName].fontSize,
  fontWeight: TEXT_STYLES_MOBILE[props.textStyleName].fontWeight,
  lineHeight: TEXT_STYLES_MOBILE[props.textStyleName].lineHeight,
}));

export default StyledText;
