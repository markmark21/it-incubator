import React from "react";
import "./Profile.module.css";
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
const Profile = () => {
    return (
        <div>
            <div className={s.content}>
                <MyPosts/>
            </div>
        </div>
    );
};

export default Profile;