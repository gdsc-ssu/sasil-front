import React, { useCallback, useEffect, useState } from 'react';

import { COLORS } from '@sasil/common';
import StyledText from '@/components/atoms/StyledText';
import * as styles from './SwitchButton.style';

export interface SwitchButtonProps {
  className?: string;
  /** 초기 버튼 위치가 오른쪽인지 */
  initRight?: boolean;
  /** 버튼이 왼쪽으로 이동하면서 동작할 함수  */
  onLeftMove?: () => void;
  /** 버튼이 오른쪽으로 이동하면서 동작할 함수  */
  onRightMove?: () => void;
  /** 왼쪽에 위치한 라벨명  */
  leftLabel: string;
  /** 오른쪽에 위치한 라벨명  */
  rightLabel: string;
}

/**
 * 토글 버튼을 생성하는 컴포넌트
 */
const SwitchButton = ({
  className,
  initRight,
  leftLabel,
  rightLabel,
  onLeftMove,
  onRightMove,
}: SwitchButtonProps) => {
  const [isLeft, setIsLeft] = useState<boolean>(!initRight);

  useEffect(() => {
    setIsLeft(!initRight);
  }, [initRight]);

  const onClick = useCallback(() => {
    if (onRightMove && onLeftMove) {
      const res = isLeft ? onRightMove() : onLeftMove();
    }

    setIsLeft((prev) => !prev);
  }, [isLeft, onLeftMove, onRightMove]);

  return (
    <styles.SwitchButtonWrapped onClick={onClick} className={className}>
      <styles.StyledBackground>
        <styles.BackgroundLabel>
          <StyledText
            textStyleName="body1B"
            color={COLORS.grayscale.gray4}
            className={isLeft ? 'focused switch-btn-label' : 'switch-btn-label'}
          >
            {leftLabel}
          </StyledText>
        </styles.BackgroundLabel>
        <styles.BackgroundLabel>
          <StyledText
            textStyleName="body1B"
            color={COLORS.grayscale.gray4}
            className={isLeft ? 'switch-btn-label' : 'focused switch-btn-label'}
          >
            {rightLabel}
          </StyledText>
        </styles.BackgroundLabel>
      </styles.StyledBackground>
      <styles.StyledMoveBtn isLeft={isLeft} />
    </styles.SwitchButtonWrapped>
  );
};

export default SwitchButton;
