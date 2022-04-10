import React from 'react';
import './MyPosts.css'
import Post from './post/Post';


const MyPosts = React.memo((props) =>{


  let PostElement = 
    props.ProfilePage.PostData.map( (post) => <Post key={post.id} like={post.likesCount} post ={post.post}/> );

  let newPostElement = React.createRef();

  let onAddPost = () =>{
    props.AddPost();
  };

  let onPostChange = () =>{
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  };

  return(
      <div className='Post__cplumn'>
        <div className='Post__new'>
          <textarea onChange={onPostChange} ref={newPostElement} value={props.NewPostText}/>
          <button onClick={onAddPost}>Add Post</button>
        </div>
        <div className ="Post__items">
          {PostElement}
        </div>
      </div>
    );
});
export default MyPosts;