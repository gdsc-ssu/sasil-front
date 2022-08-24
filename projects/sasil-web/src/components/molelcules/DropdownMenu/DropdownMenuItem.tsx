import React from 'react';
import StyledText from '@/components/atoms/StyledText';
import { COLORS, TEXT_STYLE_NAME } from '@sasil/common';
import * as styles from './DropdownMenu.style';

export interface DropdownMenuProps {
  icon: any;
  text: string;
  onMenuClick?: () => void;
}

/** 드롭다운 메뉴를 만들어주는 컴포넌트 */
const DropdownMenu = ({ icon, text, onMenuClick }: DropdownMenuProps) => (
  <styles.MenuItem onClick={onMenuClick}>
    {icon}
    <StyledText
      color={COLORS.grayscale.gray7}
      textStyleName={TEXT_STYLE_NAME.button2R}
      className="menu-text"
    >
      {text}
    </StyledText>
  </styles.MenuItem>
);

export default DropdownMenu;
