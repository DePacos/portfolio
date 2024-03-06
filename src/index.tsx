import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from './App';
import {dataBase} from "./redux/state";
import {GlobalStyles} from "./Styles/GlobalStyles";
import {ThemeProvider} from "styled-components";
import {glTheme} from "./Styles/ThemeStyled";

import './assets/fonts/fonts.css';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <ThemeProvider theme={glTheme}>
            <App  dataBase={dataBase}/>
            <GlobalStyles/>
        </ThemeProvider>
    </React.StrictMode>
);

