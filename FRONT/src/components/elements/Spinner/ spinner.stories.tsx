import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Spinner } from './index';

export default {
  title: 'Components/Elements/Spinner',
  component: Spinner,
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['sm', 'md', 'lg'],
      },
    },
  },
  args: {
    size: 'md',
  },
} as ComponentMeta<typeof Spinner>;

export const Primary: ComponentStory<typeof Spinner> = (args) => {
  return <Spinner {...args} />;
};

Primary.storyName = 'Primary';
