import Constants from "expo-constants";
import React from "react";
import { View } from "native-base";
import { StatusBar as Bar} from "expo-status-bar";

const StatusBar = ():JSX.Element => {

    return (
        <View
        backgroundColor={"dark.50"}
        zIndex={1}
        height={Constants.statusBarHeight}
      >
        <Bar style="light" />
      </View>
    )
}

export default StatusBar