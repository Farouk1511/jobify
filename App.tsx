import React from "react";
import { NativeBaseProvider, Box, View } from "native-base";
import Main from "./screens/Main";

export default function App() {
  return (
    <NativeBaseProvider>
      <Main />
    </NativeBaseProvider>
  );
}
