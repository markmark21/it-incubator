import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

export type PostsDataType = {
    id: number,
    message: string,
    likesCount: number
}

export type MyPostsPropsType = {
    posts: PostsDataType[]
}

const MyPosts = (props: MyPostsPropsType) => {
    let newPostElement = React.createRef()
    const addPost = () => {
      let text = newPostElement.current.value
    }

    return (
        <div className={s.postsBlock}>
            <div className="posts">
                <h3>My posts</h3>
                <div>
                    <div>
                        <textarea ref={newPostElement}></textarea>
                    </div>
                    <div>
                        <button onClick={ addPost }>Add post</button>
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
                        )
                    })
                }
            </div>
        </div>
    );
};

export default MyPosts;