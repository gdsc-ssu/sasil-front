import styled from '@emotion/native';
import { COLORS } from '@sasil/common';

interface ContainerProps {
  bottomInset?: number;
}

export const Container = styled.View<ContainerProps>((props) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  paddingTop: 40,
  paddingBottom: 40 + (props.bottomInset ?? 0),
  backgroundColor: COLORS.background,
}));
