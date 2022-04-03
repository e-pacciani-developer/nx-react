import { Button } from '@mui/material';

/* eslint-disable-next-line */
export interface FancyButtonProps {
  variant: 'text' | 'outlined' | 'contained';
  label: string;
  color: any;
}

/**
 * This is a fancy button
 * @param param0
 * @returns
 */
export function FancyButton({ variant, label, color }: FancyButtonProps) {
  return (
    <Button variant={variant} data-test-id="pippo" color={color}>
      {label}
    </Button>
  );
}

export default FancyButton;
