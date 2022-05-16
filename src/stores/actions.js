export const login = (con) => {
    return  { 
        type: "login",
        payload: con
    }
}

export const logout = (con) => {
    return {
        type: "logout",
        payload: con
    }
}

const actionCreators = {
    login,
    logout
}

export default actionCreators;