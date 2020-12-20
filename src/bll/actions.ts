export const authActions = {
    setIsLoggedIn: (isLoggedIn: boolean) => ({type: 'SET_IS_LOGGED_IN', isLoggedIn} as const),
    setFetching: (bool:boolean) => ({type: 'SET_FETCHING', bool} as const),
    setMessageRecoverPass: (message: string) => ({type: 'SET_MESSAGE_RECOVER_PASS', message} as const),
    setIsRegistrationComplete: (bool: boolean) => ({type: 'SET_IS_REGISTRATION_COMPLETE', bool} as const),
}

export const appActions = {
    setMessageState: (isShowing:boolean, message:string, isError:boolean) => (
        {type: 'SET_MESSAGE_STATE', payload: {isShowing, message, isError}} as const
    ),
}

