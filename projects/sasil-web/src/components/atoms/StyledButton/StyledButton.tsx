import { TextStyleName } from '@sasil/common';
import * as styles from './StyledButton.style';

export interface StyledButtonProps {
  /** 버튼에 들어갈 텍스트 */
  text: string;
  /** 텍스트 색상 (기본: COLORS.grayscale.white) */
  fontColor?: string;
  /** 버튼 배경 색상 (기본: COLORS.primary.normal) */
  backgroundColor?: string;
  /** 텍스트 스타일 종류로, TEXT_STYLE_NAME.* 로 지정된다. */
  textStyleName: TextStyleName;
  /** 버튼 크기에 따른 Button과 ButtonMini 분류 (true/false)  */
  isMini?: boolean;
  /** 클릭 시 동작할 콜백 함수 */
  onClick?: () => void;
  className?: string;
}

const StyledButton = ({
  text,
  fontColor,
  backgroundColor,
  textStyleName,
  isMini,
  className,
  onClick,
}: StyledButtonProps) => (
  <styles.Wrap
    fontColor={fontColor}
    backgroundColor={backgroundColor}
    textStyleName={textStyleName}
    isMini={isMini}
    className={className}
    onClick={onClick}
  >
    {text}
  </styles.Wrap>
);

export default StyledButton;
