import './Write.css';
import { RiAddFill } from "react-icons/ri";
import paddle from "../../images/paddle.jpeg";

const Write = () => {
    return (
        <div className="write">
            <img src={paddle} alt="paddleboarding" className='writeImg' />
            <form className='writeForm'>
            <div className="writeFormGroup">
                <label htmlFor="fileInput">
                    < RiAddFill className="writeIcon" />
                </label>
                <input type="file" id='fileInput' style={{display: "none"}} />
                <input type="text" placeholder='Title' className='writeInput' autoFocus={true} />
            </div>
            <div className="writeFormGroup">
                <textarea placeholder='Tell your story...' type='text' className='writeInput writeText'></textarea>
            </div>
            <button className='writeSubmit'>Publish</button>
            </form>
        </div>
    );
}

export default Write;