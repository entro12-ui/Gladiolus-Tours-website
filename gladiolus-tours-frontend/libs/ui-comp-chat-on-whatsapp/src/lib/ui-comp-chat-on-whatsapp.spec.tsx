import { render } from '@testing-library/react';

import UiCompChatOnWhatsapp from './ui-comp-chat-on-whatsapp';

describe('UiCompChatOnWhatsapp', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UiCompChatOnWhatsapp />);
    expect(baseElement).toBeTruthy();
  });
});
