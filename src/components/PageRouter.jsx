import { Route, Routes } from 'react-router';
import Home from '../pages/Home';
import Details from './Details';


const PageRouter = () => (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/Cities/:Name' element={<Details/>}></Route>
    </Routes>
)

export default PageRouter;