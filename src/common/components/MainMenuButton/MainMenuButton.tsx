import React from 'react';
import s from './MainMenuButton.module.scss'
import {useNavigate} from "react-router-dom";
import {TbArrowBack} from "react-icons/tb";


const MainMenuButton = () => {

    const navigate = useNavigate()

    const onClickHandler = () => {
        navigate('/')
    }

    return (
        <button className={s.mainMenuButton} onClick={onClickHandler}>
            <TbArrowBack style={{fontSize: 18, position: "relative", left: -5, top: 0}}/>
            Go to main menu
        </button>
    )
};

export default MainMenuButton;