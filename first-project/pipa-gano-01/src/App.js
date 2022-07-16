import './App.css';
import Nav from './components/NavBar/nav.jsx';
import News from './components/news/news.jsx';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Setting from './components/setting/setting.jsx';
import Musics from './components/music/music.jsx';
import DialogsContainer from './components/dialogs/DialogsContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/header/headerContainer';
import Login from './components/Login/login';
import Friends from './components/Friends/Friends.tsx';

const App = (props) => {

  return (
    <div className='wreapper'>
      <BrowserRouter>
      <HeaderContainer/>
      <Nav/>
      <div>
        <Routes>
          <Route exact className="wreapper__Content" path="/" element={<News/>}></Route>

          <Route exact className="wreapper__Content" path='/Profile/*' element={
          <ProfileContainer store={props.store} /> }></Route>

          <Route exact className="wreapper__Content" path='/Profile/:userId?' element={
          <ProfileContainer store={props.store} /> }></Route>
              
          <Route exact className="wreapper__Content" path="/Dialogs" element={
          <DialogsContainer store={props.store}/>}></Route>

          <Route exact className="wreapper__Content" path="/Music" element={
          <Musics/>}></Route>

          <Route exact className="wreapper__Content" path="/Friends" element={
          <Friends/>}></Route>

          <Route exact className="wreapper__Content" path="/Setting" element={
            <Setting/>}></Route>

          <Route exact className="wreapper__Content" path="/Login" element={
            <Login/>  }></Route>
          
        </Routes>
      </div>
      </BrowserRouter>
    </div>
  
  );
}







export default App;
