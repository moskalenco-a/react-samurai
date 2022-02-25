import { addMessageAction } from '../../store/dialogsReducer';
import styles from './Dialogs.module.css';

const DialogItem = (props) => {
  // props.user.name, props.user.id
  return (
    <div className={styles.dialogItem}>
      {props.user}
    </div>
  );
}

const Message = (props) => {
  // props.id, props.text, props.date, props.read
  return (
    <div className={styles.message}>
      {props.text}
      <div className={styles.date}>12.01.2022 05:00</div>
    </div>
  );
}

const Dialogs = (props) => {
  let messageText;
  const onSendClick = () => {
    props.addMessage(messageText);
  }

  const onChange = (e) => {
    messageText = e.target.value;
  }

  // const users = props.dialogsPage.dialogs;
  const messages = props.dialogsPage.chat;
  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogsItems}>
        {/* {users.map(user => (<DialogItem user={user} />))} */}
      </div>
      <div className={styles.messages}>
        {messages.map(message => (<Message text={message} />))}
        <textarea onChange={onChange}></textarea>
        <button onClick={onSendClick}>+</button>
      </div>
    </div>
  );
};

export default Dialogs;