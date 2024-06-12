import ProductDetailInfo from '.';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ProductDetailInfo> = {
  component: ProductDetailInfo,
  args: {
    productName: 'Big Bro T-shirt',
    productPercent: 15,
    productPrice: 25000,
    usuallyPrice: 30000,
  },
};

export default meta;

type Story = StoryObj<typeof ProductDetailInfo>;

export const Primary: Story = {};
