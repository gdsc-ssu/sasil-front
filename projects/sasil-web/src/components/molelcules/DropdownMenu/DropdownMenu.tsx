import React from 'react';
import * as styles from './DropdownMenu.style';

export interface DropdownMenuProps {
  /** 메뉴 내부에 들어가는 HTML */
  children?: React.ReactNode;
  /** 메뉴 노출 정보 객체 */
  menuDisplayInfo: {
    display: boolean;
    top: number;
  };
  /** 메뉴 노출 컨트롤 함수 */
  onMenuDisplayToggle: (top?: number) => void;
  className?: string;
}

/** 드롭다운 메뉴를 만들어주는 컴포넌트 */
const DropdownMenu = ({
  menuDisplayInfo,
  onMenuDisplayToggle,
  children,
  className,
}: DropdownMenuProps) => (
  <styles.MenuWrap top={menuDisplayInfo.top} className={className}>
    {menuDisplayInfo.display && (
      <>
        <styles.Menu className="menu">{children}</styles.Menu>
        <styles.FixedBackground onClick={() => onMenuDisplayToggle?.()} />
      </>
    )}
  </styles.MenuWrap>
);

export default DropdownMenu;
