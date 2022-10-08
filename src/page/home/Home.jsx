import Aside from '../../componnent/aside/Aside';
import ChatBody from '../../componnent/chatbody/ChatBody';
import Topber from '../../componnent/topber/Topber';
import './home.css';

const Home = () => {
  return (
    <div className='homeWrper'>
      <Topber />
      <div className='homeContainer'>
        <Aside />
        <ChatBody />
      </div>
    </div>
  );
};

export default Home;