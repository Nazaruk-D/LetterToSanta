import React, {useState} from 'react';
import {Route, Routes} from "react-router-dom";
import Language from "../components/Language";
import LetterEng from "../components/LetterEng";
import SendFormEng, {FormType} from "../components/SendFormEng";
import LetterRus from "../components/LetterRus";
import SendFormRus from "../components/SendFormRus";
import BadBehaviorEng from "../components/BadBehaviorEng";
import BadBehaviorRus from "../components/BadBehaviorRus";
import MessageEng from "../components/MessageEng";
import MessageRus from "../components/MessageRus";

const RoutesApp = () => {

    const [info, setInfo] = useState<FormType>({
        name: "",
        email: "",
        age: "",
        underTree: "",
        text: ""
    })

    return (
        <div>
            <Routes>
                <Route path={'/'} element={<Language/>}/>
                <Route path={'/eng'} element={<LetterEng/>}/>
                <Route path={'/eng/letter'} element={<SendFormEng setInfo={setInfo}/>}/>
                <Route path={'/eng/letter/send'} element={<MessageEng info={info}/>}/>
                <Route path={'/eng/no'} element={<BadBehaviorEng/>}/>
                <Route path={'/rus'} element={<LetterRus/>}/>
                <Route path={'/rus/letter'} element={<SendFormRus setInfo={setInfo}/>}/>
                <Route path={'/rus/letter/send'} element={<MessageRus info={info}/>}/>
                <Route path={'/rus/no'} element={<BadBehaviorRus/>}/>
                <Route path={"*"} element={<Language/>} />
            </Routes>
        </div>
    )
}

export default RoutesApp;