import styled from '@emotion/styled';
import { COLORS } from '@sasil/common';

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 116px;
`;

export const ButtonWrap = styled.div`
  > .list-opened {
    background-color: ${COLORS.grayscale.white};
  }
`;

export const Button = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  border: none;
  background-color: ${COLORS.primary.normal};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  .list-opened-icon {
    transform: rotate(45deg);
  }
`;

export const ListWrap = styled.div`
  width: 116px;
  height: 88px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${COLORS.grayscale.white};
  color: ${COLORS.grayscale.white};
  margin-bottom: 12px;
  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.1);
`;

export const ListItem = styled.div`
  display: flex;
  align-items: center;
  fill: ${COLORS.grayscale.gray6};
  .item-text {
    margin-left: 5px;
  }
  .item-text:hover {
    color: ${COLORS.primary.normal};
  }

  :first-child {
    margin-bottom: 12px;
  }
  :hover {
    fill: ${COLORS.primary.normal};
  }
`;
