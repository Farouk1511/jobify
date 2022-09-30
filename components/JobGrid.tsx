import React from "react";
import { ScrollView } from "native-base";
import JobCard from "./JobCard";
import Job from '../interface/job'

type Props = {
   jobs:Job[];
}


const JobGrid = ({jobs}:Props):JSX.Element => {

   return (
      <ScrollView backgroundColor={"dark.50"}>
        {/* Jobs */}
        {jobs.map((job) => (<JobCard job={job} key={job.name}/>))}
      </ScrollView>
   )

}

export default JobGrid