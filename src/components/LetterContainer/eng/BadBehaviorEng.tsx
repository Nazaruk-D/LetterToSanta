import React from 'react';
import s from "../LetterContainer.module.scss";
import MainMenuButton from "../../../common/components/MainMenuButton/MainMenuButton";


const BadBehaviorEng = () => {
    return (
        <div className={s.sorry}>
            Sorry... I hope you do better next year
            <div className={s.button}>
                <MainMenuButton/>
            </div>
        </div>
    );
};

export default BadBehaviorEng;