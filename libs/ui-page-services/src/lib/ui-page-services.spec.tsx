import { render } from '@testing-library/react';

import UiPageServices from './ui-page-services';

describe('UiPageServices', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UiPageServices />);
    expect(baseElement).toBeTruthy();
  });
});
