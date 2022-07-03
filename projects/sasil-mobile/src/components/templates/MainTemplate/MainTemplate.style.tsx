import styled, { css } from '@emotion/native';
import { COLORS } from '@sasil/common';

export const Content = styled.View(
  ({ backgroundColor }: { backgroundColor: string }) => ({
    height: 280,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20,
    backgroundColor,
  }),
);

export const Scroll = styled.ScrollView({});

export const PostsContainer = css({
  flexGrow: 1,
  justifyContent: 'center',
  alignSelf: 'center',
});

export const ViewMoreButton = styled.Pressable({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  position: 'absolute',
  right: 10,
  top: 15,
});

export const Template = styled.SafeAreaView({
  flex: 1,
  backgroundColor: COLORS.grayscale.white,
});

export const Top = styled.View({
  display: 'flex',
  flexDirection: 'row',
  marginHorizontal: 22,
  marginVertical: 13,
  marginBottom: 60,
  justifyContent: 'space-between',
});

export const LogoWrap = styled.View({
  width: 64,
  height: 105,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const MenuWrap = styled.View({
  width: 32,
  height: 82,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginTop: 10,
});
