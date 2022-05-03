import { COLORS, TEXT_STYLES_PC, TextStyleName } from '@sasil/common';

import styled from '@emotion/styled';

export interface StyledTextProps {
  color?: string;
  textStyleName: TextStyleName;
}

/**
 * 주어진 인자를 바탕으로 style이 적용된 text를 생성하는 컴포넌트
 *
 * @param color : 텍스트 색 (인자를 지정해주지 않을 시, 기본값은 black)
 * @param textStyleName : 텍스트 스타일 종류로, TEXT_STYLE_NAME.* 로 지정된다.
 */
const StyledText = styled.div<StyledTextProps>((props) => ({
  color: props.color || COLORS.grayscale.black,
  fontSize: TEXT_STYLES_PC[props.textStyleName].fontSize,
  fontWeight: TEXT_STYLES_PC[props.textStyleName].fontWeight,
  lineHeight: `${TEXT_STYLES_PC[props.textStyleName].lineHeight}px`,
}));

export default StyledText;
