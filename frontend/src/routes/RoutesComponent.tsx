import { FC } from "react"
import { Routes, Route } from 'react-router-dom';
import Home from "../pages/Home";
import Category from "../pages/Category";
import Element from "../pages/Element";
import NotFound from "../pages/NotFound";
import Nav from "../layout/Nav";
import Login from "../pages/Login";
import PrivateRoute from "../component/PrivateRoute";

const RoutesComponent: FC = () => {
   return (
      <>
         <Routes>
            <Route element={<Nav />}>
               <Route path="/" element={<Home />} />
               <Route path="/:name" element={<PrivateRoute><Category /></PrivateRoute>} />
               <Route path="/:name/:id" element={<PrivateRoute><Element /></PrivateRoute>} />
               <Route path="*" element={<NotFound />} />
            </Route>
            <Route path="/login" element={<Login />} />
         </Routes>
      </>
   )
}

export default RoutesComponent