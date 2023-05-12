import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props: any) => {
    let postsData = [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'My fist post', likesCount: 11},
        {id: 3, message: 'Blabla', likesCount: 11},
        {id: 4, message: 'Dada', likesCount: 11},

    ]
    return (
        <div className={s.postsBlock}>
            <div className="posts">
                <h3>My posts</h3>
                <div>
                    <div>
                        <textarea></textarea>
                    </div>
                    <div>
                        <button>Add post</button>
                    </div>
                </div>
            </div>
            <div className={s.posts}>
                {
                    postsData.map(post => {
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