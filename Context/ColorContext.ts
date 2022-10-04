import React, { createContext } from "react";
import Colors from "../interface/color";

  const COLORS:Colors = {
    offer:'tertiary.500',
    rejected:'error.900',
    applied:'#59C3C3',
    phone:'blue.900',
    interview:'dark.500',
  }

  const ColorContext = createContext(COLORS)

  export default ColorContext