import { Icon } from "native-base";
import React from "react";
import { RectButton, Swipeable } from "react-native-gesture-handler";
import { AntDesign } from "@expo/vector-icons";
const GmailStyleSwipeableRow = ({ children }): JSX.Element => {
  const renderLeftActions = (progress, dragX): JSX.Element => {
    const scale = dragX.interpolate({
      inputRange: [0, 80],
      outputRange: [0, 1],
      extrapolate: "clamp",
    });

    return (
      <RectButton>
        <Icon
          as={<AntDesign name="hearto" size={24} color="black" />}
          size={"4xl"}
        />
      </RectButton>
    );
  };

  const renderRightActions = (progress, dragX): JSX.Element => {
    const scale = dragX.interpolate({
      inputRange: [-80, 0],
      outputRange: [1, 0],
      extrapolate: "clamp",
    });

    return (
      <RectButton>
        <Icon
          as={<AntDesign name="hearto" size={24} color="black" />}
          size={"4xl"}
        />
      </RectButton>
    );
  };

  return (
    <Swipeable
      leftThreshold={80}
      rightThreshold={41}
      renderLeftActions={renderLeftActions}
      renderRightActions={renderRightActions}
    >
      {children}
    </Swipeable>
  );
};

export default GmailStyleSwipeableRow;
