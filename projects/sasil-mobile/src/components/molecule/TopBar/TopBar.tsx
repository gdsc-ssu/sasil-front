import { useCallback } from 'react';
import { Pressable, PressableStateCallbackType } from 'react-native';
import Left from '@/assets/icons/Left';
import { COLORS } from '@sasil/common';
import * as styles from './TopBar.style';

interface TopBarProps {
  backgroundColor?: string;
  rightComponent?: JSX.Element;
  onBackPress?: () => void;
}

const TopBar = ({
  backgroundColor,
  rightComponent,
  onBackPress,
}: TopBarProps) => {
  const renderBackButton = useCallback(
    ({ pressed }: PressableStateCallbackType) => (
      <Left
        width={24}
        height={24}
        color={pressed ? COLORS.primary.pressed : COLORS.primary.normal}
      />
    ),
    [],
  );
  return (
    <styles.Container backgroundColor={backgroundColor}>
      <Pressable onPress={onBackPress}>{renderBackButton}</Pressable>
      {rightComponent ?? <styles.EmptyBox />}
    </styles.Container>
  );
};

export default TopBar;
