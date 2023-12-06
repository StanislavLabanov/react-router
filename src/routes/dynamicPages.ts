import { lazy } from "react";

const dinamicPageFunction = (name: string) => {
   return lazy(() => import(`../pages/${name}`).then(module => ({ default: module[name] })))
}

export const Category = dinamicPageFunction('Category')
export const Home = dinamicPageFunction('Home')
export const Login = dinamicPageFunction('Login')
export const NotFound = dinamicPageFunction('NotFound')