import React from "react";
import { Center, Icon, VStack ,Text} from "native-base";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import Job from "../interface/job";

type Props = {
    job:Job;
}

const JobCard = ({job}:Props):JSX.Element => {

    return (
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
          as={<Ionicons name={'logo-amazon'} size={24} color="black" />}
          size={"6xl"}
        />

        <VStack>
          <Text fontSize={"lg"} fontWeight={800} color={"white"}>
            {job.name}
          </Text>
          <Text fontWeight={500} color={"white"}>
            {job.title}
          </Text>
          <Text fontSize={"lg"} fontWeight={800} color={"green.400"}>
           {job.status}
          </Text>
        </VStack>

        <Icon
          as={<AntDesign name="hearto" size={24} color="black" />}
          size={"4xl"}
        />
      </Center>
    )
}

export default JobCard