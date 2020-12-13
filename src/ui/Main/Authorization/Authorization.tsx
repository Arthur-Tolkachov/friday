import React from 'react'
import {useFormik} from 'formik'
import s from './Authorization.module.css'
import SuperInputText from '../../common/SuperInputText/SuperInputText'
import SuperButton from '../../common/SuperButton/SuperButton'
import AuthContainer from '../../common/AuthContainer/AuthContainer'
import Title from '../../common/Title/Title'
import SuperCheckbox from '../../common/SuperCheckbox/SuperCheckbox'

type FormikErrorType = {
    email?: string
    password?: string
    validatePassword?: string
}

const Authorization: React.FC = () => {
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            rememberMe: false
        },
        validate: (values) => {
            const errors: FormikErrorType = {}

            if (!values.email) {
                errors.email = 'Required'
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address'
            }

            if (!values.password) {
                errors.password = 'Required'
            }

            return errors
        },
        onSubmit: values => {
            console.log(values)
        },
    })

    return (
        <div>
            <AuthContainer className={s.container}>
                <Title value="Sign in" className={s.title}/>
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
                        <SuperCheckbox {...formik.getFieldProps("rememberMe")}>
                            Remember me
                        </SuperCheckbox>
                        <SuperButton className={s.btn} type="submit">Sign in</SuperButton>
                    </form>
                </div>
            </AuthContainer>
        </div>
    )
}

export default Authorization