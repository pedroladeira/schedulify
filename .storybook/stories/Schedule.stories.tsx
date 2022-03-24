import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Schedule } from '../../src/Schedule';
import { ScheduleView } from '../../src/interfaces/types';
import { uniqueId } from '../../src/helpers/UniqueId';

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
  view: ScheduleView.Week,
  events: [{
    //   title: 'Hello',
    //   startDate: (() => {
    //     const dt = new Date(); dt.setHours(10); return dt;
    //   })(),
    //   endDate: (() => {
    //     const dt = new Date(); dt.setHours(13); return dt;
    //   })(),
    //   onDblClick: (ev) => {
    //     console.log('eventID: ', ev.id);
    //   },
    // }, {
    //   title: 'HelloX',
    //   startDate: (() => {
    //     const dt = new Date(); dt.setHours(12); return dt;
    //   })(),
    //   endDate: (() => {
    //     const dt = new Date(); dt.setHours(13); return dt;
    //   })(),
    //   onDblClick: (ev) => {
    //     console.log('eventID: ', ev.id);
    //   },
    // }, {
    //   title: 'Hello2',
    //   startDate: (() => {
    //     const dt = new Date(); dt.setHours(9); return dt;
    //   })(),
    //   endDate: (() => {
    //     const dt = new Date(); dt.setHours(11); return dt;
    //   })(),
    //   onDblClick: (ev) => {
    //     console.log('eventID: ', ev.id);
    //   },
    // }, {
    //   title: 'Hello3',
    //   startDate: (() => {
    //     const dt = new Date(); dt.setHours(15); return dt;
    //   })(),
    //   endDate: (() => {
    //     const dt = new Date(); dt.setHours(16); return dt;
    //   })(),
    //   onDblClick: (ev) => {
    //     console.log('eventID: ', ev.id);
    //   },
    // }, {
    title: 'Segunda',
    startDate: (() => {
      const dt = new Date(); dt.setDate(20); dt.setHours(10); return dt;
    })(),
    endDate: (() => {
      const dt = new Date(); dt.setDate(20); dt.setHours(11); return dt;
    })(),
    onDblClick: (ev) => {
      console.log('eventID: ', ev.id);
    },
    onChange: (date: Date) => {
      console.log('onChange', date);
    },
  },
    // }, {
    //   title: 'Terça',
    //   startDate: (() => {
    //     const dt = new Date(); dt.setDate(21); dt.setHours(10); return dt;
    //   })(),
    //   endDate: (() => {
    //     const dt = new Date(); dt.setDate(21); dt.setHours(11); return dt;
    //   })(),
    //   onDblClick: (ev) => {
    //     console.log('eventID: ', ev.id);
    //   },
    //   onChange: (date: Date) => {
    //     console.log('onChange', date);
    //   },
    // }, {
    //   title: 'Quarta',
    //   startDate: (() => {
    //     const dt = new Date(); dt.setDate(22); dt.setHours(10); return dt;
    //   })(),
    //   endDate: (() => {
    //     const dt = new Date(); dt.setDate(22); dt.setHours(11); return dt;
    //   })(),
    //   onDblClick: (ev) => {
    //     console.log('eventID: ', ev.id);
    //   },
    //   onChange: (date: Date) => {
    //     console.log('onChange', date);
    //   },
    // }, {
    //   title: 'Quinta',
    //   startDate: (() => {
    //     const dt = new Date(); dt.setDate(23); dt.setHours(10); return dt;
    //   })(),
    //   endDate: (() => {
    //     const dt = new Date(); dt.setDate(23); dt.setHours(11); return dt;
    //   })(),
    //   onDblClick: (ev) => {
    //     console.log('eventID: ', ev.id);
    //   },
    //   onChange: (date: Date) => {
    //     console.log('onChange', date);
    //   },
    // }, {
    //   title: 'Sexta',
    //   startDate: (() => {
    //     const dt = new Date(); dt.setDate(24); dt.setHours(10); dt.setMinutes(40); return dt;
    //   })(),
    //   endDate: (() => {
    //     const dt = new Date(); dt.setDate(24); dt.setHours(11); return dt;
    //   })(),
    //   onDblClick: (ev) => {
    //     console.log('eventID: ', ev.id);
    //   },
    //   onChange: (date: Date) => {
    //     console.log('onChange', date);
    //   },
    // }, {
    //   title: 'Sábado',
    //   startDate: (() => {
    //     const dt = new Date(); dt.setDate(25); dt.setHours(10); dt.setMinutes(50); return dt;
    //   })(),
    //   endDate: (() => {
    //     const dt = new Date(); dt.setDate(25); dt.setHours(11); return dt;
    //   })(),
    //   onDblClick: (ev) => {
    //     console.log('eventID: ', ev.id);
    //   },
    //   onChange: (date: Date) => {
    //     console.log('onChange', date);
    //   },
    // }
  ]
};
