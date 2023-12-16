import { render } from '@testing-library/react';

import UiI18n from './ui-i18n';

describe('UiI18n', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UiI18n />);
    expect(baseElement).toBeTruthy();
  });
});
