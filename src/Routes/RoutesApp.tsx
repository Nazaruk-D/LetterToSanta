import React, {useState} from 'react';
import {Route, Routes} from "react-router-dom";
import Language from "../components/eng/Language";
import SendFormRus from "../components/rus/SendFormRus";
import BadBehaviorEng from "../components/eng/BadBehaviorEng";
import BadBehaviorRus from "../components/rus/BadBehaviorRus";
import MessageEng from "../components/eng/MessageEng";
import MessageRus from "../components/rus/MessageRus";
import BehaviorEng from "../components/eng/BehaviorEng";
import BehaviorRus from "../components/rus/BehaviorRus";
import SendFormEng from "../components/eng/SendFormEng";
import {FormType} from "../api/api";

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
                <Route path={'/eng'} element={<BehaviorEng/>}/>
                <Route path={'/eng/letter'} element={<SendFormEng setInfo={setInfo}/>}/>
                <Route path={'/eng/letter/send'} element={<MessageEng info={info}/>}/>
                <Route path={'/eng/no'} element={<BadBehaviorEng/>}/>
                <Route path={'/rus'} element={<BehaviorRus/>}/>
                <Route path={'/rus/letter'} element={<SendFormRus setInfo={setInfo}/>}/>
                <Route path={'/rus/letter/send'} element={<MessageRus info={info}/>}/>
                <Route path={'/rus/no'} element={<BadBehaviorRus/>}/>
                <Route path={"*"} element={<Language/>} />
            </Routes>
        </div>
    )
}

export default RoutesApp;