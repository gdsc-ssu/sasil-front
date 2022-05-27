import styled from '@emotion/native';
import { COLORS } from '@sasil/common';

interface ProfileWrapProps {
  size: number;
}

// 프로필 이미지가 url이 존재할 경우
export const profileWrap = styled.Image((props: ProfileWrapProps) => ({
  borderRadius: props.size / 2,
}));

// 프로필 이미지 url이 null일 경우
export const defaultWrap = styled.View((props: ProfileWrapProps) => ({
  width: props.size,
  height: props.size,
  borderRadius: props.size / 2,
  backgroundColor: COLORS.grayscale.gray5,
}));
