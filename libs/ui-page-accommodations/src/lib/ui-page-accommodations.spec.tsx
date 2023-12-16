import { render } from '@testing-library/react';

import UiPageAccommodations from './ui-page-accommodations';

describe('UiPageAccommodations', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UiPageAccommodations />);
    expect(baseElement).toBeTruthy();
  });
});
