import {useState} from 'react'
import Edititem from './Edititem';
import Modalpopup from './Modalpopup';
export default function Foodcard({item, DeleteThisItem, EditThisItem}){
    const [infoClicked, setInfoClicked] = useState(false);
    const [editClicked, setEditClicked] = useState(false);

    function onInfoClick(){
        setInfoClicked(!infoClicked);
    }
    function onDeleteClick(){
        DeleteThisItem(item.id)
    }

    function onEditClick(){
        setEditClicked(!editClicked);
    }

    let moreInfo = <button onClick={onInfoClick}>More Info</button>
    if(infoClicked){
        moreInfo = (
            <div>
                <Modalpopup item={item} handleClose={onInfoClick} open={infoClicked}/>
                <button onClick={onInfoClick}>Less Info</button>
            </div>

            // <div>
            //     <p>{item.description}</p>
            //     <p>{item.allergyinfo}</p>
            //     <button onClick={onInfoClick}>Less Info</button>
                
            // </div>
        )
    }
    let editArea = <button onClick={onEditClick}>Edit</button>
    if(editClicked){
       editArea = (
        <div>
            <Edititem item={item} EditThisItem={EditThisItem}/>
            <button onClick={onEditClick}>Cancel</button>
        </div>
       ) 
    }
    return(
        <div>
            <button onClick={onDeleteClick}>Delete</button>
            {editArea}
            <h3>{item.dishname}</h3>
            <p>{item.price.toFixed(2)}</p>
            {moreInfo}
        </div>
    )
}