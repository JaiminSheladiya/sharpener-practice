
import React, { useState } from 'react'
import AlertModal from './AlertModal'

const UserForm = ({setUsers}) => {
  const [data, setData] = useState({username : '' , age : ''})
  const [show, setShow] = useState(false);
  const [msg,setMsg] = useState('')

  function handleSubmit(e) {
    e.preventDefault()

    if (data.username == '' || data.age == '') {
       setMsg("Please fill both inputs.");
       setShow(true);
       return;
    }
    if (data.age < 0) {
          
          setMsg('Please enter a valid age (>0)')
      setShow(true)
      return
    }

    setUsers((prev) => ([...prev, data]))
  }


  return (
    <div>
      <AlertModal show={show} setShow={setShow} msg={msg}  />
      <form
        className="shadow p-5 mt-5 rounded-2"
        style={{ width: "30%", margin: "auto" }}
        onSubmit={handleSubmit}
      >
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="floatingInput"
            placeholder="username"
            onChange={(e) =>
              setData((prev) => ({ ...prev, username: e.target.value }))
            }
          />
          <label>Username</label>
        </div>

        <div className="form-floating mb-3">
          <input
            type="number"
            className="form-control"
            id="floatingInput"
            placeholder="Please enter age"
            onChange={(e) =>
              setData((prev) => ({ ...prev, age: e.target.value }))
            }
          />
          <label>Age (Years)</label>
        </div>
        <input type="submit" className="btn btn-primary btn-block w-75 " />
      </form>
    </div>
  );
}

export default UserForm