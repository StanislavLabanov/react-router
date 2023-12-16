import { callbackType, setUserType } from "../../type/type"


export const singIn = (newUser: string, callback: callbackType, setUser: setUserType) => {
   setUser(newUser)
   localStorage.setItem('user', newUser)
   callback()
}

export const singOut = (callback: callbackType, setUser: setUserType) => {
   setUser(null)
   localStorage.removeItem('user')
   callback()
}