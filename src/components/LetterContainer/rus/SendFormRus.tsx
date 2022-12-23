import React from 'react';
import s from "../LetterContainer.module.scss";
import {useFormik} from "formik";
import {FormikErrorType} from "../eng/SendFormEng";
import {useNavigate} from "react-router-dom";
import {FormType} from "../../../api/api";
import {BiMailSend} from "react-icons/bi";
import {useAppDispatch} from "../../../redux/store";
import {sendMessage} from "../../../redux/letters-reducer";


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
                errors.email = 'Введите свой email'
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Некорректный email адрес'
            }

            if (!values.name) {
                errors.name = 'Введите своё имя'
            } else if (values.name.length < 3) {
                errors.name = "Имя должно содержать ее менее 3 букв";
            }

            if (!/^\d+$/i.test(values.age)) {
                errors.age = 'Возраст указывается только цифрами'
            }

            if (values.content.length < 0) {
                errors.content = 'Введи своё сообщение'
            } else if (values.content.length > 200) {
                errors.content = 'Ваше пожелание должно вместиться до 200 символов'
            }

            return errors
        },
        onSubmit: values => {
            setInfo(values)
            navigate('/rus/letter/send')
        },
    });


    const onClickHandler = () => {
        dispatch(sendMessage(formik.values))
    }

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
                id={'content'}
                placeholder="Какой подарок ты хочешь на новый год?"
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