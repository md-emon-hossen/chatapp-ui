import Assessment from '@material-ui/icons/Assessment';
import ExitToApp from "@material-ui/icons/ExitToApp";
import Home from '@material-ui/icons/Home';
import InsertComment from "@material-ui/icons/InsertComment";
import Settings from "@material-ui/icons/Settings";
import Star from '@material-ui/icons/Star';
import { Link, useNavigate } from 'react-router-dom';
import "./topbar.css";

const Topber = () => {

    const navigate = useNavigate();




    function handleLogout() {
        navigate('/login');
    }





    return (
        <div className='topberWrper'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBtkmN856coZk4VznBQur_FJQ6HSSynWjGiN1-9Y_C2T8LIXCHvRTLjH6Y3sfSlWgo5Fg&usqp=CAU" className="selfAvatar" alt='Avater' />
            <ul>
                <li><Link to='/'><Home className="sideIcons " /></Link></li>
                <li><Link to='/'><InsertComment className="sideIcons active" /></Link></li>
                <li><Link to='/'><Star className="sideIcons " /></Link></li>
                <li><Link to='/'><Assessment className="sideIcons " /></Link></li>
                <li><Link to='/'><Settings className='sideIcons' /></Link></li>
            </ul>
            <div className="logoutIconwrp">
                <ExitToApp className="noneIcon" />
                <ExitToApp onClick={handleLogout} className="logoutIcon " />
            </div>
        </div>
    );
};

export default Topber;