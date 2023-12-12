import { FC } from "react"
import { Routes, Route } from 'react-router-dom';
import { Category, Home, Login, NotFound } from "./dynamicPages";
import { PrivateRoute } from "../component/private-route";
import { NavMenu } from "../layout/nav-menu";

export const RoutesComponent: FC = () => {
   return (
      <>
         <Routes>
            <Route element={<NavMenu />}>
               <Route path="/" element={<Home />} />
               <Route path="/:name" element={<PrivateRoute><Category /></PrivateRoute>} />
               <Route path="*" element={<NotFound />} />
            </Route>
            <Route path="/login" element={<Login />} />
         </Routes>
      </>
   )
}