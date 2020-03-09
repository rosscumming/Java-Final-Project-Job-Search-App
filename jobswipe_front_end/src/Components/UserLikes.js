import React, {useState, useEffect} from 'react';

const UserLikes = () => {

  const [likedJobs, setLikedJobs] = useState([])

  const jobsLength = () => likedJobs.length

  const getJobs = () => {
    fetch("http://localhost:8080/users/15/savedJobs")
    .then(res => res.json())
    .then(data => data['_embedded'].savedJobs)
    .then(jobs => setLikedJobs([...jobs]))
    .then(console.log(likedJobs))
  }

  useEffect(() => {
    getJobs()
  }, [jobsLength()])


  const allLikedJobs = () => {
    if (!likedJobs.length > 0) return null;
    return (
      <ul>
      {likedJobs.map((job, id) => {
        return <li key={id}>{job.title}</li>
      })
    }
    </ul>
  )
}

return (
  <section>
  <h1>Liked Jobs List</h1>
  <ul>
  {allLikedJobs()}
  </ul>
  </section>

);
}

export default UserLikes;
