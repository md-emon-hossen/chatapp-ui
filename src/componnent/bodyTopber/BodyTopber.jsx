import Call from '@material-ui/icons/Call';
import Search from "@material-ui/icons/Search";
import Vedio from '@material-ui/icons/Videocam';
import Widgets from "@material-ui/icons/Widgets";
import { toast } from 'react-toastify';
import "./bodyTopber.css";

const BodyTopber = () => {
    return (
        <div className='bodyHead'>
            <div className='bodyheadone'>
                <img src="https://assets-global.website-files.com/5ec7dad2e6f6295a9e2a23dd/6222481c0ad8761618b18e7e_profile-picture.jpg" className="corospondingProfile" alt='Avater' />
                <div className="wrp">
                    <h3 className='profilename'>Jowel</h3>
                    <div className="status"></div>
                </div>
            </div>

            <div className='bodyheadtwo'>

                <div className="ohtersserchandIcon">
                    <div className="ChatSerch">
                        <Search className="srIcon" />
                        <input className="secrchC" type="search" />
                    </div>
                    <Call onClick={() => toast.info('Call servise not available')} className='menuIcon' />
                    <Vedio onClick={() => toast.info('Video servise not available')} className='menuIcon' />
                    <Widgets onClick={() => toast.info('More Option servise not available')} className='menuIcon' /></div>
            </div>
        </div>
    );
};

export default BodyTopber;