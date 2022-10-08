import SingleAsideProfile from '../singleAsideProfile/SingleAsideProfile';
import './aside.css';

const Aside = () => {
    return (
        <div className='asideWrper'>
            <div className="asideContainer">
                <div className='inputDiv'>
                    <input type="search" placeholder='Search' />
                </div>
                <div className="allAsideprofile">
                    <SingleAsideProfile />
                    <SingleAsideProfile nameClass='profileActive' />
                    <SingleAsideProfile />
                    <SingleAsideProfile />
                    <SingleAsideProfile />
                    <SingleAsideProfile />
                    <SingleAsideProfile />
                    <SingleAsideProfile />
                    <SingleAsideProfile />
                    <SingleAsideProfile />
                    <SingleAsideProfile />
                    <SingleAsideProfile />
                    <SingleAsideProfile />
                    <SingleAsideProfile />
                    <SingleAsideProfile />
                    <SingleAsideProfile />
                    <SingleAsideProfile />
                    <SingleAsideProfile />
                    <SingleAsideProfile />
                    <SingleAsideProfile />
                    <SingleAsideProfile />
                    <SingleAsideProfile />
                    <SingleAsideProfile />
                    <SingleAsideProfile />
                </div>

            </div>
        </div>
    );
};

export default Aside;