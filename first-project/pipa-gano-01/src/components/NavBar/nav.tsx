import { NavLink} from 'react-router-dom';
import './Nav.scss';
import User from "../../image/VectorUser.svg";
import Message from "../../image/VectorMessage.svg";
import News from "../../image/VectorNews.svg";
import Friends from "../../image/VectorFriends.svg"
import Music from "../../image/VectorMusic.svg"
import Setting from "../../image/VectorSetting.svg"


const Nav = () =>{
  return(
    <nav className="wreapper__nav"> 
      <div className="Nav__iteam">
        <NavLink to='/Profile/2'><img  src={User} alt=""/> Profile</NavLink>
      </div>
      <div className="Nav__iteam">
        <NavLink to="/Dialogs"><img src={Message} alt="" /> Message</NavLink>
      </div>
      <div className="Nav__iteam">
        <NavLink to="/"><img src={News} alt="" /> News</NavLink>
      </div>
      <div className="Nav__iteam" >
        <NavLink to="/Friends" ><img src={Friends} alt="" /> Friends</NavLink>
      </div>
      <div className="Nav__iteam">
        <NavLink to="/Music"><img src={Music} alt="" /> Music</NavLink>
      </div>
      <div className="Nav__iteam">
        <NavLink to="/Setting"><img src={Setting} alt="" /> Setting</NavLink>
      </div>
    </nav>
  );
}

export default Nav;