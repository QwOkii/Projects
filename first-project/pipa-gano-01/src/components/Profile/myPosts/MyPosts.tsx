import React from 'react';
import './MyPosts.scss'
import Post from './post/Post';
import sendSVG from "../../../image/SendSVG.svg"
import { useDispatch, useSelector } from 'react-redux';
import { StateType } from '../../../type/state';
import { addPostActionCreator, updateNewTextActionCreator } from '../../../redux/profile-reducer';

const MyPosts = React.memo(() =>{
  const dispatch = useDispatch()
  const {PostData,NewPostText} =useSelector((u:StateType)=>u.ProfilePage)

  let PostElement = 
    PostData.map( (post) => <Post key={post.id} post ={post.post}/> );

  let newPostElement = React.useRef<HTMLTextAreaElement>(null);

  let onAddPost = () =>{
    dispatch( addPostActionCreator())
  };
  
  let onPostChange = () =>{
    let text = newPostElement.current?.value
    dispatch( updateNewTextActionCreator(text))
  };

  return(
      <div className='Profile-Post'>
        <div className='Profile-Post__new'>
          <div className='Profile-Post__input'>
            <textarea placeholder='type text...' onChange={onPostChange} ref={newPostElement} value={NewPostText}></textarea>
            <button onClick={onAddPost}>send <img src={sendSVG} alt="" /></button>
          </div>
          
        </div>
        <div className ="Profile-Post__items">
          {PostElement}
        </div>
      </div>
    );
});
export default MyPosts;