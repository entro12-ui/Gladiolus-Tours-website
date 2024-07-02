import { render } from '@testing-library/react';

import UiCompBookingFormInquiry from './ui-comp-booking-form-inquiry';

describe('UiCompBookingFormInquiry', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UiCompBookingFormInquiry />);
    expect(baseElement).toBeTruthy();
  });
});
