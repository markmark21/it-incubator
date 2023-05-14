import React from "react";
import "./Profile.module.css";
import s from './Profile.module.css'
import MyPosts, {MyPostsPropsType} from "./MyPosts/MyPosts";
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";
const Profile = (props: any) => {

    return (
        <div>
            <div className={s.content}>
                <ProfileInfo/>
                <MyPosts posts={props.posts} />
            </div>
        </div>
    );
};

export default Profile;