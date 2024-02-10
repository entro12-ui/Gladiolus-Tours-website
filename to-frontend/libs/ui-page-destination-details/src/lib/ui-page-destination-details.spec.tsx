import { render } from '@testing-library/react';

import UiPageDestinationDetails from './ui-page-destination-details';

describe('UiPageDestinationDetails', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UiPageDestinationDetails />);
    expect(baseElement).toBeTruthy();
  });
});
