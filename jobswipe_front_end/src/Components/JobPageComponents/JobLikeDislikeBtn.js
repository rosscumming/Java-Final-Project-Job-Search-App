import React from'react';
import './JobLikeDislikeBtn.css';

const JobLikeDislikeBtn = ({ job, jobLiked, jobDisliked }) => {


return (

<section>
  <button onClick={() => jobDisliked()} value={job.jobId}>No Thankyou!</button>
  <button onClick={() => jobLiked()} value={ job.jobId }>I Love This Job!</button>
</section>



)
}





export default JobLikeDislikeBtn;
