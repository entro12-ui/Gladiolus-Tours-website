import { render } from '@testing-library/react';

import UiPageDestinations from './ui-page-destinations';

describe('UiPageDestinations', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UiPageDestinations />);
    expect(baseElement).toBeTruthy();
  });
});
