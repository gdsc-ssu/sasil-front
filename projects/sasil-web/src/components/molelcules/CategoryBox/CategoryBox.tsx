import { COLORS, TEXT_STYLE_NAME } from '@sasil/common';
import StyledLink from '@/components/atoms/StyledLink';
import * as styles from './CategoryBox.style';

export interface CategoryBoxProps {
  /** 컴포넌트의 전체 색상 (색 지정은 선택 사항이며, 기본 값은 primary 색) */
  isWithBackground?: boolean;
  /** 카테고리 이름 */
  name: string;
  /** 컴포넌트로 생성할 요소의 클래스명 */
  className?: string;
}

/**
 * 카테고리 이름을 나타내는 컴포넌트
 */
const CategoryBox = ({
  isWithBackground,
  name,
  className,
}: CategoryBoxProps) => {
  const color = isWithBackground
    ? COLORS.grayscale.black
    : COLORS.primary.normal;

  return (
    <styles.StyledCategoryBox
      isWithBackground={isWithBackground}
      className={className}
    >
      <StyledLink
        url=""
        color={color}
        textStyleName={TEXT_STYLE_NAME.body2R}
        ellipsis
      >
        #{name}
      </StyledLink>
    </styles.StyledCategoryBox>
  );
};

export default CategoryBox;
