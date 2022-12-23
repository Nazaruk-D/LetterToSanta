import React from 'react';
import s from "../LetterContainer.module.scss";
import {NavLink} from "react-router-dom";


const LetterEng = () => {
    return (
           <div className={s.behavior}>
                <div>Ты хорошо себя вёл/вела в 2022?</div>
                <div className={s.yesNo}>
                    <NavLink to={"/rus/letter"}>
                        <div className={s.yes}> Да</div>
                    </NavLink>
                    <NavLink to={"/rus/no"}>
                        <div className={s.no}> Нет</div>
                    </NavLink>
                </div>
        </div>
    );
};

export default LetterEng;