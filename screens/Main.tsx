import { VStack } from "native-base";
import React, { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import Job from "../interface/job";
import JobGrid from "../components/JobGrid";
import Header from "../components/Header";
import StatusBar from "../components/StatusBar";
import JobModal from "../components/JobModal";
import AsyncStorage from "@react-native-async-storage/async-storage";

const FakeJobs: Job[] = [
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

const Main = (): JSX.Element => {
  const [open, setOpen] = useState(false);
  const [jobs, setJobs] = useState<Job[]>([] as Job[]);

  const openModal = () => {
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
  };

  const addJob = async (values: Job) => {
    try {
      // get jobs
      let jobs: Job[] = [];
      const jsonValue = await AsyncStorage.getItem("jobs");
      //check if its not empty (array)
      const jobToAdd: Job = { ...values, logo: values.name.toLowerCase() };

      if (jsonValue) {
        jobs = JSON.parse(jsonValue);
      }

      jobs.push(jobToAdd);
      let jsonJobs = JSON.stringify(jobs);
      await AsyncStorage.setItem("jobs", jsonJobs);
      setJobs((jobs) => [jobToAdd,...jobs]);
      console.log(jobs);
      //if it add new array with job init
      //if its not the parse json push it a then stringy
      //then add it back
    } catch (err) {
      console.log(err);
    } finally {
      closeModal();
    }
  };

  const handleSearch = async(jobName:string) => {
    try{
      const jsonValues = await AsyncStorage.getItem("jobs");
      if (!jsonValues) return;
      const parsedValues = JSON.parse(jsonValues);
    const filteredJobs =  parsedValues.filter((job:Job) => job.name.includes(jobName))
      setJobs(filteredJobs)
    }catch(err){
      console.log(err)
    }
    
  }
  useEffect(() => {
    const getJobs = async () => {
      try {
        await AsyncStorage.clear(); // Remove this later
        await AsyncStorage.setItem("jobs", JSON.stringify(FakeJobs));
        const jsonValues = await AsyncStorage.getItem("jobs");
        if (!jsonValues) return;
        const parsedValues = JSON.parse(jsonValues);
        console.log(parsedValues);
        setJobs(parsedValues);
      } catch (err) {
        console.log(err);
      }
    };

    getJobs();
  }, []);
  return (
    <>
      <VStack
        margin={0}
        backgroundColor={"gray.900"}
        marginBottom={0}
        height={"100%"}
        safeArea
      >
        <StatusBar />

        <Header openModal={openModal} />
        <SearchBar handleSearch={handleSearch}/>
        <JobGrid jobs={jobs} />
      </VStack>
      <JobModal open={open} closeModal={closeModal} addJob={addJob} />
    </>
  );
};

export default Main;
