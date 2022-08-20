import React from 'react';
import StyledText from '@/components/atoms/StyledText';
import styled from '@emotion/styled';
import { COLORS, TEXT_STYLE_NAME } from '@sasil/common';

const MenuItem = styled.div({
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer',
  margin: '3px 0px',
  '.menu-text': {
    marginLeft: '7px',
  },
  color: COLORS.grayscale.gray7,
  '&:hover': {
    color: COLORS.primary.normal,
    '.menu-text': {
      color: COLORS.primary.normal,
    },
  },
});

export interface DropdownMenuProps {
  icon: any;
  text: string;
  onMenuClick?: () => void;
}

/** 드롭다운 메뉴를 만들어주는 컴포넌트 */
const DropdownMenu = ({ icon, text, onMenuClick }: DropdownMenuProps) => (
  <MenuItem onClick={onMenuClick}>
    {icon}
    <StyledText
      color={COLORS.grayscale.gray7}
      textStyleName={TEXT_STYLE_NAME.button2R}
      className="menu-text"
    >
      {text}
    </StyledText>
  </MenuItem>
);

export default DropdownMenu;
