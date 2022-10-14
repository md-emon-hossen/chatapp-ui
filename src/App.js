import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthProbider } from './context/AuthContext';
import Home from './page/home/Home';
import Login from './page/login/Login';
import Registration from './page/registration/Registration';
import UserAuthCheck from './utility/UserAuthCheck';
function App() {
  return (
    <AuthProbider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<UserAuthCheck> <Home /> </UserAuthCheck>} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Registration />} />
        </Routes>
      </BrowserRouter>
    </AuthProbider >
  );
}

export default App;
