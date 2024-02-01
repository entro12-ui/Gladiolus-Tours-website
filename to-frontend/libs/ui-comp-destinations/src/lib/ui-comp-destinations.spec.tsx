import { render } from '@testing-library/react';

import UiCompDestinations from './ui-comp-destinations';

describe('UiCompDestinations', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UiCompDestinations />);
    expect(baseElement).toBeTruthy();
  });
});
