import React from "react";
import "./JobLikeDislikeBtn.css";

const JobLikeDislikeBtn = ({ job, jobLiked, jobDisliked }) => {
  return (
    <section>
      <button
        className="like-dislike-btn"
        onClick={() => jobDisliked()}
        value={job.jobId}
      >
        No Thankyou!
      </button>
      <button
        className="like-dislike-btn"
        onClick={() => jobLiked()}
        value={job.jobId}
      >
        I Love This Job!
      </button>
    </section>
  );
};

export default JobLikeDislikeBtn;
