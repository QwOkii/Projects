import style from './Friends.module.css';


let Pagenator =(props) =>{
    let PageCount = Math.ceil(props.totalUsersCount/  props.PageSize);
        let pages =[];
        for(let i=1; i<=PageCount;i++){
            pages.push(i); 
        }
    return(
            
        <div>
            <div>
                {pages.map( p=>{
                    return <button onClick={()=>{  props.onPageChanged(p) }} className={  props.currentPage=== p && style.selectPage }>{p}</button>
                })}
            </div>
        </div>
    );
}

export default Pagenator;