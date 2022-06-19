import styled from '@emotion/styled';

export const Wrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 1300px;

  > .mini-card {
    margin-right: 15px;
    margin-bottom: 15px;
  }
  > .mini-card:nth-child(6),
  .mini-card:nth-child(12) {
    margin-right: 0px;
  }
`;
