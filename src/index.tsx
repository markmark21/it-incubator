import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import {DevSupport} from "@react-buddy/ide-toolbox";
import {ComponentPreviews, useInitial} from "./dev";
import state, {addPost} from "./redux/state";


ReactDOM.render(
    <DevSupport ComponentPreviews={ComponentPreviews}
                useInitialHook={useInitial}
    >
        <App state={state} addPost={addPost}/>
    </DevSupport>,
    document.getElementById("root")
);