import { render } from '@testing-library/react';

import UiCompImages from './ui-comp-images';

describe('UiCompImages', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UiCompImages />);
    expect(baseElement).toBeTruthy();
  });
});
