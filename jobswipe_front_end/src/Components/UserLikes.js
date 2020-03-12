import React, {useState, useEffect} from 'react';
import logo from '../assets/JobSwipe_2.png'
import './UserLikes.css';


const UserLikes = ({ selectedUserId }) => {

  const [likedJobs, setLikedJobs] = useState([])

  const jobsLength = () => likedJobs.length

  const getJobs = () => {
    if (!selectedUserId) return null;
    fetch(`http://localhost:8080/users/${selectedUserId}/savedJobs`)
    .then(res => res.json())
    .then(data => data['_embedded'].savedJobs)
    .then(jobs => setLikedJobs([...jobs]))
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

  <article>
    <header className="main-header"><img class="logo" src={logo}/></header>
    <h1>Liked Jobs List</h1>

  <section className="user-likes">
    <ul className="user-likes-ul">
      {allLikedJobs()}
    </ul>
    <button className="back-btn"><a href="/jobs">Back to Jobs</a></button>
  </section>
  </article>

);
}

export default UserLikes;
