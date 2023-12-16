import { render } from '@testing-library/react';

import UiCompBanner from './ui-comp-banner';

describe('UiCompBanner', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UiCompBanner />);
    expect(baseElement).toBeTruthy();
  });
});
