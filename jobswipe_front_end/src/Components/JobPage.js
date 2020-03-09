import React from 'react';

const JobPage = ({ jobs }) => {
  const jobsList = jobs.map((job, id) => {
    return <li key={id}>{job.jobTitle}</li>
  })
    return (

    <section>
      <h1>New Job Details</h1>
      <h2>Company Name</h2>
      <h2>Job Title</h2>
        <button>LIKE</button><button>DISLIKE</button>
        <p>Description:</p><p>Salary: £</p>
        <ul>{ jobsList }</ul>
    </section>
  )

};





export default JobPage;
