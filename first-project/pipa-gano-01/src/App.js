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
        <Routes className="wreapper__Content" >
          <Route path="/" element={<News/>}></Route>

          <Route path='/Profile/*' element={<ProfileContainer store={props.store} /> }></Route>

          <Route  path='/Profile/:userId?' element={<ProfileContainer store={props.store} /> }></Route>
              
          <Route  path="/Dialogs/*" element={<DialogsContainer store={props.store}/>}></Route>

          <Route  path="/Music" element={<Musics/>}></Route>

          <Route  path="/Friends" element={<Friends/>}></Route>

          <Route  path="/Setting" element={<Setting/>}></Route>

          <Route  path="/Login" element={<Login/>  }></Route>
          
        </Routes>
      </BrowserRouter>
    </div>
  
  );
}







export default App;
