import React from 'react';
import s from "../LetterContainer.module.scss";
import {useFormik} from "formik";
import {useNavigate} from "react-router-dom";
import {FormType} from "../../../api/api";
import {BiMailSend} from "react-icons/bi";
import {useAppDispatch} from "../../../redux/store";
import {sendMessage} from "../../../redux/letters-reducer";


export type FormikErrorType = {
    name?: string
    email?: string
    age?: string
    underTree?: string
    content?: string
}

type SendFormType = {
    setInfo: (info: FormType) => void
}

const SendFormEng: React.FC<SendFormType> = ({setInfo}) => {
    const navigate = useNavigate()
    const dispatch = useAppDispatch()

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            age: '',
            underTree: 'yes',
            content: '',
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
            } else if (values.name.length < 3) {
                errors.name = "Name must be min 3 characters long.";
            }

            if (!/^\d+$/i.test(values.age)) {
                errors.age = 'Age can only be numbers'
            }

            if (values.content.length < 0) {
                errors.content = 'Write your message'
            } else if (values.content.length > 200) {
                errors.content = 'Wish allowed up to 200 characters'
            }

            return errors
        },
        onSubmit: values => {
            setInfo(values)
            navigate('/eng/letter/send')
        },
    });


    const onClickHandler = () => {
        dispatch(sendMessage(formik.values))
    }

    return (
        <form onSubmit={formik.handleSubmit} className={s.form}>
            <div>
                <input
                    placeholder="Your name"
                    className={s.input}
                    {...formik.getFieldProps('name')}
                />
            </div>
            {formik.touched.name && formik.errors.name && <div style={{color: "red"}}>{formik.errors.name}</div>}
            <div>
                <input
                    placeholder="Your email"
                    className={s.input}
                    {...formik.getFieldProps('email')}
                />
            </div>
            {formik.touched.email && formik.errors.email && <div style={{color: "red"}}>{formik.errors.email}</div>}
            <div>
                <input
                    placeholder="Your age"
                    className={s.input}
                    {...formik.getFieldProps('age')}
                />
            </div>
            {formik.touched.age && formik.errors.age && <div style={{color: "red"}}>{formik.errors.age}</div>}
            <div>
                <span>Put a present under the Christmas tree?</span>
                <div className={s.underTree}>
                    <span><input type="radio" name="underTree" onChange={formik.handleChange} value={"yes"} checked/> yes </span>
                    <span><input type="radio" name="underTree" onChange={formik.handleChange} value={"no"}/> no </span>
                </div>
            </div>

            <textarea
                id={'content'}
                placeholder="What gift do you want?"
                autoComplete={"on"}
                className={s.textArea}
                {...formik.getFieldProps('content')}
            />
            {formik.touched.content && formik.errors.content &&
                <div style={{color: "red"}}>{formik.errors.content}</div>}
            {formik.touched.name && formik.touched.email && formik.touched.age &&
                !formik.errors.name && !formik.errors.email && !formik.errors.age &&
                <button type="submit" className={s.button} onClick={onClickHandler}>
                    <BiMailSend style={{fontSize: "22px", position: "absolute", bottom: "3px"}}/>
                </button>
            }
        </form>
    );
};

export default SendFormEng;