import styled, { css } from '@emotion/native';
import { COLORS } from '@sasil/common';

interface ContainerProps {
  bottomInset?: number;
}

export const Container = styled.View<ContainerProps>((props) => ({
  flex: 1,
  paddingBottom: props.bottomInset,
  backgroundColor: COLORS.grayscale.white,
}));

export const webView = css({
  flex: 1,
});
