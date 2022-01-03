import { Route, Routes } from 'react-router';
import Home from '../pages/Home';
import Details from './Details';
import ErrorPage from './ErorrPage';


const PageRouter = () => (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/Cities/:Name' element={<Details/>}></Route>
        <Route path="/*" element={<ErrorPage />}></Route>
    </Routes>
)

export default PageRouter;