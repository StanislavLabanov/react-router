import { createContext } from "react";
import { authContextProps } from "../type/type";

export const authContext = createContext<undefined | authContextProps>(undefined)