import React from "react";
import { NativeBaseProvider, } from "native-base";
import Main from "./screens/Main";
import ColorContext from "./Context/ColorContext";
import Colors from './interface/color'

const COLORS:Colors = {
  offer:'tertiary.500',
  rejected:'error.900',
  applied:'#59C3C3',
  phone:'blue.900',
  interview:'dark.500',
}

export default function App() {
  return (
    <NativeBaseProvider>
      <ColorContext.Provider value={COLORS}>
      <Main />
      </ColorContext.Provider>
    </NativeBaseProvider>
  );
}
