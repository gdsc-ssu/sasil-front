import React from 'react';
import Link from 'next/link';
import { UrlObject } from 'url';

import { TextStyleName } from '@sasil/common';
import * as styles from './StyledLink.style';

export interface StyledLinkProps {
  /** 클릭 시 이동할 url 주소 */
  url: string | UrlObject;
  children: React.ReactNode;
  /** 텍스트 색 (인자를 지정해주지 않을 시, 기본값은 black) */
  color?: string;
  /** 텍스트 스타일 종류로, TEXT_STYLE_NAME.* 로 지정된다. */
  textStyleName?: TextStyleName;
  /** 텍스트 overflow에 따른 ellipsis 처리 여부 */
  ellipsis?: boolean;
  /** 컴포넌트로 생성할 요소의 클래스명 */
  className?: string;
}

const StyledLink = ({
  url,
  color,
  textStyleName,
  ellipsis,
  className,
  children,
}: StyledLinkProps) => (
  <Link href={url} passHref>
    <styles.Wrap
      color={color}
      textStyleName={textStyleName}
      className={`${ellipsis ? 'ellipsis' : ''} ${className ?? ''}`}
    >
      {children}
    </styles.Wrap>
  </Link>
);
export default StyledLink;
