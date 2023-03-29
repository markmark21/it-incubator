import React from "react";
import s from "./Post.module.css";


type PostType = {
    message: string;
    likesCount: number;
}

const Post = (props: PostType) => {
    return (
        <div className={s.item}>
            <img src="https://www.w3schools.com/howto/img_avatar.png" alt="ava"/>
            {props.message}
            <div>
                <span>{props.likesCount} likes</span>
            </div>
        </div>
    );
};

export default Post;