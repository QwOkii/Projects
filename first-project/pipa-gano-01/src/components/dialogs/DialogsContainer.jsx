
import { compose } from 'redux';
import authNavigation from '../HOC/authRedirect';
import Dialogs from './Dialogs';



export default compose(
    authNavigation
)(Dialogs);