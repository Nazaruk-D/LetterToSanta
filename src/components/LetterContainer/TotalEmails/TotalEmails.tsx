import React from 'react';
import s from "./TotalEmails.module.scss";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../../redux/store";


const TotalEmails = () => {
    const amountOfLetters = useSelector<AppRootStateType, number | null>(store => store.letters.arrLength)

    return (
        <div className={s.amountOfLetters}>
            Total emails sent: {amountOfLetters}
        </div>
    );
};

export default TotalEmails;