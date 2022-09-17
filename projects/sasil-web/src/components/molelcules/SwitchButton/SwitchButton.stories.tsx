import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import SwitchButton, { SwitchButtonProps } from './SwitchButton';

export default {
  title: 'components/molecule/SwitchButton',
  component: SwitchButton,
} as ComponentMeta<typeof SwitchButton>;

const Template: ComponentStory<typeof SwitchButton> = ({
  initRight,
  leftLabel,
  rightLabel,
  onLeftMove,
  onRightMove,
}: SwitchButtonProps) => (
  <SwitchButton
    initRight={initRight}
    leftLabel={leftLabel}
    rightLabel={rightLabel}
    onLeftMove={onLeftMove}
    onRightMove={onRightMove}
  />
);

export const Default = Template.bind({});
Default.args = {
  initRight: false,
  leftLabel: '의뢰',
  rightLabel: '실험',
  onLeftMove: () => console.log('left'),
  onRightMove: () => console.log('right'),
};
