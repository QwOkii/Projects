import './App.css';
import Nav from './components/NavBar/nav';
import News from './components/news/news';

import {BrowserRouter, Route, Routes, useParams} from "react-router-dom";
import Setting from './components/setting/setting';
import Musics from './components/music/music';
import DialogsContainer from './components/dialogs/DialogsContainer';
import Login from './components/Login/login';
import Friends from './components/Friends/Friends';
import Profile from './components/Profile/Profile';
import Header from './components/header/header';
import ProfileInfo from './components/Profile/ProfileInfo/ProfileInfo';

const App = (props) => {
  return (
    <div className='wreapper'>
      <BrowserRouter>
      <Header/>
      <main className='wreapper__Content--container'>
        <Nav/>
        <div className="wreapper__Content"  >
          <Routes>
              <Route path="/" element={<News/>}></Route>

              <Route path='/Profile/*' element={<Profile store={props.store} /> }></Route>

              <Route  path='/Profile/:userId' element={<Profile store={props.store} /> }></Route>
                  
              <Route  path="/Dialogs/*" element={<DialogsContainer store={props.store}/>}></Route>

              <Route  path="/Music" element={<Musics/>}></Route>

              <Route  path="/Friends" element={<Friends/>}></Route>

              <Route  path="/Setting" element={<Setting/>}></Route>

              <Route  path="/Login" element={<Login/>  }></Route>
          </Routes>
        </div>
      </main>
      </BrowserRouter>
    </div>
  
  );
}







export default App;
