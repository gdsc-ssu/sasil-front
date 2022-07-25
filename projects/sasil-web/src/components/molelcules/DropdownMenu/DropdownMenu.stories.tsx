import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import DropdownMenu, { DropdownMenuProps } from './DropdownMenu';

export default {
  title: 'components/molecule/DropdownMenu',
  component: DropdownMenu,
} as ComponentMeta<typeof DropdownMenu>;

const Template: ComponentStory<typeof DropdownMenu> = ({
  menuDisplayInfo,
  children,
}: DropdownMenuProps) => (
  <DropdownMenu menuDisplayInfo={menuDisplayInfo}>{children}</DropdownMenu>
);

export const Default = Template.bind({});
Default.args = {
  menuDisplayInfo: {
    display: true,
    top: 100,
    left: 100,
  },
  children: <div>Menu</div>,
};
