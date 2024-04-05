import { createContext } from "react";

const userContext = createContext({
    userName: (function () {
        let char = "abcdefghijkl0123456789mnopqrstuvwxyz@#$_";
        let id = "";
        for (let i = 0; i < 6; i++) {
            id += char[Math.floor(Math.random() * char.length)];
        }
        return id;
    })(),
})

export default userContext;