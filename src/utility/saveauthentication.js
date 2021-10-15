import {authenticated} from "../components/App";

export const  saveAuthentication = (result) => {
    localStorage.setItem('authenticated', result.success)
    localStorage.setItem('userid', result.userid)
    localStorage.setItem('token', result.token)

}
