import { render } from '@testing-library/react';

import UiPageAboutUs from './ui-page-about-us';

describe('UiPageAboutUs', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UiPageAboutUs />);
    expect(baseElement).toBeTruthy();
  });
});
