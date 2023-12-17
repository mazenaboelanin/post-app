import classes from './Post.module.css';

function Post(props) {
  return (
    <div className={classes.post}>
      <h3 className={classes.author}>{props.author}</h3>
      <p className={classes.body}>{props.body}</p>
    </div>
  );
}

export default Post;