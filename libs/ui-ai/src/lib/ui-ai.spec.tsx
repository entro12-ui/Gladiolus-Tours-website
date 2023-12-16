import { render } from '@testing-library/react';

import UiAi from './ui-ai';

describe('UiAi', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UiAi />);
    expect(baseElement).toBeTruthy();
  });
});
