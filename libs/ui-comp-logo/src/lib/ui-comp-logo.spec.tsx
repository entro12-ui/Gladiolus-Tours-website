import { render } from '@testing-library/react';

import UiCompLogo from './ui-comp-logo';

describe('UiCompLogo', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UiCompLogo />);
    expect(baseElement).toBeTruthy();
  });
});
