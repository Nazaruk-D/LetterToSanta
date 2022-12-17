import React from 'react';
import s from "../App.module.scss";
import {setIn, useFormik} from "formik";

export type FormType = {
    name: string
    email: string
    age: string
    underTree: string
    text: string
}

type SendFormType = {
    setStatus: () => void
    setInfo: (obj: FormType) => void
}

const SendForm: React.FC<SendFormType> = ({setStatus, setInfo}) => {

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            age: '',
            underTree: '',
            text: '',
        },
        onSubmit: values => {
            // alert(JSON.stringify(values, null, 2));
            console.log(values)
            setInfo(values)
            setStatus()
        },
    });

    return (
        <form onSubmit={formik.handleSubmit} className={s.form}>
            <div>
                <input
                    id="name"
                    name="name"
                    type="name"
                    placeholder="Your name"
                    className={s.input}
                    onChange={formik.handleChange}
                    value={formik.values.name}
                />
            </div>

            <div>
                <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Your email"
                    className={s.input}
                    onChange={formik.handleChange}
                    value={formik.values.email}
                />
            </div>

            <div>
                <input
                    id="age"
                    name="age"
                    type="age"
                    placeholder="Your age"
                    className={s.input}
                    onChange={formik.handleChange}
                    value={formik.values.age}
                />
            </div>

            <div>
                <span>Put a present under the Christmas tree?</span>
                <div className={s.underTree}>
                    <span><input type="radio" name="underTree" onChange={formik.handleChange} value={"yes"}/> yes </span>
                    <span><input type="radio" name="underTree" onChange={formik.handleChange} value={"no"}/> no </span>
                </div>
            </div>

            <textarea
                id="text"
                name="text"
                placeholder="What gift do you want?"
                className={s.textArea}
                onChange={formik.handleChange}
                value={formik.values.text}
            />

            <button type="submit" className={s.button}
                    // onClick={setIsGood}
            >Submit</button>
        </form>
    );
};

export default SendForm;