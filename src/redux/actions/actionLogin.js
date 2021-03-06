import { typesLogin } from "../types/typesLogin"
import { getAuth, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth"
import { google } from "../../firebase/firebaseConfig" 

export const logoutAsync = () => {
    return (dispatch) => {
        const auth = getAuth()
        signOut(auth)
            .then((user) => {
                console.log('Adios')
                dispatch(logout())
            })
            .catch(error => {
                console.warn(error)
            })
    }
}

export const logout = () => {
    return {
        type: typesLogin.logout
    }
}

export const loginAsync = (email, password) => {
    return (dispatch) => {
        const auth = getAuth()
        signInWithEmailAndPassword(auth, email, password)
            .then(({ user }) => {
                dispatch(loginSync(user.email, user.password))
                console.log('Usuario autorizado')                              
                alert('Bienvenid@ '+ user.email )
            })
            .catch(error => {
                console.warn(error, 'No autorizado')
                
            })
    }
}

export const loginSync = (user, pass) => {
    return {
        type: typesLogin.login,
        payload: { user, pass }
    }
}

export const loginGoogle = () => {
    return (dispatch) => {
        const auth = getAuth()
        signInWithPopup(auth, google)
            .then(({ user }) => {
                console.log(user, 'Usuario autorizado')
                alert('Bienvenid@ '+ user.email )
            })
            .catch(error => {
                console.warn(error, 'No autorizado')
            })
    }
}

export const loginSincrono = (id, displayname) => {
    return {
        type: typesLogin.login,
        payload: {
            id,
            displayname
        }
    }
}