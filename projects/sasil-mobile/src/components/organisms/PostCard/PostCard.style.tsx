import styled from '@emotion/native';
import { COLORS } from '@sasil/common';

export const postWrap = styled.ImageBackground({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  borderRadius: 5,
  width: 140,
  height: 100,
  backgroundColor: COLORS.grayscale.white,
  padding: 12,
  overflow: 'hidden',
});

// 실험 게시물 이미지 필터
export const filter = styled.View({
  position: 'absolute',
  width: 140,
  height: 100,
  borderRadius: 5,
  backgroundColor: 'rgba(0,0,0,0.5)',
  padding: 12,
});

export const infoWrap = styled.View({
  display: 'flex',
  flexDirection: 'column',
});

export const writerWrap = styled.View({
  marginBottom: 5,
});
