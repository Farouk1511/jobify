import { Center, Input, Icon } from "native-base";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const SearchBar = ():JSX.Element => {

    return (
        <Center>
        <Input
          size={"lg"}
          w={{ base: "90%" }}
          placeholder="Search"
          marginBottom={3}
          InputLeftElement={
            <Icon
              marginLeft={1}
              as={<Ionicons name="ios-search" size={24} color="black" />}
            />
          }
          paddingLeft={1}
        />
        {/* Search Bar */}
      </Center>
    )
}

export default SearchBar