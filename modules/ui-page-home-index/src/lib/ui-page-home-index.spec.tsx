import { render } from '@testing-library/react';

import UiPageHomeIndex from './ui-page-home-index';

describe('UiPageHomeIndex', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UiPageHomeIndex />);
    expect(baseElement).toBeTruthy();
  });
});
