import { render } from '@testing-library/react';

import UiCompRateStar from './ui-comp-rate-star';

describe('UiCompRateStar', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UiCompRateStar />);
    expect(baseElement).toBeTruthy();
  });
});
