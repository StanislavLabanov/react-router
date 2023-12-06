import { FC, ReactNode } from "react"
import { useAuth } from "../context/lib"
import { Navigate, useLocation } from "react-router-dom"

interface Props {
   children: ReactNode
}

const PrivateRoute: FC<Props> = ({ children }) => {
   const location = useLocation()
   const auth = useAuth()

   if (!auth?.user) {
      return <Navigate to={"/login"} state={{ from: location.pathname }} replace /> as any
   } return children as ReactNode
}
export default PrivateRoute