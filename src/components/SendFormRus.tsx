import React from 'react';
import s from "../App.module.scss";
import {Field, useFormik} from "formik";
import {FormikErrorType} from "./SendFormEng";
import {useNavigate} from "react-router-dom";

export type FormType = {
    name: string
    email: string
    age: string
    underTree: string
    text: string
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
                errors.email = 'Введите свой email'
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Некорректный email адрес'
            }

            if (!values.name) {
                errors.name = 'Введите своё имя'
            } else if (values.name.length < 4) {
                errors.name = "Имя должно содержать ее менее 4 букв";
            }

            if (!/^[0-9]/i.test(values.age)) {
                errors.age = 'Возраст указывается только цифрами'
            }

            if (values.text.length < 0) {
                errors.text = 'Введи своё сообщение'
            } else if (values.text.length > 200) {
                errors.text = 'Ваше пожелание должно быть до 200 символов'
            }

            return errors
        },
        onSubmit: values => {
            setInfo(values)
            navigate('/rus/letter/send')
        },
    });

    return (
        <form onSubmit={formik.handleSubmit} className={s.form}>
            <div>
                <input
                    placeholder="Имя"
                    className={s.input}
                    {...formik.getFieldProps('name')}
                />
            </div>
            { formik.touched.name && formik.errors.name && <div style={{color:"red"}}>{formik.errors.name}</div>}
            <div>
                <input
                    placeholder="Email"
                    className={s.input}
                    {...formik.getFieldProps('email')}
                />
            </div>
            { formik.touched.email && formik.errors.email && <div style={{color:"red"}}>{formik.errors.email}</div>}
            <div>
                <input
                    placeholder="Сколько тебе лет?"
                    className={s.input}
                    {...formik.getFieldProps('age')}
                />
            </div>
            { formik.touched.age && formik.errors.age && <div style={{color:"red"}}>{formik.errors.age}</div>}
            <div>
                <span>Положить подарок под ёлку?</span>
                <div className={s.underTree}>
                    <span><input type="radio" name="underTree" onChange={formik.handleChange} value={"yes"} checked/> да </span>
                    <span><input type="radio" name="underTree" onChange={formik.handleChange} value={"no"}/> не нужно </span>
                </div>
            </div>

            <textarea
                id="text"
                name="text"
                placeholder="Какой подарок ты хочешь, чтобы я подарил тебе на новый год?"
                className={s.textArea}
                onChange={formik.handleChange}
                value={formik.values.text}
            />
            {formik.touched.text && formik.errors.text && <div style={{color:"red"}}>{formik.errors.text}</div>}
            {formik.touched.name && !formik.errors.name && formik.touched.email && !formik.errors.email &&
                formik.touched.age && !formik.errors.age &&
                <button type="submit" className={s.button}>Отправить</button>
            }
        </form>
    );
};

export default SendFormEng;