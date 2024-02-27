import { render } from '@testing-library/react';

import UiCompRate from './ui-comp-rate';

describe('UiCompRate', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UiCompRate />);
    expect(baseElement).toBeTruthy();
  });
});
