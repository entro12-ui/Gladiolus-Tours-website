import { render } from '@testing-library/react';

import UiCompItinerary from './ui-comp-itinerary';

describe('UiCompItinerary', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UiCompItinerary />);
    expect(baseElement).toBeTruthy();
  });
});
