import React, {useState, useEffect} from 'react';

const UserLikes = () => {
  
  const [userId, setUserId] = useState(1)
  const [likedJobs, setLikedJobs] = useState([])

  const jobsLength = () => likedJobs.length

  const getJobs = () => {
    fetch(`http://localhost:8080/users/${userId}/savedJobs`)
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
        return <li key={id}>
        <h2>{job.title}</h2>
        <h3>{job.description}</h3>
        </li>
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
