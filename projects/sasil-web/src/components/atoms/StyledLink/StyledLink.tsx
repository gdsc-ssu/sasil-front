import React from 'react';
import Link from 'next/link';
import { UrlObject } from 'url';

import StyledText, { StyledTextProps } from '@/components/atoms/StyledText';
import * as styles from './StyledLink.style';

export interface StyledLinkProps extends StyledTextProps {
  /** 클릭 시 이동할 url 주소 */
  url: string | UrlObject;
  className?: string;
  children: React.ReactNode;
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
    <styles.Wrap className={className}>
      <StyledText
        ellipsis={ellipsis}
        color={color}
        textStyleName={textStyleName}
      >
        {children}
      </StyledText>
    </styles.Wrap>
  </Link>
);
export default StyledLink;
