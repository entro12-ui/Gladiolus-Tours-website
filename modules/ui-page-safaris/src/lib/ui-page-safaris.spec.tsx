import { render } from '@testing-library/react';

import UiPageSafaris from './ui-page-safaris';

describe('UiPageSafaris', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UiPageSafaris />);
    expect(baseElement).toBeTruthy();
  });
});
