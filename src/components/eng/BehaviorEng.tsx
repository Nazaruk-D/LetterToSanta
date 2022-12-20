import React from 'react';
import s from "../../App.module.scss";
import {NavLink} from "react-router-dom";

type LetterEngType = {}

const BehaviorEng: React.FC<LetterEngType> = ({}) => {
    return (
           <div className={s.behavior}>
                <div>Have you been well behaved in 2022?</div>
                <div className={s.yesNo}>
                    <NavLink to={"/eng/letter"}>
                        <div className={s.yes}> Yes</div>
                    </NavLink>
                    <NavLink to={"/eng/no"}>
                        <div className={s.no}> No</div>
                    </NavLink>
                </div>
        </div>
    );
};

export default BehaviorEng;