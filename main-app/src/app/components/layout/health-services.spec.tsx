import { render } from '@testing-library/react';

import HealthServices from './health-services';

describe('HealthServices', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<HealthServices />);
    expect(baseElement).toBeTruthy();
  });
});
