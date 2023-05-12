import React from "react";
import s from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";

type DialogItemsPropsType = {
    name: string
    id: string
}

const DialogItems = (props: DialogItemsPropsType) => {

    let path = "/dialogs/" + props.id;
    return (
        <div className={s.dialog + " " + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    );
};

const Message = (props: any) => {
    return (
        <div className={s.dialog}>{props.message}</div>
    )
}

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItems name="Dima" id="1"/>
                <DialogItems name="Lena" id="2"/>
                <DialogItems name="Dasha" id="3"/>
                <DialogItems name="Andrey" id="4"/>
                <DialogItems name="Mark" id="5"/>
                <DialogItems name="Valera" id="6"/>
            </div>
            <div className={s.messages}>
                <Message message='Hi'/>
                <Message message='How are you'/>
                <Message message='Yo'/>
                <Message message='Yo'/>
                <Message message='Yo'/>
            </div>
        </div>
    );
};

export default Dialogs;