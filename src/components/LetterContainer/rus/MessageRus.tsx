import React from 'react';
import s from "../LetterContainer.module.scss";
import {FormType} from "../../../api/api";
import MainMenuButton from "../../../common/components/MainMenuButton/MainMenuButton";


type MessageType = {
    info: FormType
}

const MessageRus: React.FC<MessageType> = ({info}) => {
    return (
        <div className={s.finalText}>
            <div>Твоё письмо с пожеланием: <span style={{fontStyle: "italic"}}>"{info.content}"</span> отправлено для
                Деда Мороза!
            </div>
            <div>Ищи свой подарок {info.underTree === "yes" && "под ёлкой"} утром 1 января 2023 года!</div>
            <div>С Новым Годом, <span style={{fontWeight: 600}}>{info.name}</span>!</div>
            <div className={s.button}>
                <MainMenuButton/>
            </div>
        </div>
    );
};

export default MessageRus;