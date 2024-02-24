import { render } from '@testing-library/react';

import UiCompActivities from './ui-comp-activities';

describe('UiCompActivities', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UiCompActivities />);
    expect(baseElement).toBeTruthy();
  });
});
