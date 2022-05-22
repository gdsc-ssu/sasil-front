import styled from '@emotion/styled';
import { COLORS } from '@sasil/common';

interface ProfileImageWrapProps {
  size: number;
}

export const ProfileImageWrap = styled.div((props: ProfileImageWrapProps) => ({
  width: props.size,
  height: props.size,
  borderRadius: props.size / 2,
  backgroundColor: COLORS.grayscale.gray6,
  overflow: 'hidden',
  position: 'relative',
}));
