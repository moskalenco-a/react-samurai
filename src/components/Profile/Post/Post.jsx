import styles from './Post.module.css';

const Post = (props) => {
  return (
    <div className={styles.item}>
      <p className={styles.date}>{props.date}</p>
      <p className={styles.text}>{props.text}</p>
    </div>
  );
};

export default Post;