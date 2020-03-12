import React, { useState, Fragment } from "react";
import NavBar from "../NavBarComponents/NavBar";
import "./JobPage.css";
import JobDetail from "./JobDetail";
import JobLikeDislikeBtn from "./JobLikeDislikeBtn";


const JobPage = ({ jobs, selectedUserId }) => {
  const [selectedJobIndex, setSelectedJobIndex] = useState(0);
  const activeUserId = selectedUserId;

  if (!jobs.length) return null;
  const job = jobs[selectedJobIndex];

  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      company: job.employerName,
      title: job.jobTitle,
      salary: job.maximumSalary,
      salary_weight: 5,
      description: job.jobDescription
    })
  };

  const addJobToUser = jobId => {
    fetch(`http://localhost:8080/users/${selectedUserId}/savedJobs`, {
      method: "POST",
      headers: { "Content-Type": "text/uri-list" },
      body: `http://localhost:8080/savedJobs/${jobId}`
    });
  };

  const addJobToUserDislikes = jobLink => {
    fetch(`http://localhost:8080/users/${selectedUserId}/dislikedJobs`, {
      method: "POST",
      headers: { "Content-Type": "text/uri-list" },
      body: jobLink
    });
  };

  const handleJobLiked = event => {
    fetch("http://localhost:8080/savedJobs", requestOptions)
      .then(response => response.json())
      .then(job => {
        addJobToUser(job.id);
        setSelectedJobIndex(selectedJobIndex + 1);
      });
  };

  const handleJobDisliked = event => {
    fetch("http://localhost:8080/dislikedJobs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        reedId: job.jobId
      })
    })
      .then(response => response.json())
      .then(job => {
        addJobToUserDislikes(job["_links"].dislikedJob.href);
        setSelectedJobIndex(selectedJobIndex + 1);
      });
  };


      return (
    <>
      <NavBar className="main-nav" />
      <section className="job-page-section">
        <div></div>
        <JobDetail className="job-detail" job={job} />
        <div></div>
        <div></div>
        <JobLikeDislikeBtn
          className="like-dislike-btn"
          job={job}
          jobLiked={handleJobLiked}
          jobDisliked={handleJobDisliked}
        />
        <div></div>
      </section>
    </>
  );
};

export default JobPage;
