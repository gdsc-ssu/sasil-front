import styled from '@emotion/styled';
import { TEXT_STYLES_MOBILE, TEXT_STYLE_NAME } from '@sasil/common';
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
  // TODO StyledText 반응형 적용시 삭제 바람!
  [`@media ${MEDIA_QUERIES.mobile}`]: {
    '& > .post-title': {
      fontSize: TEXT_STYLES_MOBILE[TEXT_STYLE_NAME.body2R].fontSize,
      fontWeight: TEXT_STYLES_MOBILE[TEXT_STYLE_NAME.body2R].fontWeight,
      lineHeight: `${TEXT_STYLES_MOBILE[TEXT_STYLE_NAME.body2R].lineHeight}px`,
    },
  },
});

export const WriterWrap = styled.div({
  marginBottom: 5,
});
