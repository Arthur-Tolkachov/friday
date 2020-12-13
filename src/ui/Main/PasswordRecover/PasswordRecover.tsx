import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {useFormik} from 'formik'
import AuthContainer from '../../common/AuthContainer/AuthContainer'
import s from './PasswordRecover.module.css'
import Title from '../../common/Title/Title'
import SuperInputText from '../../common/SuperInputText/SuperInputText'
import SuperButton from '../../common/SuperButton/SuperButton'
import {authThunks} from '../../../bll/thunks'
import {AppStateType} from '../../../bll/store'
import Preloader from '../../common/Preloader/Preloader'

type FormikErrorType = {
    email?: string
}

const PasswordRecover: React.FC = () => {
    const dispatch = useDispatch()
    const messageRecoverPass = useSelector<AppStateType, string | null>(state => state.auth.messageRecoverPass)
    const isFetching = useSelector<AppStateType, boolean>(state => state.auth.isFetching)

    const formik = useFormik({
        initialValues: {
            email: ''
        },
        validate: (values) => {
            const errors: FormikErrorType = {}

            if (!values.email) {
                errors.email = 'Required'
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address'
            }

            return errors
        },
        onSubmit: values => {
            dispatch(authThunks.recoverPassword(values.email))
        },
    })

    return (
        <div>
            <AuthContainer className={s.container}>
                <Title value="Recover password" className={s.title}/>
                <div className={s.body}>
                    {messageRecoverPass
                        ? <div style={{textAlign: 'center'}}>
                            <div>{messageRecoverPass}</div>
                            <div>Check your email :)</div>
                        </div>

                        : <form onSubmit={formik.handleSubmit}>
                            <SuperInputText className={s.input}
                                            type="email"
                                            placeholder="email"
                                            error={formik.touched.email && formik.errors.email ? formik.errors.email : null}
                                            {...formik.getFieldProps('email')} />
                            {isFetching
                                ? <Preloader style={{marginTop: '10px'}}/>
                                : < SuperButton className={s.btn} type='submit'>Recover</SuperButton>
                            }
                        </form>
                    }
                </div>
            </AuthContainer>
        </div>
    )
}

export default PasswordRecover