import React from 'react';
import s from "./LetterContainer.module.scss";
import RoutesApp from "../../Routes/RoutesApp";
import TotalEmails from "./TotalEmails/TotalEmails";
import {SyncLoader} from "react-spinners";
import {useAppSelector} from "../../redux/store";


const LetterContainer = () => {
    const isInitialized = useAppSelector(state => state.letters.isInitialized)

    return (
        <div className={s.letterContainer}>
            <div className={s.letter}>
                {isInitialized
                    ? <>
                        <RoutesApp/>
                        <TotalEmails/>
                    </>
                    : <SyncLoader size={10} color={"#db1616"}/>
                }
            </div>
        </div>
    );
};

export default LetterContainer;