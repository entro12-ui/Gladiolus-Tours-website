import { render } from '@testing-library/react';

import UiCompSafaris from './ui-comp-safaris';

describe('UiCompSafaris', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UiCompSafaris />);
    expect(baseElement).toBeTruthy();
  });
});
