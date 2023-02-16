import { useState } from 'react';

export default function Addnewitem({AddThisItem}){
    const [formInfo, setFormInfo] = useState({
        dishname:"",
        price:"",
        description:"",
        allergyinfo:"",
        menusection:""
    })
    function onInputChange(event){
        setFormInfo({...formInfo, [event.target.name]:event.target.value});
    }

    function onFormSubmit(event){
        event.preventDefault();
        AddThisItem(formInfo);
        
    }

    return(
        <form onSubmit={onFormSubmit}>
            <p>Dishname:</p>
            <input name="dishname" onChange={onInputChange}/>
            <p>Price:</p>
            <input name="price" onChange={onInputChange}/>
            <p>Description:</p>
            <input name="description" onChange={onInputChange}/>
            <p>Allergy Info:</p>
            <input name="allergyinfo" onChange={onInputChange}/>
            <p>Menu Section:</p>
            <input name="menusection" onChange={onInputChange}/>
            <button type="submit">Submit</button>
        </form>
    )
}