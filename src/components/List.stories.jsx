import React from 'react';

import {List} from './List';

export default {
  title: 'Example/List',
  component: List,
  argTypes: {
    backgroundColor: {control: 'color'},
  },
};

const Template = (args) => <List {...args} />;

export const Circle = Template.bind({});
Circle.args = {
  type: 'circle',
  title: true,
};

export const Square = Template.bind({});
Square.args = {
  type: 'square',
  title: false,
};
