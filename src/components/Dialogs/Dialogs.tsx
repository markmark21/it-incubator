import React from "react";
import s from "./Dialogs.module.css";
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";

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
                            <DialogItem name={dialog.name} id={dialog.id}/>
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