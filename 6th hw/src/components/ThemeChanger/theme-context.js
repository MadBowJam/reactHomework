import { createContext } from "react";

export const themes = {
    white: {
        background: 'white',
        txtColor:'black',
    },
    black: {
        background: 'black',
        txtColor:'white',
    },
};

export const ThemeContext = createContext(themes.white);