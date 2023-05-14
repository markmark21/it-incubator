import React from "react";
import s from "./Dialogs.module.css";
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";

export type MessageType = {
    id: number,
    message: string
}
export type DialogType = {
    id: number,
    name: string
}

export type DialogsType = {
    dialogs: DialogType[],
    messages: MessageType[]
}


const Dialogs = (props: DialogsType) => {

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {
                    props.dialogs.map(dialog => {
                        return (
                            <DialogItem name={dialog.name} id={dialog.id}/>
                        )
                    })
                }
            </div>
            <div className={s.messages}>
                {
                    props.messages.map((message) => (
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