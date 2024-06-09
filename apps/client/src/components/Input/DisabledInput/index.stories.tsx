import DisabledInput from '.';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof DisabledInput> = {
  component: DisabledInput,
  args: {
    name: 'name',
    value: '김철수',
  },
};

export default meta;

type Story = StoryObj<typeof DisabledInput>;

export const Primary: Story = {};
