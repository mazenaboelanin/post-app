import Post from './Post';
import NewPost from './NewPost';
import classes from './PostsList.module.css'

function PostsList() {
  return (
    <>
    <NewPost />
    <ul className={classes.posts}>
      <Post author="Mazen" body="React overview" />
      <Post author="Ahmed" body="React Full knowledge"/>
    </ul>
    </>
  );
}

export default PostsList;