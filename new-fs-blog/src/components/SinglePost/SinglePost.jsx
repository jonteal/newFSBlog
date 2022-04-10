import "./SinglePost.css";
import ocean from '../../images/ocean.jpeg';

const SinglePost = () => {
    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                <img src={ocean} alt="" className="singlePostImg" />
                <h1 className="singlePostTitle">Lorem ipsum dolor sit amet.</h1>
            </div>
        </div>
    );
}

export default SinglePost;