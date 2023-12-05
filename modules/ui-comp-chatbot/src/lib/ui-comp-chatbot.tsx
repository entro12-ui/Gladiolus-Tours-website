import styles from './ui-comp-chatbot.module.css';

/* eslint-disable-next-line */
export interface UiCompChatbotProps {}

export function UiCompChatbot(props: UiCompChatbotProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to UiCompChatbot!</h1>
    </div>
  );
}

export default UiCompChatbot;
