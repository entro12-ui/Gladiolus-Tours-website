import { render } from '@testing-library/react';

import UiPageParkDetails from './ui-page-park-details';

describe('UiPageParkDetails', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UiPageParkDetails />);
    expect(baseElement).toBeTruthy();
  });
});
