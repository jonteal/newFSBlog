import "./SinglePost.css";
import ocean from '../../images/ocean.jpeg';
import { RiEditLine } from "react-icons/ri"
import { RiDeleteBin6Line } from "react-icons/ri"


const SinglePost = () => {
    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                <img src={ocean} alt="" className="singlePostImg" />
                <h1 className="singlePostTitle">Lorem ipsum dolor sit amet.
                    <div className="singlePostEdit">
                        <RiEditLine className="singlePostIcon" />
                        <RiDeleteBin6Line className="singlePostIcon" />
                    </div>
                </h1>
                <div className="singlePostInfo">
                    <span className="singlePostAuthor">Author: <b>Jon</b></span>
                    <span className="singlePostDate">Author: <b>1 hour ago</b></span>

                </div>
                <p className="singlePostDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo maiores, repellat sequi eaque nostrum possimus assumenda fugiat recusandae nisi a obcaecati voluptatibus quam numquam inventore suscipit animi distinctio necessitatibus praesentium! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo maiores, repellat sequi eaque nostrum possimus assumenda fugiat recusandae nisi a obcaecati voluptatibus quam numquam inventore suscipit animi distinctio necessitatibus praesentium! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo maiores, repellat sequi eaque nostrum possimus assumenda fugiat recusandae nisi a obcaecati voluptatibus quam numquam inventore suscipit animi distinctio necessitatibus praesentium!</p>
            </div>
        </div>
    );
}

export default SinglePost;