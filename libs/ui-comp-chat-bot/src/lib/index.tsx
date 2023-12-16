import styles from './ui-comp-chat-bot.module.css';

/* eslint-disable-next-line */
export interface UiCompChatBotProps {}

export function Index(props: UiCompChatBotProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to UiCompChatBot!</h1>
    </div>
  );
}

export default Index;
