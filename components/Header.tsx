import { Center, IconButton, Icon,Text } from "native-base";
import { Ionicons } from "@expo/vector-icons";
import React from "react";

type Props = {
  openModal: () => void
}

const Header = ({openModal}:Props):JSX.Element => {

    return (
        <Center
        justifyContent={"space-between"}
        marginLeft={5}
        marginRight={5}
        flexDirection={"row"}
      >
        <Text fontSize={"4xl"} fontWeight={800} color={"white"}>
          Jobify
        </Text>
        <IconButton
        onPress={openModal}
          icon={
            <Icon
              as={<Ionicons name="add-circle-sharp" size={50} color="white" />}
            />
          }
          _icon={{
            color: "red.700",
            size: "5xl",
          }}
          _pressed={{
            bg: "transparent",
            _ios: {
              _icon: {
                color: "muted.700",
                size: "5xl",
              },
            },
          }}
        />
      </Center>
    )
}

export default Header