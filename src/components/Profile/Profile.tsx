import React from "react";
import "./Profile.module.css";
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
const Profile = () => {
    return (
        <div>
            <div className={s.content}>
                <div>
                    <img
                        src="https://media.architecturaldigest.com/photos/57c7003fdc03716f7c8289dd/master/pass/IMG%20Worlds%20of%20Adventure%20-%201.jpg"
                        alt="logo"/>
                </div>
                <div>
                    ava+description
                </div>
                <MyPosts/>
            </div>
        </div>
    );
};

export default Profile;