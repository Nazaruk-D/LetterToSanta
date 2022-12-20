import React from 'react';
import s from "../../App.module.scss";
import {NavLink} from "react-router-dom";

const Language = () => {
    return (
        <div className={s.lang}>
            <div>Choose your language / Выбери свой язык</div>
            <NavLink to={"/eng"}>
                <div className={s.eng}> English / Английский</div>
            </NavLink>
            <NavLink to={"/rus"}>
                <div className={s.rus}> Russian / Русский</div>
            </NavLink>
        </div>
    );
};

export default Language;