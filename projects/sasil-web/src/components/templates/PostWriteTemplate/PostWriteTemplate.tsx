import { useRouter } from 'next/router';
import PostEditorWrapped from '@/components/organisms/PostEditor/PostEditorWrapped';
import NavBar from '@/components/templates/NavBar';
import PostDetailIcon from '@/assets/icons/PostDetail.svg';
import StyledText from '@/components/atoms/StyledText';
import { COLORS, TEXT_STYLE_NAME } from '@sasil/common';
import * as styles from './PostWriteTemplate.style';

const PostWriteTemplate = () => {
  const router = useRouter();
  const { type } = router.query;
  const label = type === 'request' ? '의뢰하기' : '실험하기';

  return (
    <NavBar focusType="main">
      <styles.Template>
        <styles.EditorWrap>
          <PostDetailIcon />
          <StyledText
            textStyleName={TEXT_STYLE_NAME.title}
            color={COLORS.grayscale.black}
            className="label-text"
          >
            {label}
          </StyledText>
          <PostEditorWrapped type={type as 'request' | 'experiment'} />
        </styles.EditorWrap>
      </styles.Template>
    </NavBar>
  );
};

export default PostWriteTemplate;
