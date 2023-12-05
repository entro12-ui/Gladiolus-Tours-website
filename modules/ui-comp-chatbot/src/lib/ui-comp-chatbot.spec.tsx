import { render } from '@testing-library/react';

import UiCompChatbot from './ui-comp-chatbot';

describe('UiCompChatbot', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UiCompChatbot />);
    expect(baseElement).toBeTruthy();
  });
});
