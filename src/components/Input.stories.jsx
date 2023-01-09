import React from 'react';

import {Input} from './Input';

export default {
  title: 'Example/Input',
  component: Input,
  argTypes: {
    backgroundColor: {control: 'color'},
  },
};

const Template = (args) => <Input {...args} />;

export const Text = Template.bind({});
Text.args = {
  type: 'text',
};

export const Password = Template.bind({});
Password.args = {
  type: 'password',
};

export const Number = Template.bind({});
Number.args = {
  type: 'number',
};

export const Checkbox = Template.bind({});
Checkbox.args = {
  type: 'checkbox',
};

export const Date = Template.bind({});
Date.args = {
  type: 'date',
};
