import { Dispatch, SetStateAction } from "react"

export type callbackType = () => void
export type setUserType = Dispatch<SetStateAction<null | string>>

export interface authContextProps {
   user: string | null
   singIn: (newUser: string, callback: callbackType) => void
   singOut: (callback: callbackType) => void
}