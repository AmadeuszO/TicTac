import React from "react";
import {Box} from "./component/Box";

import './App.css';

export const App = () => {
    const board = ['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x',];
    return <div className='App'>
        <Box value="X" onClick={null}/>
    </div>
}
