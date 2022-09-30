import { VStack } from "native-base";
import React from "react";
import SearchBar from "../components/SearchBar";
import Job from "../interface/job";
import JobGrid from "../components/JobGrid";
import Header from "../components/Header";
import StatusBar from "../components/StatusBar";

const Main = (): JSX.Element => {
  const jobs: Job[] = [
    {
      name: "Facebook",
      title: "Software Developer",
      status: "Offer",
      logo: "facebook",
    },
    {
      name: "Instgram",
      title: "Software Developer",
      status: "Rejected",
      logo: "instagram",
    },
    {
      name: "Snap Inc.",
      title: "Software Developer",
      status: "Applied",
      logo: "snapchat",
    },
    {
      name: "Reddit",
      title: "Software Developer",
      status: "Interview",
      logo: "reddit",
    },
    {
      name: "Apple",
      title: "Software Developer",
      status: "Phone Interview",
      logo: "apple",
    },
    {
      name: "Amazon",
      title: "Software Developer",
      status: "Offer",
      logo: "amazon",
    },
  ];

  return (
    <VStack margin={0} backgroundColor={"dark.50"} marginBottom={0} safeArea>
      <StatusBar />

      <Header />
      <SearchBar />
      <JobGrid jobs={jobs} />
    </VStack>
  );
};

export default Main;
