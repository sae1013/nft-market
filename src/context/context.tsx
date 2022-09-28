import React from "react";
import { haltLoginContextType } from "../types/index";

export const haltContext = React.createContext<haltLoginContextType>({
  isHaltLogin: false,
  haltLoginHandler: () => {},
});
