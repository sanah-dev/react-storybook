import React from 'react';

import {DataList} from './DataList';

export default {
  title: 'Example/DataList',
  component: DataList,
};

const Template = (args) => <DataList {...args} />;

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
