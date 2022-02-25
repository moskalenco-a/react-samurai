import styles from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
  return (
    <div className={styles["personal-info"]}>
      <div className={styles.avatar} />
      <div className={styles.info}>
        <h1>{props.name}</h1>
        <p className={styles.first}>Location: {props.location}</p>
        <p>Date of Birth: {props.birth}</p>
        <p>About me: {props.about}</p>
      </div>
    </div>
  );
};

export default ProfileInfo;