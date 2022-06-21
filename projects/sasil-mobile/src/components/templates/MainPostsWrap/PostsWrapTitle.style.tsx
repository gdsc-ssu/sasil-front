import styled, { css } from '@emotion/native';

export const Wrap = styled.View(({ alignLeft }: { alignLeft: boolean }) => ({
  width: 140,
  height: 100,
  paddingHorizontal: 12,
  paddingVertical: 3,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: alignLeft ? 'flex-start' : 'flex-end',
}));

export const rightTitle = css({
  textAlign: 'right',
});

export const IconWrap = styled.View(
  ({ haveFireIcon }: { haveFireIcon: boolean }) => ({
    width: haveFireIcon ? 20 : 40,
    height: haveFireIcon ? 21 : 40,
  }),
);

export const CircleIconWrap = styled.View({
  width: 24,
  height: 24,
});
