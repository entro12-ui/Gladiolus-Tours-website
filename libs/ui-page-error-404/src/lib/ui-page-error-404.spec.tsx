import { render } from '@testing-library/react';

import UiPageError404 from './ui-page-error-404';

describe('UiPageError404', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UiPageError404 />);
    expect(baseElement).toBeTruthy();
  });
});
