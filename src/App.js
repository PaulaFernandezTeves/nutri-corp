import React from 'react';
import './App.css';
import ScrollHook from './components/ScrollHook';
import RelojHooks from './components/RelojHooks';

function App(){
    return(
        <div className='App'>
            <h1>Titulo de nuestro proyecto</h1>
            <ScrollHook></ScrollHook>
            <RelojHooks></RelojHooks>
        </div>
    )
}

export default App;
