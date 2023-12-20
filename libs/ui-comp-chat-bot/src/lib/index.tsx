import { Chatbot } from 'react-chatbot-kit';
import { ActionProvider } from './action-provider';
import { MessageParser } from './message-parser';
import { config } from './config';

export const GladiolusChatBot = () => {
  return (
    <Chatbot
      actionProvider={ActionProvider}
      messageParser={MessageParser}
      config={config}
    />
  );
};
