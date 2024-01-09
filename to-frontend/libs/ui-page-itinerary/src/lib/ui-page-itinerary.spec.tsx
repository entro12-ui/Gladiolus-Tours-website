import { render } from '@testing-library/react';

import UiPageItinerary from './ui-page-itinerary';

describe('UiPageItinerary', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UiPageItinerary />);
    expect(baseElement).toBeTruthy();
  });
});
