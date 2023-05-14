import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs, {DialogType} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {MyPostsPropsType} from "./components/Profile/MyPosts/MyPosts";


function App(props: any) {

    return (
        <div className="app-wrapper">
            <BrowserRouter>
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route exact path="/dialogs" render={()=> <Dialogs dialogs={props.state.dialogsPage.dialogs} messages={props.state.dialogsPage.messages}/>}/>
                    <Route exact path="/profile" render={()=> <Profile posts={props.state.profilePage.posts} />}/>

                </div>
            </BrowserRouter>


        </div>
    );
}


export default App;
