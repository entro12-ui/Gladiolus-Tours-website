import { render } from '@testing-library/react';

import UiPageItineraries from './ui-page-itineraries';

describe('UiPageItineraries', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UiPageItineraries />);
    expect(baseElement).toBeTruthy();
  });
});
