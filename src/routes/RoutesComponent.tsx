import { FC } from "react"
import { Routes, Route } from 'react-router-dom';
import Nav from "../layout/Nav";
import PrivateRoute from "../component/PrivateRoute";
import { Category, Home, Login, NotFound } from "./dynamicPages";

const RoutesComponent: FC = () => {
   return (
      <>
         <Routes>
            <Route element={<Nav />}>
               <Route path="/" element={<Home />} />
               <Route path="/:name" element={<PrivateRoute><Category /></PrivateRoute>} />
               <Route path="*" element={<NotFound />} />
            </Route>
            <Route path="/login" element={<Login />} />
         </Routes>
      </>
   )
}

export default RoutesComponent