import PaymentInfo from '.';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof PaymentInfo> = {
  component: PaymentInfo,
  args: {
    productPrice: '60000',
    discountPrice: '9000',
    deliveryPrice: '3000',
    requiredPrice: '9000',
    isFreeDelivery: true,
    totalPrice: '54000',
  },
};

export default meta;

type Story = StoryObj<typeof PaymentInfo>;

export const Primary: Story = {};
