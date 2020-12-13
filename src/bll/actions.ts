export const authActions = {
    setIsLoggedIn(isLoggedIn: boolean) {
        return {type: 'SET_IS_LOGGED_IN', isLoggedIn} as const
    },
    setFetching: (bool:boolean) => ({type: 'SET_FETCHING', bool} as const),
}



