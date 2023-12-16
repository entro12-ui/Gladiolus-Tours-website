import { render } from '@testing-library/react';

import UiCompScrollToTop from './ui-comp-scroll-to-top';

describe('UiCompScrollToTop', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UiCompScrollToTop />);
    expect(baseElement).toBeTruthy();
  });
});
