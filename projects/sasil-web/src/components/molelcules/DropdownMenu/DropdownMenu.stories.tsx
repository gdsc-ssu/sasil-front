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
  onMenuDisplayToggle,
}: DropdownMenuProps) => (
  <DropdownMenu
    menuDisplayInfo={menuDisplayInfo}
    onMenuDisplayToggle={onMenuDisplayToggle}
  >
    {children}
  </DropdownMenu>
);

export const Default = Template.bind({});
Default.args = {
  menuDisplayInfo: {
    display: true,
    top: 100,
  },
  onMenuDisplayToggle: () => {},
  children: <div>Menu</div>,
};
