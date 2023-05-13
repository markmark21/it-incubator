import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";


function App() {
    return (
        <div className="app-wrapper">
            <BrowserRouter>
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    {/*<Route exact path="/dialogs" component={Dialogs}/>
                    <Route exact path="/profile" component={Profile}/>*/}
                    
                    <Route exact path="/dialogs" render={()=> <Dialogs />}/>
                    <Route exact path="/profile" render={()=> <Profile />}/>

                </div>
            </BrowserRouter>


        </div>
    );
}


export default App;
