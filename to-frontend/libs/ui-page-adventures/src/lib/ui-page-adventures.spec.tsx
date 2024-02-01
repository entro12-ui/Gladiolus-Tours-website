import { render } from '@testing-library/react';

import UiPageAdventures from './ui-page-adventures';

describe('UiPageAdventures', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UiPageAdventures />);
    expect(baseElement).toBeTruthy();
  });
});
