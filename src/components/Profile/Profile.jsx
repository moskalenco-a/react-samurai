import Post from './Post/Post'
import ProfileInfo from './ProfileInfo/ProfileInfo';
import styles from './Profile.module.css';
import { useRef } from 'react';

const Posts = (props) => {
  console.log(props);
  console.log(props.posts);
  console.log(typeof props.posts);
  const postsElements = props.posts.map(p => (
    <Post date={p.date} text={p.text} />
  ));
  return (
    <div className={styles.posts}>
      { postsElements }
    </div>
  );
};

const AddPost = (props) => {
  const area = useRef();
  const addHandler = () => {
    const postText = area.current.value;
    props.addPost(postText);
    area.current.value = "";
  };
  return (
    <>
      <h3>Add post</h3>
      <div className={styles['add-block']}>
        <textarea ref={area}></textarea>
        <button onClick={addHandler}>+</button>
      </div>
    </>
  );
};

const Profile = (props) => {
  return (
    <div className={styles.content}>
      <img className={styles.wall} src="https://www.datso.fr/images/dg_images/34_1000x2000_3x2/19C3AC181F43-34.jpg" />
      <ProfileInfo name="Andrey Moskalenko" location="Ukraine"
                   birth="15 december" about="React Dev"/>
      <AddPost addPost={props.addPost}/>
      <Posts posts={props.posts} />
    </div>
  );
};

export default Profile;
