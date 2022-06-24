import { CategoryType } from '@sasil/common';
import CategoryBox from '@/components/molelcules/CategoryBox';
import * as styles from './PostHeader.style';

export interface PostHeaderProps {
  /** 썸네일 URL */
  thumbnail?: string | null;
  /** 카테고리 이름 */
  categories: CategoryType[] | [];
}

const PostHeader = ({ thumbnail, categories }: PostHeaderProps) => {
  const backgroundImg = thumbnail ?? ''; // TODO: 썸네일 없을 떄 기본 이미지

  return (
    <styles.StyledPostHeader backgroundImg={backgroundImg}>
      <styles.CategoryWrapper>
        {categories.map(
          (category, idx) =>
            idx < 3 && (
              <CategoryBox
                key={category.id}
                name={category.name}
                isWithBackground={!!thumbnail}
              />
            ),
        )}
      </styles.CategoryWrapper>
    </styles.StyledPostHeader>
  );
};

export default PostHeader;
