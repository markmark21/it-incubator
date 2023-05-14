import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs, {DialogType} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {MyPostsPropsType} from "./components/Profile/MyPosts/MyPosts";


function App(props: MyPostsPropsType) {
    let dialogsData = [
        {id: 1, name: "Dima"},
        {id: 2, name: "Lena"},
        {id: 3, name: "Dasha"},
        {id: 4, name: "Andrey"},
        {id: 5, name: "Mark"},
        {id: 6, name: "Valera"}
    ];
    let messagesData = [
        {id: 1, message: "Hi"},
        {id: 2, message: "How are you"},
        {id: 3, message: "Yo"},
        {id: 4, message: "Yo"},
        {id: 5, message: "Yo"}
    ];

    return (
        <div className="app-wrapper">
            <BrowserRouter>
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    {/*<Route exact path="/dialogs" component={Dialogs}/>
                    <Route exact path="/profile" component={Profile}/>*/}
                    
                    <Route exact path="/dialogs" render={()=> <Dialogs dialogs={dialogsData} messages={messagesData}/>}/>
                    <Route exact path="/profile" render={()=> <Profile posts={props.posts} />}/>

                </div>
            </BrowserRouter>


        </div>
    );
}


export default App;
