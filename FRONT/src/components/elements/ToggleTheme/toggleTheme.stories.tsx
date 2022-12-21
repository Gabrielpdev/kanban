import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ToggleTheme } from './index';

export default {
  title: 'Components/Elements/ToggleTheme',
  component: ToggleTheme,
} as ComponentMeta<typeof ToggleTheme>;

export const Primary: ComponentStory<typeof ToggleTheme> = () => {
  return <ToggleTheme />;
};

Primary.storyName = 'Primary';
