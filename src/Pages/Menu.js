import {useState, useEffect} from 'react';
import Foodcard from '../Components/Foodcard';
import Addnewitem from '../Components/Addnewitem';
import Edititem from '../Components/Edititem';

export default function Menu(){
    const [menuItems, setMenuItems] = useState([]);
    const [addAreaOpen, setAddAreaOpen] = useState(false);

    async function GetAllItems(){
        let res = await fetch("http://localhost:3005/api/menu");
        res = await res.json();
        setMenuItems(res.results);
    }

    async function DeleteThisItem(id){
        let res = await fetch(`http://localhost:3005/api/delete/${id}`)
        res = await res.json();
        console.log(res);
        GetAllItems();
    }

    function onAddClick(){
        setAddAreaOpen(!addAreaOpen);
    }

    async function AddThisItem(item){
        let res = await fetch(`http://localhost:3005/api/create`,
        {   method: 'POST',
            mode:'cors',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
                },
            body: JSON.stringify(item)
        });
        res = await res.json();
        console.log(res);
        GetAllItems();
        onAddClick();
    }

    async function EditThisItem(item, id){
        let res = await fetch(`http://localhost:3005/api/edit/${id}`,
        {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
                },
            body: JSON.stringify(item)
        });
        res = await res.json();
        console.log(res);
        GetAllItems();
    }

    useEffect(function(){
        GetAllItems();
    },[]);

    let breakfastfoodcards;
    let breakfastfooditems = menuItems.filter(function(items){
        return items.menusection == "Breakfast"
    })
    if(breakfastfooditems.length > 0){
        breakfastfoodcards = breakfastfooditems.map(function(item){
            return(
                    <Foodcard key={item.id} item={item} DeleteThisItem={DeleteThisItem} EditThisItem={EditThisItem}/>
            )
        })
    }

    let lunchfoodcards;
    let lunchfooditems = menuItems.filter(function(items){
        return items.menusection == "Lunch"
    })
    if(lunchfooditems.length > 0){
        lunchfoodcards = lunchfooditems.map(function(item){
            return(
                    <Foodcard key={item.id} item={item} DeleteThisItem={DeleteThisItem} EditThisItem={EditThisItem}/>
            )
        })
    }
    let dinnerfoodcards;
    let dinnerfooditems = menuItems.filter(function(items){
        return items.menusection == "Dinner"
    })
    if(dinnerfooditems.length > 0){
        dinnerfoodcards = lunchfooditems.map(function(item){
            return(
                    <Foodcard key={item.id} item={item} DeleteThisItem={DeleteThisItem} EditThisItem={EditThisItem}/>
            )
        })
    }

    let addNewItemArea = <button onClick={onAddClick}>Add</button>;
    if(addAreaOpen){
        addNewItemArea = (
            <div>
                <Addnewitem AddThisItem={AddThisItem}/>
                <button onClick={onAddClick}>Cancel</button>
            </div>
        )
    }


    return(
        <div>
            {addNewItemArea}
            <h2>Breakfast</h2>
            {breakfastfoodcards}
            <h2>Lunch</h2>
            {lunchfoodcards}
            <h2>Dinner</h2>
            {dinnerfoodcards}
        </div>
    )
}