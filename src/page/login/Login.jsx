import { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './login.css';

const Login = () => {
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const [loding, setloding] = useState(false);

    const loginSubmit = (e) => {
        e.preventDefault();
        console.log(email, password);



        toast.error("Invalid Email or Password");
        setemail('');
        setpassword('');

    }





    return (
        <div className='loginWrper'>
            <form onSubmit={loginSubmit} className="loginConter">
                <h2>Login</h2>
                <input type="email" value={email} onChange={e => setemail(e.target.value)} placeholder='Email' />
                <input type="password" value={password} onChange={e => setpassword(e.target.value)} placeholder='Password' />
                <button disabled={loding} type='submit'>Login</button>
                <p>Haven't account?<Link className='link' to='/signup'> SignUp</Link></p>
            </form>
            <ToastContainer />
        </div>
    );
};

export default Login;