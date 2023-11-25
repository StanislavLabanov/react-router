import { FC } from "react"
import { Routes, Route } from 'react-router-dom';
import Home from "../pages/Home";
import Category from "../pages/Category";
import Element from "../pages/Element";
import NotFound from "../pages/NotFound";
import Nav from "../layout/Nav";

const RoutesComponent: FC = () => {
   return (
      <>
         <Nav />
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:name" element={<Category />} />
            <Route path="/:name/:id" element={<Element />} />
            <Route path="*" element={<NotFound />} />
         </Routes>
      </>
   )
}

export default RoutesComponent