import React from 'react';
import s from "../App.module.scss";
import SendForm, {FormType} from "./SendForm";

type LetterEngType = {
    setStatus: (status: string) => void
    status: string
    setInfo: (info: FormType) => void
    info: FormType
}


const LetterEng: React.FC<LetterEngType> = ({setInfo,info,setStatus,status}) => {
    return (
        <div>
            {status === "start" && <div className={s.behavior}>
                <div>Have you been well behaved in 2022?</div>
                <div><input type="radio" name="behavior" onChange={() => setStatus("yes")}/> yes</div>
                <div><input type="radio" name="behavior" onChange={() => setStatus("no")}/> no</div>
            </div>
            }

            {status === "yes" && <SendForm setStatus={()=>setStatus("submit")} setInfo={setInfo}/>}
            {status === "no" && <div>Sorry... I hope you do better next year</div>}
            {status === "submit" && <div>
                <div>Thanks {info.name} </div>
                <div>Your letter with the following wishes: {info.text} to Santa Claus sent!</div>
                <div>Expect Your Gift {info.underTree === "yes" && "under tree"} on January 01, 2023!</div>
                <div>Happy New Year!</div>
            </div>}
            {/*<button onClick={()=> console.log(info)}>123</button>*/}
        </div>
    );
};

export default LetterEng;