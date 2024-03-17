import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from './App';
import {dataBase} from "./redux/state";
import {GlobalStyles} from "./Styles/GlobalStyles";

import './assets/fonts/fonts.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <React.StrictMode>
            <GlobalStyles/>
            <App dataBase={dataBase}/>
    </React.StrictMode>
);



