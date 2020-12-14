import React from 'react'
import Title from '../../common/Title/Title'
import s from './Registration.module.css'
import AuthContainer from '../../common/AuthContainer/AuthContainer'
import SuperInputText from '../../common/SuperInputText/SuperInputText'
import SuperButton from '../../common/SuperButton/SuperButton'
import {useFormik} from 'formik'
import {authThunks} from '../../../bll/thunks'
import {useDispatch, useSelector} from 'react-redux'
import {AppStateType} from '../../../bll/store'
import Preloader from '../../common/Preloader/Preloader'
import {RegistrationDataType} from '../../../utils/types/registration-types';
import { NavLink } from 'react-router-dom'
import SuperButtonLink from '../../common/SuperButtonLink/SuperButtonLink';
import {PATH} from '../../Routes';

type FormikErrorType = {
    email?: string
    password?: string
    validatePassword?: string
}


const Registration:React.FC = () => {
    const dispatch = useDispatch()
    const isFetching = useSelector<AppStateType, boolean>(state => state.auth.isFetching)

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            validatePassword: '',
        },
        validate: (values) => {
            const errors: FormikErrorType = {};

            if (!values.email) {
                errors.email = 'required field';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'invalid email address';
            }

            if (!values.password) {
                errors.password = 'required field';
            } else if (values.password.length < 8) {
                errors.password = 'must be more than 7 characters';
            }

            if (!values.validatePassword) {
                errors.validatePassword = 'required field';
            } else if (values.password !== values.validatePassword) {
                errors.validatePassword = 'passwords are different';
                errors.password = 'passwords are different';
            } else if (values.validatePassword.length < 8) {
                errors.validatePassword = 'must be more than 7 characters';
            }

            return errors;
        },
        onSubmit: values => {
            const data:RegistrationDataType = {
                email: values.email,
                password: values.password,
            }
            dispatch(authThunks.setRegistrationData(data))
        },
    });

    return (
        <div className={s.wrapper}>
            <AuthContainer className={s.container}>
                <Title value="Registration" className={s.title}/>
                <div className={s.body}>
                    <form onSubmit={formik.handleSubmit}>
                        <SuperInputText className={s.input}
                                        type="email"
                                        placeholder="email"
                                        error={formik.touched.email && formik.errors.email ? formik.errors.email : null}
                                        {...formik.getFieldProps("email")} />

                        <SuperInputText className={s.input}
                                        type="password"
                                        placeholder="password"
                                        error={formik.touched.password && formik.errors.password ? formik.errors.password : null}
                                        {...formik.getFieldProps("password")} />

                        <SuperInputText className={s.input}
                                        type="password"
                                        placeholder="repeat password"
                                        error={formik.touched.validatePassword && formik.errors.validatePassword ? formik.errors.validatePassword : null}
                                        {...formik.getFieldProps("validatePassword")} />

                        {isFetching
                            ? <Preloader style={{marginTop: "20px"}}/>
                            : <SuperButton className={s.btn}>Sign up</SuperButton>
                        }
                        <SuperButtonLink to={PATH.AUTH} className={s.link}>Sign in</SuperButtonLink>
                    </form>
                </div>
            </AuthContainer>
        </div>
    )
}

export default Registration