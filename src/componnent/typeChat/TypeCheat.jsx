import Camera from '@material-ui/icons/CameraAlt';
import Emoji from '@material-ui/icons/EmojiEmotions';
import Image from '@material-ui/icons/Image';
import LocationOn from '@material-ui/icons/LocationOn';
import MicroPhone from '@material-ui/icons/MicRounded';
import Send from '@material-ui/icons/Send';
import EmojiPicker from 'emoji-picker-react';
import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import './typeCheat.css';
const TypeCheat = () => {
    const [text, settext] = useState('');
    const [emojiHandleer, setemojiHandleer] = useState(false);

    const handleClick = () => {
        console.log(text);
        settext('');
        setemojiHandleer(false);

    }

    const handleDown = (e) => {
        if (e.key === 'Enter') {
            handleClick();
            setemojiHandleer(false);
        }
    }


    return (
        <div className='typecheatWWrp'>
            <div className='otherIcons'>
                <LocationOn onClick={() => toast.info('Location servise not available')} className='otherIcn' />
                <Camera onClick={() => toast.info('Camera servise not available')} className='otherIcn' />
                <MicroPhone onClick={() => toast.info('Microphone servise not available')} className='otherIcn' />
                <input type="file" name='FileAttatch' id='FileAttatch' />
                <label htmlFor="FileAttatch">
                    <Image className='otherIcn' />
                </label>
                <Emoji className='otherIcn' onClick={() => setemojiHandleer(!emojiHandleer)} />
                {emojiHandleer && <div className='emojiStayle'><EmojiPicker onEmojiClick={(eomi) => settext(text + eomi.emoji)} skinTonesDisabled={true} height={400} width={330} autoFocusSearch={true} /></div>}
            </div>
            <div className='type'>
                <input onChange={(e) => settext(e.target.value)} onKeyDown={handleDown} type="text" value={text} placeholder='Type a message...' />

            </div>
            <div className='send'>
                <div onClick={handleClick} className='sendWrp'>
                    <Send />
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default TypeCheat;