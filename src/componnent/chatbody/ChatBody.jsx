import './chatbody.css';
import BodyTopber from '../bodyTopber/BodyTopber';
import AllCheat from '../allChat/AllCheat';
import TypeCheat from '../typeChat/TypeCheat';
const ChatBody = () => {
    return (
        <div className='chatbodyWrper'>
           <BodyTopber/>
           <AllCheat/>
           <TypeCheat/>
        </div>
    );
};

export default ChatBody;