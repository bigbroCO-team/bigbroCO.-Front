import ImgDisplay from '.';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ImgDisplay> = {
  component: ImgDisplay,
  args: {
    ImgList: [],
  },
};

export default meta;

type Story = StoryObj<typeof ImgDisplay>;

export const Primary: Story = {};
