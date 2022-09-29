import {
  Box,
  Center,
  Icon,
  IconButton,
  Input,
  ScrollView,
  Text,
  VStack,
  View,
} from "native-base";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { Platform } from "react-native";
import Constants from "expo-constants";

const Main = (): JSX.Element => {
  return (
    <VStack margin={0} backgroundColor={"dark.50"} marginBottom={0} safeArea>
      {Platform.OS === "ios" ? (
        <View
          backgroundColor={"dark.50"}
          zIndex={1}
          height={Constants.statusBarHeight}
        >
          <StatusBar backgroundColor="red" style="light" />
        </View>
      ) : (
        <></>
      )}
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
      <Center>
        <Input
          size={"lg"}
          w={{ base: "90%" }}
          placeholder="Search"
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
      <ScrollView backgroundColor={"dark.50"}>
        {/* Jobs */}
        <Center
          flexDirection={"row"}
          justifyContent={"space-between"}
          borderWidth={4}
          marginLeft={5}
          marginRight={5}
          marginTop={5}
          padding={3}
          borderColor={"green.400"}
        >
          <Icon
            as={<AntDesign name="facebook-square" size={24} color="black" />}
            size={"6xl"}
          />

          <VStack>
            <Text fontSize={"lg"} fontWeight={800} color={"white"}>
              Facebook
            </Text>
            <Text fontWeight={500} color={"white"}>
              Software Engineer
            </Text>
            <Text fontSize={"lg"} fontWeight={800} color={"green.400"}>
              Offer
            </Text>
          </VStack>

          <Icon
            as={<AntDesign name="hearto" size={24} color="black" />}
            size={"4xl"}
          />
        </Center>
        <Center
          flexDirection={"row"}
          justifyContent={"space-between"}
          borderWidth={4}
          marginLeft={5}
          marginRight={5}
          marginTop={5}
          padding={3}
          borderColor={"info.300"}
        >
          <Icon
            as={<AntDesign name="instagram" size={24} color="black" />}
            size={"6xl"}
          />

          <VStack>
            <Text fontSize={"lg"} fontWeight={800} color={"white"}>
              Instgram
            </Text>
            <Text fontWeight={500} color={"white"}>
              Software Engineer
            </Text>
            <Text fontSize={"lg"} fontWeight={800} color={"info.300"}>
              Applied
            </Text>
          </VStack>

          <Icon
            as={<AntDesign name="hearto" size={24} color="black" />}
            size={"4xl"}
          />
        </Center>
        <Center
          flexDirection={"row"}
          justifyContent={"space-between"}
          borderWidth={4}
          marginLeft={5}
          marginRight={5}
          marginTop={5}
          padding={3}
          borderColor={"white"}
          color={"white"}
        >
          <Icon
            as={<FontAwesome name="snapchat-ghost" size={24} color="black" />}
            size={"6xl"}
          />

          <VStack>
            <Text fontSize={"lg"} fontWeight={800} color={"white"}>
              Snap Inc.
            </Text>
            <Text fontWeight={500} color={"white"}>
              Software Engineer
            </Text>
            <Text fontSize={"lg"} fontWeight={800} color={"white"}>
              Rejected
            </Text>
          </VStack>

          <Icon
            as={<AntDesign name="hearto" size={24} color="black" />}
            size={"4xl"}
          />
        </Center>
        <Center
          flexDirection={"row"}
          justifyContent={"space-between"}
          borderWidth={4}
          marginLeft={5}
          marginRight={5}
          marginTop={5}
          padding={3}
          borderColor={"yellow.300"}
        >
          <Icon
            as={<FontAwesome5 name="microsoft" size={24} color="black" />}
            size={"6xl"}
          />

          <VStack>
            <Text fontSize={"lg"} fontWeight={800} color={"white"}>
              Microsoft
            </Text>
            <Text fontWeight={500} color={"white"}>
              {" "}
              Software Engineer
            </Text>
            <Text fontSize={"lg"} fontWeight={800} color={"yellow.300"}>
              Phone Screen
            </Text>
          </VStack>

          <Icon
            as={<AntDesign name="hearto" size={24} color="black" />}
            size={"4xl"}
          />
        </Center>
        <Center
          flexDirection={"row"}
          justifyContent={"space-between"}
          borderWidth={4}
          marginLeft={5}
          marginRight={5}
          marginTop={5}
          padding={3}
          borderColor={"red.600"}
        >
          <Icon
            as={<FontAwesome5 name="shopify" size={24} color="black" />}
            size={"6xl"}
          />

          <VStack>
            <Text fontSize={"lg"} fontWeight={800} color={"white"}>
              Shopify
            </Text>
            <Text fontWeight={500} color={"white"}>
              Software Engineer
            </Text>
            <Text fontSize={"lg"} fontWeight={800} color={"red.600"}>
              Interview
            </Text>
          </VStack>

          <Icon
            as={<AntDesign name="hearto" size={24} color="black" />}
            size={"4xl"}
          />
        </Center>
      </ScrollView>
    </VStack>
  );
};

export default Main;
