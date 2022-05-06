import { ComponentMeta, ComponentStory } from '@storybook/react';
import AuthTemplate from '.';

export default {
  title: 'components/templates/auth/AuthTemplate',
  component: AuthTemplate,
} as ComponentMeta<typeof AuthTemplate>;

const Template: ComponentStory<typeof AuthTemplate> = () => <AuthTemplate />;

export const Default = Template.bind({});
