import React from 'react';
import s from "../LetterContainer.module.scss";
import MainMenuButton from "../../../common/components/MainMenuButton/MainMenuButton";


const BadBehaviorRus = () => {
    return (
        <div className={s.sorry}>
            Извини... Я надеюсь, что ты будешь лучше себя вести в следующем году
            <div className={s.button}>
                <MainMenuButton/>
            </div>
        </div>
    );
};

export default BadBehaviorRus;