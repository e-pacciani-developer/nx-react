import { render } from '@testing-library/react';

import FancyButton from './FancyButton';

describe('FancyButton', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FancyButton />);
    expect(baseElement).toBeTruthy();
  });
});
