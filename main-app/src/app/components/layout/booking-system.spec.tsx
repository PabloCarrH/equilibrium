import { render } from '@testing-library/react';

import BookingSystem from './booking-system';

describe('BookingSystem', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<BookingSystem />);
    expect(baseElement).toBeTruthy();
  });
});
