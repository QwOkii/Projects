import './Post.scss'
const Post = (props) =>{
  return(
    <div className='Profile-Post__item'>
      <div className='Profile-Post__item--name'>
        User Name
      </div>
      <p className='Profile-Post__item--text'>
        {props.post}
      </p>
    </div>
  );
}
export default Post;