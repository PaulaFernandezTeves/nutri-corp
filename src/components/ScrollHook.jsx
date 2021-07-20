import React, {useState, useEffect} from 'react'



export default function ScrollHook() {
    useEffect(() => {
        console.log('Fase de Montaje');
    });
    return (
        <>
        <h2>Hooks - useEffect y el ciclo de vida</h2>
        </>
    )
}

