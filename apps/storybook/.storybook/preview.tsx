import type { Preview } from '@storybook/react';
import React from 'react';
import { Wrapper } from 'shared';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
      backgrounds: {
        default: 'default',
        values: [
          {
            name: 'default',
            value: '#F5F6F8',
          },
          {
            name: 'light',
            value: '#ffffff',
          },
          {
            name: 'dark',
            value: '#050505',
          },
        ],
      },
    },
    nextjs: {
      appDirectory: true,
    },
  },

  decorators: [
    (Story) => (
      <Wrapper>
        <Story />
      </Wrapper>
    ),
  ],
};

export default preview;
