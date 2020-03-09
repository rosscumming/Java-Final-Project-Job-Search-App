import React, { useState } from 'react';



const JobPage = ({ jobs }) => {

  const [selectedJobIndex, setSelectedJobIndex] = useState(0)

  if (!jobs.length) return null;
  const job = jobs[selectedJobIndex]

  const requestOptions = {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      company: job.employerName,
      title: job.jobTitle,
      salary: job.maximumSalary,
      salaryWeight: 5,
      description: job.jobDescription
    })
  }

  const handleJobLiked = () => {
    fetch("http://localhost:8080/savedJobs", requestOptions)
      .then(response => response.json())
      .then(data => console.log(data));
  }

  return (

    <section>
      <h2>{ job.employerName }</h2>
      <h2>{ job.jobTitle }</h2>
        <p><button onClick={() => setSelectedJobIndex(selectedJobIndex+1)}>Next Job</button>
        <button onClick={handleJobLiked}>I Love This Job!</button>
        </p>
    </section>
  )

};





export default JobPage;
