import React, {useEffect} from 'react';
import s from './App.module.scss'
import {useNavigate} from "react-router-dom";
import Snowfall from 'react-snowfall'
import LetterContainer from "../components/LetterContainer/LetterContainer";
import {useAppDispatch} from "../redux/store";
import {initializeApp} from "../redux/letters-reducer";
import CornerLink from "../components/CornerLink/CornerLink";


function App() {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        dispatch(initializeApp())
        navigate('/')
        return ()=>{}
    }, [])

    const amountSnow = window.innerWidth > 800 ? 350 : 40
    const speedSnow:[number,number] = window.innerWidth > 800 ? [0.5, 1.5] : [0.2, 0.5]

    return (
        <div className={s.appContainer}>
            <Snowfall snowflakeCount={amountSnow} speed={speedSnow}/>
            <LetterContainer/>
            <CornerLink/>
        </div>
    );
}

export default App;
