import styled from '@emotion/styled';

type miniCardProps = {
  backgroundColor: string;
  thumbnail: string | null;
};

export const miniCard = styled.div((props: miniCardProps) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  borderRadius: 5,
  width: 200,
  height: 120,
  padding: 15,
  // 실험 게시물 썸네일 관련
  background: props.thumbnail
    ? `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${props.thumbnail})`
    : props.backgroundColor,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center center',
  backgroundSize: 'cover',
}));

export const infoWrap = styled.div({
  display: 'flex',
  flexDirection: 'column',

  '& > .post-title': {
    display: '-webkit-box',
    WebkitLineClamp: 2,
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
});

export const writerWrap = styled.div({
  marginBottom: 5,
});
