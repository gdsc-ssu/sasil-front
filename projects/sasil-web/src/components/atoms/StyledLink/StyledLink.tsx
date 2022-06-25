import React from 'react';
import Link from 'next/link';
import { UrlObject } from 'url';

import { StyledTextProps } from '@/components/atoms/StyledText';
import * as styles from './StyledLink.style';

export interface StyledLinkProps extends StyledTextProps {
  /** 클릭 시 이동할 url 주소 */
  url: string | UrlObject;
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
