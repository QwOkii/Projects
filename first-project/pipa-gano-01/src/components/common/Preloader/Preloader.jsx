
import loading from '../../../image/Spinner.svg';

const PreLoader = (props)=>{
    return(
        <div>
            <img src={loading} style={{backgroundColor:'white'}}/>
        </div>
    );
}

export default PreLoader;