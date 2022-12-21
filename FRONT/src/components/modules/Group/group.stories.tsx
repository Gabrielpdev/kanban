import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Group } from './index';
import { DragDropContext } from 'react-beautiful-dnd';

export default {
  title: 'Components/Modules/Group',
  component: Group,
  args: {
    data: {
      title: 'Doing',
      list: [],
    },
  },
} as ComponentMeta<typeof Group>;

export const Primary: ComponentStory<typeof Group> = (args) => {
  return (
    <DragDropContext onDragEnd={() => {}}>
      <Group {...args} />
    </DragDropContext>
  );
};

Primary.storyName = 'Primary';
