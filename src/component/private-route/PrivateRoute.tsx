import { FC, ReactNode } from "react"
import { Navigate, useLocation } from "react-router-dom"
import { useAuth } from "../../hooks/use-auth"

interface Props {
   children: ReactNode
}

export const PrivateRoute: FC<Props> = ({ children }) => {
   const location = useLocation()
   const auth = useAuth()

   if (!auth?.user) {
      return <Navigate to={"/login"} state={{ from: location.pathname }} replace /> as any
   } return children as ReactNode
}