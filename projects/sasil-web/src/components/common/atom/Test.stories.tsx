import { ComponentStory, ComponentMeta } from '@storybook/react';
import Test from '@/components/common/atom/Test';

export default {
  title: 'components/common/atom/Test',
  component: Test,
} as ComponentMeta<typeof Test>;

export const Default: ComponentStory<typeof Test> = () => <Test />;
