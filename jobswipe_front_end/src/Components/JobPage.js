import React, { useState } from 'react';
import NavBar from './NavBar';



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

  const addJobToUserDislikes = (jobLink) => {
    fetch(`http://localhost:8080/users/${selectedUserId}/dislikedJobs`,{
      method: 'POST',
      headers: {'Content-Type': 'text/uri-list'},
      body: jobLink
    })
  }

  const handleJobLiked = (event) => {
    fetch("http://localhost:8080/savedJobs", requestOptions)
    .then(response => response.json())
    .then(job => {addJobToUser(job.id)
      setSelectedJobIndex(selectedJobIndex+1)}
    )
  }

  const handleJobDisliked = (event) => {
    fetch("http://localhost:8080/dislikedJobs", {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        reedId: job.jobId
      })
    })
    .then(response => response.json())
    .then(job => {addJobToUserDislikes(job['_links'].dislikedJob.href)
      setSelectedJobIndex(selectedJobIndex + 1)}
    )
  }

  return (

    <section>
    <NavBar />
    <h2>{ job.employerName }</h2>
    <h2>{ job.jobTitle }</h2>
    <p> { job.jobDescription } </p>
    <button onClick={handleJobDisliked} value={job.jobId}>No Thankyou!</button>
    <button onClick={handleJobLiked} value={ job.jobId }>I Love This Job!</button>
    </section>
  )

};





export default JobPage;
