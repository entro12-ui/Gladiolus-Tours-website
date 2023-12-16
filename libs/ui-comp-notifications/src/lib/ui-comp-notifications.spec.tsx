import { render } from '@testing-library/react';

import UiCompNotifications from './ui-comp-notifications';

describe('UiCompNotifications', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UiCompNotifications />);
    expect(baseElement).toBeTruthy();
  });
});
