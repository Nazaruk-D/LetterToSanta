import React from 'react';
import s from "../App.module.scss";
import {FormType} from "./SendFormRus";
import {NavLink} from "react-router-dom";

type LetterEngType = {}


const LetterEng: React.FC<LetterEngType> = ({}) => {
    return (
           <div className={s.behavior}>
                <div>Ты хорошо себя вёл/вела в 2022?</div>
                <div className={s.answer}>
                    <NavLink to={"/rus/letter"}>
                        <div> да</div>
                    </NavLink>
                    <NavLink to={"/rus/no"}>
                        <div> нет</div>
                    </NavLink>
                </div>
        </div>
    );
};

export default LetterEng;