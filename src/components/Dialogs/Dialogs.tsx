import React from "react";
import s from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";

type DialogItemsPropsType = {
    name: string
    id: number
}

type MessageType = {
    message: string
    id: number
}

const DialogItems = (props: DialogItemsPropsType) => {

    let path = "/dialogs/" + props.id;
    return (
        <div className={s.dialog + " " + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    );
};

const Message = (props: MessageType) => {
    return (
        <div className={s.dialog}>{props.message}</div>
    );
};

const Dialogs = () => {

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
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {
                    dialogsData.map(dialog => {
                        return (
                            <DialogItems name={dialog.name} id={dialog.id}/>
                        )
                    })
                }
            </div>
            <div className={s.messages}>
                {
                    messagesData.map((message) => (
                        <div key={message.id}>
                            <Message message={message.message} id={message.id}/>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Dialogs;