import {Routes, Route} from 'react-router-dom';
import Home from '../Pages/Home';
import Menu from '../Pages/Menu';

export default function Routerregion(){
    return(
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/menu' element={<Menu/>}/>
        </Routes>
    )
}