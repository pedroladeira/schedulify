import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Schedule } from '../../src/Schedule';
import { ScheduleView } from '../../src/interfaces/types';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Schedule',
  component: Schedule,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Schedule>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Schedule> = (args) => <Schedule {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/html/writing-stories/args
Default.args = {
  view: ScheduleView.Week
};
