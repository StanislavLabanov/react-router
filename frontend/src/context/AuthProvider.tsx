import { FC, ReactNode, createContext, useState } from "react"
import { singIn, singOut } from "./lib"
import { callbackType, authContextProps } from "./type"

interface Props {
   children: ReactNode
}

export const authContext = createContext<undefined | authContextProps>(undefined)

const AuthProvider: FC<Props> = ({ children }) => {
   const [user, setUser] = useState<null | string>(() => localStorage.getItem('user') || null)

   const valueContent = {
      user,
      singIn: (newUser: string, callback: callbackType) => singIn(newUser, callback, setUser),
      singOut: (callback: callbackType) => singOut(callback, setUser)
   }

   return (
      <authContext.Provider value={valueContent}>
         {children}
      </authContext.Provider>
   )
}

export default AuthProvider