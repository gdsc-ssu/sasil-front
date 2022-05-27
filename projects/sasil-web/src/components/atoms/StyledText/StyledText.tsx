import * as styles from './StyledText.style';
import { StyledTextProps } from './StyledText.style';

/**
 * 주어진 인자를 바탕으로 style이 적용된 text를 생성하는 컴포넌트
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
