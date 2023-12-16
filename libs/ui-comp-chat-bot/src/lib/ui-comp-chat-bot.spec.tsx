import { render } from '@testing-library/react';

import UiCompChatBot from './ui-comp-chat-bot';

describe('UiCompChatBot', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UiCompChatBot />);
    expect(baseElement).toBeTruthy();
  });
});
