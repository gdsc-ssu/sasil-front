import styled from '@emotion/styled';
import { COLORS } from '@sasil/common';

export const Wrap = styled.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '116px',
});

export const ButtonWrap = styled.div({
  '& .list-opened': {
    backgroundColor: `${COLORS.grayscale.white};`,
  },
});

type ButtonProps = {
  color: string;
};
export const Button = styled.button(({ color }: ButtonProps) => ({
  width: '50px',
  height: '50px',
  border: 'none',
  borderRadius: '25px',
  backgroundColor: `${color}`,
  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
}));

export const Icon = styled.div({
  transform: 'rotate(45deg)',
  transition: 'linear',
});

export const ListWrap = styled.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '116px',
  height: '88px',
  borderRadius: '5px',
  justifyContent: 'center',
  backgroundColor: `${COLORS.grayscale.white}`,
  color: `${COLORS.grayscale.white}`,
  marginBottom: '12px',
  boxShadow: '0px 3px 3px rgba(0, 0, 0, 0.1)',
});

export const ListItem = styled.div({
  width: '75%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  fill: `${COLORS.grayscale.gray6}`,
  margin: '6px 0px',
  '.item-text:hover': {
    color: `${COLORS.primary.normal}`,
  },
  ':hover': {
    fill: `${COLORS.primary.normal}`,
  },
});
