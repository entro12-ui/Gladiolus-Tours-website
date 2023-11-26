import { render } from '@testing-library/react';

import UiCompRouterLazyFallback from './ui-comp-router-lazy-fallback';

describe('UiCompRouterLazyFallback', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UiCompRouterLazyFallback />);
    expect(baseElement).toBeTruthy();
  });
});
