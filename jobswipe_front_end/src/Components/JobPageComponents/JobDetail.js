import React from 'react';
import './JobDetail.css';

const JobDetail = ({ job }) => {

  return (

<section>
<h2>{ job.employerName }</h2>
<h2>{ job.jobTitle }</h2>
<h3> £{job.maximumSalary } </h3>
<p> { job.jobDescription } </p>
</section>

)
}


export default JobDetail;
