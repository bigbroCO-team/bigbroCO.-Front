import ImgDisplay from '.';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ImgDisplay> = {
  component: ImgDisplay,
  args: {
    imgList: [
      'https://github.com/bigbroCO-team/bigbroCO.-Front/assets/128475660/c316d767-019f-4006-98bc-e8bfe66c420f',
      'https://github.com/bigbroCO-team/bigbroCO.-Front/assets/128475660/4ce7e7b5-a41d-46c1-83c5-776953575143',
      'https://github.com/bigbroCO-team/bigbroCO.-Front/assets/128475660/e378b24f-a3bf-40f9-984d-9a37f5bb843a',
      'https://github.com/bigbroCO-team/bigbroCO.-Front/assets/128475660/0b8645cb-163d-45ef-8773-fc40cc594816',
      'https://github.com/bigbroCO-team/bigbroCO.-Front/assets/128475660/7a3a69e2-0e67-4ea8-af23-a94336541ccf',
      'https://github.com/bigbroCO-team/bigbroCO.-Front/assets/128475660/47871001-7ab5-4f24-933f-7e83257a1a38',
    ],
  },
};

export default meta;

type Story = StoryObj<typeof ImgDisplay>;

export const Primary: Story = {};
