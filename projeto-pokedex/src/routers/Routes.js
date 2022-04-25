import { BrowserRouter, Routes, Route} from 'react-router-dom';
import HomePage from '../pages/HomePage';
import Details from '../pages/Details';
import Pokedex from '../pages/Pokedex';


const Routers = () => { 
    return(

    <BrowserRouter>
    <Routes> 
        <Route  path="/" element={<HomePage/>}/>
        <Route  path="/pokedex" element={<Pokedex/>}/>
        <Route  path="/:id" element={<Details/>}/>
    </Routes>
    </BrowserRouter>
    )
}

export default Routers; 