import { VStack } from "native-base";
import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import Job from "../interface/job";
import JobGrid from "../components/JobGrid";
import Header from "../components/Header";
import StatusBar from "../components/StatusBar";
import JobModal from "../components/JobModal";

const Main = (): JSX.Element => {
  const [open,setOpen] = useState(false)
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

 const openModal = () => {
  setOpen(true)
 }

 const closeModal = () => {
  setOpen(false)
 }
  return (
    
   <>
     <VStack margin={0} backgroundColor={"gray.900"} marginBottom={0} safeArea>
      <StatusBar />

      <Header openModal={openModal} />
      <SearchBar />
      <JobGrid jobs={jobs} />
    </VStack>
      <JobModal open={open} closeModal={closeModal} openModal={openModal} />
   </>
  );
};

export default Main;
