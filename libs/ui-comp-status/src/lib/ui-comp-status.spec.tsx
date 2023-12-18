import { render } from '@testing-library/react';

import UiCompStatus from './ui-comp-status';

describe('UiCompStatus', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UiCompStatus />);
    expect(baseElement).toBeTruthy();
  });
});
