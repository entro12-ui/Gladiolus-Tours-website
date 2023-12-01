import { render } from '@testing-library/react';

import UiCompPageHelmet from './ui-comp-page-helmet';

describe('UiCompPageHelmet', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UiCompPageHelmet />);
    expect(baseElement).toBeTruthy();
  });
});
