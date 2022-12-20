import React, {useEffect, useState} from 'react';
import s from './App.module.scss';
import RoutesApp from "./Routes/RoutesApp";
import {useNavigate} from "react-router-dom";
import {useAppDispatch} from "./store/store";
import {initializeApp} from "./store/letters-reducer";

function App() {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        debugger
        dispatch(initializeApp())
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
