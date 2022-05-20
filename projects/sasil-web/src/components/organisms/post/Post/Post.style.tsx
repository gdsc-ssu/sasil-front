import styled from '@emotion/styled';

type miniCardProps = {
  backgroundColor: string;
  thumbnail?: string | null;
};

// ? 실험과 의뢰 게시물이 현재 한 컴포넌트로 구성이 되어있다.
// ? 이때문에 의뢰 게시물은 배경 이미지가 아예 안들어감에도 불구하고 css에는 background 관련 코드가 들어가있는 상황.. 리팩토링 필요
export const miniCard = styled.div((props: miniCardProps) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  borderRadius: 5,
  boxSizing: 'border-box',
  width: 200,
  height: 120,
  padding: 15,
  // 실험 게시물 썸네일 관련
  background: props.thumbnail
    ? ` linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${props.thumbnail})`
    : props.backgroundColor,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center center',
  backgroundSize: 'cover',
}));

export const infoWrap = styled.div({
  display: 'flex',
  flexDirection: 'column',
});

export const writerWrap = styled.div({
  marginBottom: 5,
});
