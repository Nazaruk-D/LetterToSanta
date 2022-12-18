import React from 'react';
import s from "../App.module.scss";
import {setIn, useFormik} from "formik";
import {useNavigate} from "react-router-dom";

export type FormType = {
    name: string
    email: string
    age: string
    underTree: string
    text: string
}

export type FormikErrorType = {
    name?: string
    email?: string
    age?: string
    underTree?: string
    text?: string
}

type SendFormType = {
    setInfo: (info: FormType) => void
}

const SendFormEng: React.FC<SendFormType> = ({setInfo}) => {

    const navigate = useNavigate()

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            age: '',
            underTree: '',
            text: '',
        },
        validate: (values) => {
            const errors: FormikErrorType = {}
            if (!values.email) {
                errors.email = 'Email required'
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address'
            }

            if (!values.name) {
                errors.name = 'Name required'
            } else if (values.name.length < 4) {
                errors.name = "Name must be min 4 characters long.";
            }

            if (!/^[0-9]/i.test(values.age)) {
                errors.age = 'Age can only be numbers'
            }

            if (values.text.length < 0) {
                errors.text = 'Write your message'
            } else if (values.text.length > 200) {
                errors.text = 'Wish allowed up to 200 characters'
            }


            return errors
        },
        onSubmit: values => {
            setInfo(values)
            navigate('/eng/letter/send')
        },
    });



    return (
        <form onSubmit={formik.handleSubmit} className={s.form}>
            <div>
                <input
                    placeholder="Your name"
                    className={s.input}
                    {...formik.getFieldProps('name')}
                />
            </div>
            { formik.touched.name && formik.errors.name && <div style={{color:"red"}}>{formik.errors.name}</div>}
            <div>
                <input
                    placeholder="Your email"
                    className={s.input}
                    {...formik.getFieldProps('email')}
                />
            </div>
            { formik.touched.email && formik.errors.email && <div style={{color:"red"}}>{formik.errors.email}</div>}
            <div>
                <input
                    placeholder="Your age"
                    className={s.input}
                    {...formik.getFieldProps('age')}
                />
            </div>
            { formik.touched.age && formik.errors.age && <div style={{color:"red"}}>{formik.errors.age}</div>}
            <div>
                <span>Put a present under the Christmas tree?</span>
                <div className={s.underTree}>
                    <span><input type="radio"  name="underTree" onChange={formik.handleChange} value={"yes"} checked/> yes </span>
                    <span><input type="radio" name="underTree" onChange={formik.handleChange} value={"no"}/> no </span>
                </div>
            </div>

            <textarea
                id={'text'}
                placeholder="What gift do you want?"
                autoComplete={"on"}
                className={s.textArea}
                {...formik.getFieldProps('text')}
            />
            {formik.touched.text && formik.errors.text && <div style={{color:"red"}}>{formik.errors.text}</div>}
            {formik.touched.name && formik.touched.email && formik.touched.age &&
                !formik.errors.name && !formik.errors.email && !formik.errors.age &&
                <button type="submit" className={s.button}>Submit</button>
            }
        </form>
    );
};

export default SendFormEng;