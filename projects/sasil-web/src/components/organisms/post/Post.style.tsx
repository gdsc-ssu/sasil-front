import styled from '@emotion/styled';
import { COLORS } from '@sasil/common';
import { MEDIA_QUERIES } from '@/constants/styles';

type miniCardProps = {
  backgroundColor: string;
  thumbnail: string | null;
};

export const MiniCard = styled.div((props: miniCardProps) => ({
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
  cursor: 'pointer',

  [`@media ${MEDIA_QUERIES.mobile}`]: {
    width: 140,
    height: 100,
    padding: 12,
  },
}));

export const InfoWrap = styled.div({
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

export const WriterWrap = styled.div({
  marginBottom: 5,
});

export const PostCardWrapper = styled.div({
  width: '330px',
  height: '280px',
  display: 'flex',
  flexDirection: 'column',
  borderRadius: '5px',
  backgroundColor: COLORS.grayscale.white,
  margin: '10px',
  cursor: 'pointer',

  [`@media ${MEDIA_QUERIES.mobile}`]: {
    width: '90%',
  },
});

export const PostCardContent = styled.div({
  width: '100%',
  height: '47%',
  display: 'flex',
  justifyContent: 'space-between',
  flexDirection: 'column',
  padding: '16px 32px 32px 32px',

  [`@media ${MEDIA_QUERIES.mobile}`]: {
    padding: '12px 16px 16px 16px',
  },
});
