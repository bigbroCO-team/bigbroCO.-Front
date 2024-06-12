import ProductDetailInfo from '.';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ProductDetailInfo> = {
  component: ProductDetailInfo,
  args: {
    productName: 'Big Bro T-shirt',
    productPercent: 15,
    usuallyPrice: 30000,
  },
};

export default meta;

type Story = StoryObj<typeof ProductDetailInfo>;

export const Sale: Story = {
  args: {
    isSale: true,
  },
};

export const NotSale: Story = {
  args: {
    isSale: false,
  },
};
