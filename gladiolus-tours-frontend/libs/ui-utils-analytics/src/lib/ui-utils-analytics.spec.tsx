import { render } from '@testing-library/react';

import UiUtilsAnalytics from './ui-utils-analytics';

describe('UiUtilsAnalytics', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UiUtilsAnalytics />);
    expect(baseElement).toBeTruthy();
  });
});
