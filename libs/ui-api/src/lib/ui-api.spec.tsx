import { render } from '@testing-library/react';

import UiApi from './ui-api';

describe('UiApi', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UiApi />);
    expect(baseElement).toBeTruthy();
  });
});
