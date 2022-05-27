import * as styles from './StyledText.style';
import { StyledTextProps } from './StyledText.style';

/**
 * 주어진 인자를 바탕으로 style이 적용된 text를 생성하는 컴포넌트
 *
 * @param color : 텍스트 색 (인자를 지정해주지 않을 시, 기본값은 black)
 * @param textStyleName : 텍스트 스타일 종류로, TEXT_STYLE_NAME.* 로 지정된다.
 */
const StyledText = ({
  children,
  color,
  textStyleName,
  className,
}: StyledTextProps) => (
  <styles.wrap
    color={color}
    textStyleName={textStyleName}
    className={className}
  >
    {children}
  </styles.wrap>
);

export default StyledText;
