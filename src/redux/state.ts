import {rerenderEntireTree} from "../render";

export type MessageType = {
    id: number,
    message: string
}
export type DialogType = {
    id: number,
    name: string
}

export type PostType = {
    id: number,
    message: string,
    likesCount: number
}


export type ProfilePageType = {
    posts: PostType[]
}

export type DialogPageType = {
    messages: MessageType[],
    dialogs: DialogType[]
}

export type SidebarType = {}

export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogPageType
    sidebar: SidebarType
}


let state: RootStateType = {
    profilePage: {
        posts: [
            {id: 1, message: "Hi, how are you?", likesCount: 12},
            {id: 2, message: "My fist post", likesCount: 11},
            {id: 3, message: "Blabla", likesCount: 11},
            {id: 4, message: "Dada", likesCount: 11},
        ],

    },
    dialogsPage: {
        messages: [
            {id: 1, message: "Hi"},
            {id: 2, message: "How are you"},
            {id: 3, message: "Yo"},
            {id: 4, message: "Yo"},
            {id: 5, message: "Yo"}
        ],
        dialogs: [
            {id: 1, name: "Dima"},
            {id: 2, name: "Lena"},
            {id: 3, name: "Dasha"},
            {id: 4, name: "Andrey"},
            {id: 5, name: "Mark"},
            {id: 6, name: "Valera"}
        ]
    },
    sidebar: {}
};

export let addPost = (postMessage: string) => {
    let newPost = {
        id: 5,
        message: postMessage,
        likesCount: 0
    };
    state.profilePage.posts.push(newPost);
    rerenderEntireTree(state);
};

export default state;