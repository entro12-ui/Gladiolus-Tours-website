import styles from './ui-comp-chat-on-whatsapp.module.css';

/* eslint-disable-next-line */
export interface UiCompChatOnWhatsappProps {}

export function UiCompChatOnWhatsapp(props: UiCompChatOnWhatsappProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to UiCompChatOnWhatsapp!</h1>
    </div>
  );
}

export default UiCompChatOnWhatsapp;
