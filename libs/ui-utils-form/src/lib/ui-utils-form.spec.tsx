import { render } from '@testing-library/react';

import UiUtilsForm from './ui-utils-form';

describe('UiUtilsForm', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UiUtilsForm />);
    expect(baseElement).toBeTruthy();
  });
});
