import { render } from '@testing-library/react';

import UiPageAccomodations from './ui-page-accomodations';

describe('UiPageAccomodations', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UiPageAccomodations />);
    expect(baseElement).toBeTruthy();
  });
});
