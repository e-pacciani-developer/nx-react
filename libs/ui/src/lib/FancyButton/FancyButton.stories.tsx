import { Story, Meta } from '@storybook/react';
import { FancyButton } from './FancyButton';

export default {
  component: FancyButton,
  title: 'FancyButton',
  argTypes: {
    variant: {
      options: ['contained', 'text', 'outlined'],
      control: { type: 'radio' },
    },
    color: {
      options: ['primary', 'neutral', 'beautiful'],
      control: { type: 'radio' },
    },
  },
} as Meta;

const Template: Story = ({ variant, label, color }) => (
  <FancyButton variant={variant} label={label} color={color} />
);

export const Primary = Template.bind({});
Primary.args = {
  label: 'Ciao',
  variant: 'contained',
  color: 'primary',
};
