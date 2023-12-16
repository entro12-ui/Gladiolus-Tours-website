import { render } from '@testing-library/react';

import UiCompHeader from './ui-comp-header';

describe('UiCompHeader', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UiCompHeader />);
    expect(baseElement).toBeTruthy();
  });
});
