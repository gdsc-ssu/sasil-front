import styled from '@emotion/native';
import { COLORS } from '@sasil/common';

export const Scroll = styled.ScrollView({
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: COLORS.background,
});

export const Template = styled.SafeAreaView({
  flex: 1,
});
