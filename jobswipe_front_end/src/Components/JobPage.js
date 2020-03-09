import React, { useState } from 'react';



const JobPage = ({ jobs }) => {

  const [selectedJobIndex, setSelectedJobIndex] = useState(0)
  const [activeUserId, setActiveUserId] = useState(1)

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

  const addJobToUser = () => {
  fetch(`http://localhost:8080/users/${activeUserId}/savedJobs`,{
    method: 'PATCH',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      savedJobs: `http://localhost:8080/savedJobs/${job.id}`
    })
  })
}

  const handleJobLiked = () => {
    fetch("http://localhost:8080/savedJobs", requestOptions)
    .then(response => response.json())
    .then(() => addJobToUser())
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
