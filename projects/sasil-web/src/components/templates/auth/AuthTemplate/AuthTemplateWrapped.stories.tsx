import { ComponentMeta, ComponentStory } from '@storybook/react';
import AuthTemplate from '.';
import AuthTemplateWrapped from './AuthTemplateWrapped';

export default {
  title: 'components/templates/auth/AuthTemplateWrapped',
  component: AuthTemplateWrapped,
} as ComponentMeta<typeof AuthTemplateWrapped>;

const Template: ComponentStory<typeof AuthTemplate> = () => (
  <AuthTemplateWrapped />
);

export const Default = Template.bind({});
