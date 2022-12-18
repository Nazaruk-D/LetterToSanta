import React from 'react';
import s from "../App.module.scss";
import {NavLink} from "react-router-dom";

type LetterEngType = {}

const LetterEng: React.FC<LetterEngType> = ({}) => {
    return (
           <div className={s.behavior}>
                <div>Have you been well behaved in 2022?</div>
                <div className={s.answer}>
                    <NavLink to={"/eng/letter"}>
                        <div className={s.yes}> yes</div>
                    </NavLink>
                    <NavLink to={"/eng/no"}>
                        <div className={s.no}> no</div>
                    </NavLink>
                </div>
        </div>
    );
};

export default LetterEng;