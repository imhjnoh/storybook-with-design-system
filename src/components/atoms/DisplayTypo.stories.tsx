import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {DisplayTypo} from './DisplayTypo';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Typography/DisplayTypo',
  component: DisplayTypo,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    color: { control: 'color' },
  },
} as ComponentMeta<typeof DisplayTypo>;
const Template: ComponentStory<typeof DisplayTypo> = (args) => <DisplayTypo {...args} />;

export const Large = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Large.args = {
  size: 'Large'
};