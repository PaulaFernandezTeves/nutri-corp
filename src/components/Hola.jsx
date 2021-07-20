import React from 'react';

function Hola(){
    let saludo= 'variable saludo'
    return(
        <section className='App'>
            <h2>Primer componente Hola{saludo}</h2>
            <p>segundo texto</p>
        </section>
    )
}

export default Hola;
