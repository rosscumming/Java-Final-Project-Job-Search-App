import React from "react";
import "./JobLikeDislikeBtn.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const JobLikeDislikeBtn = ({ job, jobLiked, jobDisliked }) => {
  return (
    <section className="container-btns">
      <button
        className="like-dislike-btn dislike-btn"
        onClick={() => jobDisliked()}
        value={job.jobId}
      >
        DISLIKE
        <FontAwesomeIcon icon="times-circle" className="check-cross" />
      </button>
      <button
        className="like-dislike-btn like-btn"
        onClick={() => jobLiked()}
        value={job.jobId}
      >
        LIKE
        <FontAwesomeIcon icon="check-circle" className="check-cross" />
      </button>
    </section>
  );
};

export default JobLikeDislikeBtn;
