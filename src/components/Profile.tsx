import React from "react";
import "./Profile.module.css";
import s from './Profile.module.css'
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
                <div className="posts">
                    My posts
                    <div>
                        new post
                    </div>
                </div>
                <div className="posts">
                    <div className={s.item}>Post 1</div>
                    <div className={s.item}>Post 2</div>
                </div>
            </div>
        </div>
    );
};

export default Profile;