import React, {useEffect, useState} from 'react';
import s from './App.module.scss';
import RoutesApp from "./Routes/RoutesApp";
import {useNavigate} from "react-router-dom";

function App() {
    const navigate = useNavigate()

    useEffect(()=> {
        navigate('/')
    }, [])

    return (
        <div className={s.appContainer}>
            <div className={s.letterContainer}>
                <div className={s.letter}>
                    <RoutesApp/>
                </div>
            </div>
        </div>
    );
}

export default App;
