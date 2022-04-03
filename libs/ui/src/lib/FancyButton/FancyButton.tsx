import { Button } from '@mui/material';

/* eslint-disable-next-line */
export interface FancyButtonProps {
  variant: 'text' | 'outlined' | 'contained';
  label: string;
  color: any;
}

export function FancyButton({ variant, label, color }: FancyButtonProps) {
  return (
    <Button variant={variant} data-test-id="pippo" color={color}>
      {label}
    </Button>
  );
}

export default FancyButton;
