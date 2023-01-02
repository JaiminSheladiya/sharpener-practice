
import React, { useRef, useState } from 'react'
import AlertModal from './AlertModal'

const UserForm = ({setUsers}) => {
  const [show, setShow] = useState(false);
  const [msg,setMsg] = useState('')
  const nameInputRef = useRef();
  const ageInputRef = useRef();
  const clgInputRef = useRef();

  function handleSubmit(e) {
    e.preventDefault()

    let name = nameInputRef.current.value
    let age = ageInputRef.current.value;
    let clg = clgInputRef.current.value;
    console.log(nameInputRef.current.value)
    if (name == "" || age == "" || clg=='') {
      setMsg("Please fill both inputs.");
      setShow(true);
      return;
    }
    if (age < 0) {
      setMsg("Please enter a valid age (>0)");
      setShow(true);
      return;
    }

    setUsers((prev) => ([...prev, {username : name , age : age , college : clg }]))
    nameInputRef.current.value = ''
    ageInputRef.current.value = ''
    clgInputRef.current.value = ''
  }


  return (
    <div>
      <AlertModal show={show} setShow={setShow} msg={msg} />

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
            ref={nameInputRef}
          
          />
          <label>Username</label>
        </div>

        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="floatingInput"
            placeholder="Please enter age"
            ref={clgInputRef}
           
          />
          <label>College</label>
        </div>

        <div className="form-floating mb-3">
          <input
            type="number"
            className="form-control"
            id="floatingInput"
            placeholder="Please enter age"
            ref={ageInputRef}
          />
          <label>Age (Years)</label>
        </div>
        <input type="submit" className="btn btn-primary btn-block w-75 " />
      </form>
    </div>
  );
}

export default UserForm