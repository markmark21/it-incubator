import React from "react";
import "./Profile.module.css";
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";
const Profile = () => {
    return (
        <div>
            <div className={s.content}>
                <ProfileInfo/>
                <MyPosts />
            </div>
        </div>
    );
};

export default Profile;