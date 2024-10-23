import { render } from '@testing-library/react';

import ServicesCard from './services-card';

describe('ServicesCard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ServicesCard />);
    expect(baseElement).toBeTruthy();
  });
});
