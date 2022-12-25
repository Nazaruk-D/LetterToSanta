import React, {useState} from 'react';
import s from "./CornerLink.module.scss";
import gitIcon from "../../assets/png/gitIcon.png"
import tail from "../../assets/png/xvost.png"


const CornerLink = () => {
    const [state, setState] = useState({})

    const onMouseEnterHandler = () => {
        setTimeout(()=>{
            setState({transform: "rotate(15deg)"})
        },180)
        setTimeout(()=>{
            setState({transform: "rotate(45deg)"})
        },360)
        setTimeout(()=>{
            setState({transform: "rotate(15deg)"})
        },520)
        setTimeout(()=>{
            setState({transform: "rotate(45deg)"})
        },700)
    }

    return (
        <a href="https://github.com/Nazaruk-D">
            <div className={s.cornerContainer} onMouseEnter={onMouseEnterHandler}>
                <img className={s.gitIcon} src={gitIcon} alt="gitIcon"/>
                <img className={s.tail} src={tail} alt="gitIcon" style={state}/>
            </div>
        </a>
    );
};

export default CornerLink;