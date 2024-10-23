import { render } from '@testing-library/react';

import GeriatricCenter from './geriatric-center';

describe('GeriatricCenter', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<GeriatricCenter />);
    expect(baseElement).toBeTruthy();
  });
});
