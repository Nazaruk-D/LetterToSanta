import React from 'react';
import s from "../LetterContainer.module.scss";
import {FormType} from "../../../api/api";
import MainMenuButton from "../../../common/components/MainMenuButton/MainMenuButton";


type MessageType = {
    info: FormType
}

const   MessageEng: React.FC<MessageType> = ({info}) => {
    return (
        <div className={s.finalText}>
            <div>Your letter with the following wishes:
                <span style={{fontStyle: "italic"}}>"{info.content}"</span>
                to Santa Claus sent!
            </div>
            <div>Expect Your Gift {info.underTree === "yes" && "under tree"} on January 01, 2023!</div>
            <div>Happy New Year, <span style={{fontWeight: 600}}>{info.name}</span>!</div>
            <div className={s.button}>
                <MainMenuButton/>
            </div>
        </div>
    );
};

export default MessageEng;