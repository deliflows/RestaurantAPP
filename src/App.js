import Header from "./Components/Header";
import Footer from "./Components/Footer";
import {BrowserRouter as Router} from 'react-router-dom';
import Routerregion from "./Components/Routerregion";

export default function App(){
    return(
        <div>
            <Router>
                <Header/>
                <Routerregion/>
            </Router>
            <Footer/>
        </div>
    )
}