import React, { useState } from 'react';



const JobPage = ({ jobs, selectedUserId }) => {

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
      salary_weight: 5,
      description: job.jobDescription
    })
  }

  const addJobToUser = (jobId) => {
    fetch(`http://localhost:8080/users/${selectedUserId}/savedJobs`,{
      method: 'POST',
      headers: {'Content-Type': 'text/uri-list'},
      body:`http://localhost:8080/savedJobs/${jobId}`
    })
  }

  const handleJobLiked = (event) => {
    const jobId = event.target.value
    fetch("http://localhost:8080/savedJobs", requestOptions)
    .then(response => response.json())
    .then(job => {addJobToUser(job.id)
      setSelectedJobIndex(selectedJobIndex+1)}
    )
  }

  return (

    <section>
    <h2>{ job.employerName }</h2>
    <h2>{ job.jobTitle }</h2>
    <p> { job.jobDescription } </p>
    <button onClick={() => setSelectedJobIndex(selectedJobIndex+1)}>Next Job</button>
    <button onClick={handleJobLiked} value={ job.jobId }>I Love This Job!</button>
    </section>
  )

};





export default JobPage;
