import { render } from '@testing-library/react';

import UiPageLandingPage from './ui-page-landing-page';

describe('UiPageLandingPage', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UiPageLandingPage />);
    expect(baseElement).toBeTruthy();
  });
});
