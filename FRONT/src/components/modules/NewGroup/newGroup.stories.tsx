import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { NewGroup } from './index';

export default {
  title: 'Components/Modules/NewGroup',
  component: NewGroup,
} as ComponentMeta<typeof NewGroup>;

export const Primary: ComponentStory<typeof NewGroup> = () => {
  return <NewGroup />;
};

Primary.storyName = 'Primary';
