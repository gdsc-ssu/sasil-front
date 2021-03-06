import styled from '@emotion/native';

interface ProfileWrapProps {
  size: number;
}

export const ProfileWrap = styled.Image((props: ProfileWrapProps) => ({
  borderRadius: props.size / 2,
  width: props.size,
  height: props.size,
}));
