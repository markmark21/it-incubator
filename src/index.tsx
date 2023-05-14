import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import {DevSupport} from "@react-buddy/ide-toolbox";
import {ComponentPreviews, useInitial} from "./dev";

let postsData = [
    {id: 1, message: 'Hi, how are you?', likesCount: 12},
    {id: 2, message: 'My fist post', likesCount: 11},
    {id: 3, message: 'Blabla', likesCount: 11},
    {id: 4, message: 'Dada', likesCount: 11},
]

ReactDOM.render(
    <DevSupport ComponentPreviews={ComponentPreviews}
                useInitialHook={useInitial}
    >
        <App posts={postsData}/>
    </DevSupport>,
    document.getElementById("root")
);