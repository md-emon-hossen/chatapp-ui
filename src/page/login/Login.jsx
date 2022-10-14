import { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { UseAuth } from '../../context/AuthContext';
import './login.css';

const Login = () => {
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const [loding, setloding] = useState(false);
    const { login } = UseAuth();

    const loginSubmit = (e) => {
        e.preventDefault();

        try {
            setloding(true);
            login(email, password);
        } catch (err) {
            console.log(err);
            toast.error("Invalid Email or Password");
            setloding(false);
            setemail('');
            setpassword('');
        }

    }

    return (
        <div className='loginWrper'>
            <form onSubmit={loginSubmit} className="loginConter">
                <h2>Login</h2>
                <input required type="email" value={email} onChange={e => setemail(e.target.value)} placeholder='Email' />
                <input required type="password" value={password} onChange={e => setpassword(e.target.value)} placeholder='Password' />
                <button disabled={loding} type='submit'>Login</button>
                <p>Haven't account?<Link className='link' to='/signup'> SignUp</Link></p>
            </form>
            <ToastContainer />
        </div>
    );
};

export default Login;