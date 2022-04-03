import { Story, Meta } from '@storybook/react';
import { FancyButton } from './FancyButton';
import { muiTheme } from 'storybook-addon-material-ui';
import { theme } from '../../theme';

export const decorators = [muiTheme([theme])];

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
  parameters: {
    layout: 'centered',
  },
} as Meta;

const Template: Story = ({ variant, label, color }) => (
  <FancyButton variant={variant} label={label} color={color} />
);

/**
 * This is a primary bujtton
 */
export const Primary = Template.bind({});
Primary.args = {
  label: 'Primario',
  variant: 'contained',
  color: 'primary',
};
Primary.storyName = 'Bottone primario';

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Secondario',
  variant: 'contained',
  color: 'secondary',
};
