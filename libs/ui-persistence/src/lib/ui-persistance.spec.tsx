import { render } from '@testing-library/react';

import UiPersistance from './ui-persistance';

describe('UiPersistance', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UiPersistance />);
    expect(baseElement).toBeTruthy();
  });
});
