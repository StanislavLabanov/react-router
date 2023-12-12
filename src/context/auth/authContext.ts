import { createContext } from "react";
import { authContextProps } from "./provider/type";

export const authContext = createContext<undefined | authContextProps>(undefined)