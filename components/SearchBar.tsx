import { Center, Input, Icon } from "native-base";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

type Props = {
  handleSearch: (jobName:string) => Promise<void>
}

const SearchBar = ({handleSearch}:Props):JSX.Element => {

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
          onChangeText={handleSearch}
          color="#fff"
        />
        {/* Search Bar */}
      </Center>
    )
}

export default SearchBar