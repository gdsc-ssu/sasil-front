import { COLORS } from '@sasil/common';
import styled from '@emotion/styled';

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > .post-wrap {
    margin: 0 auto;
  }
  .exp {
    background-color: ${COLORS.grayscale.white};
  }
`;

export const Wrap = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${COLORS.background};
  padding: 47px;
`;

export const Icon = styled.div`
  margin: 88px auto;
`;

export const PostAddWrap = styled.div`
  position: fixed;
  right: 30px;
  bottom: 40px;
`;
