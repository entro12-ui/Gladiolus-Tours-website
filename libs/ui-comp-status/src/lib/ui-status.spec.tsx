import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import { UiStatus } from './ui-status';

describe('UiStatus', () => {
  test("Renders a green box with 'Active' text when status is 'active'/'true' ", () => {
    const { getByText } = render(<UiStatus status={true} />);
    const activeBox = getByText('Active');
    expect(activeBox).toBeTruthy();
    expect(activeBox).toHaveProperty('class:bg-green-50');
  });

  test("Renders a red box with 'Disabled' text when status is 'inactive'/'false'", () => {
    const { getByText } = render(<UiStatus status={false} />);
    const inactiveBox = getByText('Disabled');
    expect(inactiveBox).toBeTruthy();
    expect(inactiveBox).toHaveProperty('class:bg-red-50');
  });
});
