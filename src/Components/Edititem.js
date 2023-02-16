import { useState } from "react";

export default function Edititem({EditThisItem, item}){
    const [formInfo, setFormInfo] = useState({
        dishname:item.dishname,
        price:item.price,
        description:item.description,
        allergyinfo:item.allergyinfo,
        menusection:item.menusection
    })
    function onInputChange(event){
        setFormInfo({...formInfo, [event.target.name]:event.target.value});
    }

    function onFormSubmit(event){
        event.preventDefault();
        EditThisItem(formInfo, item.id);
        
    }
    return(
        <form onSubmit={onFormSubmit}>
            <p>Dishname:</p>
            <input name="dishname" onChange={onInputChange} value={formInfo.dishname}/>
            <p>Price:</p>
            <input name="price" onChange={onInputChange} value={formInfo.price}/>
            <p>Description:</p>
            <input name="description" onChange={onInputChange} value={formInfo.description}/>
            <p>Allergy Info:</p>
            <input name="allergyinfo" onChange={onInputChange} value={formInfo.allergyinfo}/>
            <p>Menu Section:</p>
            <input name="menusection" onChange={onInputChange} value={formInfo.menusection}/>
            <button type="submit">Submit</button>
         </form>
    )
}