import { COLORS } from '@sasil/common';
import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .exp {
    background-color: ${COLORS.grayscale.white};
  }
`;

export const Content = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${COLORS.background};
  padding: 47px;
`;

export const IconWrap = styled.div`
  margin: 88px auto;
`;

export const PostWriteNavWrap = styled.div`
  position: fixed;
  right: 30px;
  bottom: 40px;
`;
