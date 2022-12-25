import React, {useState} from 'react';
import {Route, Routes} from "react-router-dom";
import Language from "../components/LetterContainer/eng/Language";
import SendFormRus from "../components/LetterContainer/rus/SendFormRus";
import BadBehaviorEng from "../components/LetterContainer/eng/BadBehaviorEng";
import BadBehaviorRus from "../components/LetterContainer/rus/BadBehaviorRus";
import MessageEng from "../components/LetterContainer/eng/MessageEng";
import MessageRus from "../components/LetterContainer/rus/MessageRus";
import BehaviorEng from "../components/LetterContainer/eng/BehaviorEng";
import BehaviorRus from "../components/LetterContainer/rus/BehaviorRus";
import SendFormEng from "../components/LetterContainer/eng/SendFormEng";
import {FormType} from "../api/api";


const RoutesApp = () => {
    const [info, setInfo] = useState<FormType>({
        name: "",
        email: "",
        age: "",
        underTree: "",
        content: ""
    })

    return (
        <div>
            <Routes>
                <Route path={'/'} element={<Language/>}/>
                <Route path={'/eng'} element={<BehaviorEng/>}/>
                <Route path={'/eng/letter'} element={<SendFormEng setInfo={setInfo}/>}/>
                <Route path={'/eng/letter/send'} element={<MessageEng info={info}/>}/>
                <Route path={'/eng/no'} element={<BadBehaviorEng/>}/>
                <Route path={'/rus'} element={<BehaviorRus/>}/>
                <Route path={'/rus/letter'} element={<SendFormRus setInfo={setInfo}/>}/>
                <Route path={'/rus/letter/send'} element={<MessageRus info={info}/>}/>
                <Route path={'/rus/no'} element={<BadBehaviorRus/>}/>
                <Route path={"*"} element={<Language/>}/>
            </Routes>
        </div>
    )
}

export default RoutesApp;