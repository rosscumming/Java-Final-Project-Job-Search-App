import React, {useState, useEffect} from 'react';

const UserLikes = () => {

  const [likedJobs, setLikedJobs] = useState([])

useEffect(() => {
  fetch("http://localhost:8080/users/15/savedJobs")
  .then(res => res.json())
  .then(data => console.log(data['_embedded'].savedJobs))
  .then(jobs => setLikedJobs(...likedJobs, jobs))
}, [])

return (
      <section>
      <h1>Liked Jobs List</h1>
      <ul>
        <li>Liked Job 1</li>
        <li>Liked Job 2</li>
        <li>Liked Job 3</li>
      </ul>
      </section>

    );
}

export default UserLikes;
