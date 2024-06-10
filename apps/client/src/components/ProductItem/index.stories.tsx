import ProductItem from '.';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ProductItem> = {
  component: ProductItem,
  args: {
    productImgUrl: 'name',
    discountPercent: '20',
    price: '25000',
    productName: 'Big Bro T-shirt',
  },
};

export default meta;

type Story = StoryObj<typeof ProductItem>;

export const Primary: Story = {};
