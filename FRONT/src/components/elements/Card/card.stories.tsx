import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Card } from './index';

export default {
  title: 'Components/Elements/Card',
  component: Card,

  args: {
    defaultCard: {
      id: 'string',
      titulo: 'Titulo',
      conteudo: 'Conteudo',
      lista: 'ToDo',
    },
  },
} as ComponentMeta<typeof Card>;

export const Primary: ComponentStory<typeof Card> = (args) => {
  return <Card {...args} />;
};

Primary.storyName = 'Primary';
