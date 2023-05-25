import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import {addPost} from "../../../redux/state";

export type PostsDataType = {
    id: number,
    message: string,
    likesCount: number
}

export type MyPostsPropsType = {
    posts: PostsDataType[]
    addPostCallBack: (message: string) => void;
}


const MyPosts = (props: MyPostsPropsType) => {
    let newPostElement = React.createRef<HTMLTextAreaElement>();
    const addPost = () => {
        if(newPostElement.current?.value.trim() !== '') {
            props.addPostCallBack(newPostElement.current ? newPostElement.current.value : '----')
        }
    }

    const onPostChange = () => {

    }


    return (
        <div className={s.postsBlock}>
            <div className="posts">
                <h3>My posts</h3>
                <div>
                    <div>
                        <textarea onChange={onPostChange} ref={newPostElement} value={''} />
                    </div>
                    <div>
                        <button onClick={addPost}>Add post</button>
                    </div>
                </div>
            </div>
            <div className={s.posts}>
                {
                    props.posts.map(post => {
                        return (
                            <div key={post.id}>
                                <Post message={post.message} likesCount={post.likesCount}/>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
};

export default MyPosts;