import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UserAuthCheck from './componnent/UserAuthCheck';
import Home from './page/home/Home';
import Login from './page/login/Login';
import Registration from './page/registration/Registration';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<UserAuthCheck> <Home /> </UserAuthCheck>} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Registration />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
