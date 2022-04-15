import "./Post.css";
import mountain from "../../images/mountains.jpeg";

const Post = () => {
    return (
        <div className="post">
        <img className="postImg" src={mountain} alt="mountain" />
        <div className="postInfo">
            <div className="postCats">
            <span className="postCat">Music</span>
            <span className="postCat">Life</span>
            </div>
            <span className="postTitle">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </span>
            <hr />
            <span className="postDate">1 hour ago</span>
        </div>
        <p className="postDescription">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda
            nobis ad alias deserunt. Dignissimos saepe consectetur soluta rerum.
            Voluptatum adipisci excepturi assumenda nobis cumque dolore dolor nemo
            tempora quibusdam illum. Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Assumenda nobis ad alias deserunt. Dignissimos saepe
            consectetur soluta rerum. Voluptatum adipisci excepturi assumenda nobis
            cumque dolore dolor nemo tempora quibusdam illum. Lorem ipsum, dolor sit
            amet consectetur adipisicing elit. Assumenda nobis ad alias deserunt.
            Dignissimos saepe consectetur soluta rerum. Voluptatum adipisci
            excepturi assumenda nobis cumque dolore dolor nemo tempora quibusdam
            illum.
        </p>
        </div>
    );
};

export default Post;
