import CloudUpload from '@material-ui/icons/Image';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './registration.css';

const Registration = () => {

    const [name, setname] = useState('');
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const [conpass, setconpass] = useState('');
    const [file, setfile] = useState('');
    const [loding, setloding] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(typeof file);
        if (password === conpass && file !== '') {

            //sign up preccess//




            setloding(true);
            setname('');
            setemail('');
            setpassword('');
            setconpass('');
            setfile('');
            navigate('/');

        } else {
            if (password !== conpass) {
                toast.error("password doesn't match");
            } else {
                toast.warning("Please select avater");
            }
        }

    }



    return (
        <div onSubmit={handleSubmit} className='regeWrper'>
            <form className="regeConter">
                <h2>Registration</h2>
                <input required value={name} onChange={e => setname(e.target.value)} type="text" placeholder='Name' />
                <input required value={email} onChange={e => setemail(e.target.value)} type="email" placeholder='Email' />
                <input required value={password} onChange={e => setpassword(e.target.value)} type="password" placeholder='Password' />
                <input required value={conpass} onChange={e => setconpass(e.target.value)} type="password" placeholder=' Confrim Password' />
                <input value={file} onChange={e => setfile(e.target.value)} type="file" name='Choosfile' id='Choosfile' />
                <label htmlFor="Choosfile">
                    <CloudUpload />
                    <p>Uplode Avatar</p>
                </label>
                <button disabled={loding} type='submit'>SignUp</button>
                <p>Have an account?<Link className='link' to='/Login'> Login</Link></p>
            </form>
            <ToastContainer />
        </div>
    );
};

export default Registration;