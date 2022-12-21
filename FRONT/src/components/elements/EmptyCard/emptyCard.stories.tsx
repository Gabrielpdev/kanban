import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { EmptyCard } from './index';

export default {
  title: 'Components/Elements/EmptyCard',
  component: EmptyCard,
} as ComponentMeta<typeof EmptyCard>;

export const Primary: ComponentStory<typeof EmptyCard> = () => {
  return <EmptyCard />;
};

Primary.storyName = 'Primary';
