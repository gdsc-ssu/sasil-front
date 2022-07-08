import styled, { css } from '@emotion/native';

export const Wrap = styled.Pressable(
  ({ alignRight }: { alignRight: boolean }) => ({
    width: 140,
    height: 100,
    paddingHorizontal: 12,
    paddingVertical: 3,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: alignRight ? 'flex-end' : 'flex-start',
  }),
);

export const IconWrap = styled.View(
  ({ haveFireIcon }: { haveFireIcon: boolean }) => ({
    width: haveFireIcon ? 21 : 40,
    height: haveFireIcon ? 21 : 40,
  }),
);

export const CircleIconWrap = styled.View({
  width: 24,
  height: 24,
});

export const rightTitle = css({
  textAlign: 'right',
});
