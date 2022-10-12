import React from "react";
import { Center, Icon, VStack, Text } from "native-base";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import Job from "../interface/job";
import { Feather } from "@expo/vector-icons";
import GmailStyleSwipeableRow from "./GmailStyleSwipableRow";

type Props = {
  job: Job;
};
// https://stackoverflow.com/questions/57086672/element-implicitly-has-an-any-type-because-expression-of-type-string-cant-b

interface Colors {
  offer: string;
  rejected: string;
  applied: string;
  phone: string;
  interview: string;
}

const COLORS: Colors = {
  offer: "tertiary.500",
  rejected: "error.900",
  applied: "#59C3C3",
  phone: "blue.900",
  interview: "dark.500",
};

const JobCard = ({ job }: Props): JSX.Element => {
  const color = COLORS[job.status?.split(" ")[0].toLowerCase() as keyof Colors];
  let logo = `logo-${job.logo}`;
  return (
    <GmailStyleSwipeableRow>
      <Center
        flexDirection={"row"}
        justifyContent={"space-between"}
        borderWidth={4}
        marginLeft={5}
        marginRight={5}
        marginTop={5}
        padding={3}
        borderColor={color}
      >
        <Icon
          //@ts-ignore
          as={<Ionicons name={logo} size={24} color="black" />}
          size={"6xl"}
        />

        <VStack>
          <Text fontSize={"lg"} fontWeight={800} color={"white"}>
            {job.name}
          </Text>
          <Text fontWeight={500} color={"white"}>
            {job.title}
          </Text>
          <Text fontSize={"lg"} fontWeight={800} color={color}>
            {job.status.toLocaleUpperCase()}
          </Text>
        </VStack>

        <Icon
          as={<AntDesign name="hearto" size={24} color="black" />}
          size={"4xl"}
        />
      </Center>
    </GmailStyleSwipeableRow>
  );
};

export default JobCard;
