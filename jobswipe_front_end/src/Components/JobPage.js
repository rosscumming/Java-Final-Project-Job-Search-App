import React, { useState } from 'react';



const JobPage = ({ jobs }) => {

  const [selectedJobIndex, setSelectedJobIndex] = useState(0)

  if (!jobs.length) return null;
  const job = jobs[selectedJobIndex]

  return (

    <section>
      <h1>New Job Details</h1>
      <h2>Company Name</h2>
      <h2>Job Title</h2>
        <button>LIKE</button><button>DISLIKE</button>
        <p>Description:</p><p>Salary: £</p>
        <ul>{ job.jobTitle }<button onClick={() => setSelectedJobIndex(selectedJobIndex+1)}>Next Job</button></ul>
    </section>
  )

};





export default JobPage;
