import React from 'react'

const ShowData = ({ users }) => {
    console.log(users)
  return (
      <div className=" mt-5  text-white">
        
      {users.map((e, i) => (
        <div
          key={i}
          className=" m-auto mt-1 opacity-50 shadow rounded-5 w-50 bg-primary  d-flex justify-content-around "
        >
          <h4>{e.username}</h4>
          <h4>{e.age} years old</h4>
        </div>
      ))}
    </div>
  );
}

export default ShowData