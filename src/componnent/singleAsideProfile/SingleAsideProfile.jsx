import "./singleAsideProfile.css";

const SingleAsideProfile = ({ nameClass }) => {
    return (

        <div className={`sigleAsideProfile ${nameClass}`}>
            <div>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBtkmN856coZk4VznBQur_FJQ6HSSynWjGiN1-9Y_C2T8LIXCHvRTLjH6Y3sfSlWgo5Fg&usqp=CAU" className="selfAvatar" alt='Avater' />
            </div>
            <div className='profileTitleWrp'>
                <div className='profileTitle'>
                    <h3>Md Emon Hossen</h3>
                    <div className='statusS'></div>
                </div>
                <div className='subTitle'>
                    Hello! This is Md Emon Hossen. im From Bangladesh
                </div>
            </div>
        </div>
    );
};

export default SingleAsideProfile;