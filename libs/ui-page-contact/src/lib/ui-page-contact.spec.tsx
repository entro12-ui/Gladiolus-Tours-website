import { render } from '@testing-library/react';

import UiPageContact from './ui-page-contact';

describe('UiPageContact', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UiPageContact />);
    expect(baseElement).toBeTruthy();
  });
});
