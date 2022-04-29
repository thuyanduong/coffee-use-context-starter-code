import { useState } from "react";

const Form = () => {
  const [username, setUsername] = useState("Ann")
  const [input, setInput] = useState("Ann")
  
  function handleSubmit(e){
    e.preventDefault();
    setUsername(input);
  }

  return (
    <div className="container col-xl-10 col-xxl-8 px-4 py-5">
      <div className="row align-items-center g-lg-5 py-5">
        <div className="col-lg-7 text-center text-lg-start">
          <h1 className="display-4 fw-bold lh-1 mb-3">Welcome, {username}!</h1>
          <p className="col-lg-10 fs-4">Please update your profile</p>
        </div>
        <div className="col-md-10 mx-auto col-lg-5">
          <form className="p-4 p-md-5 border rounded-3 bg-light">
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="floatingInput"
                placeholder="Name"
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
              <label>Name</label>
            </div>

            <button onClick={handleSubmit} className="w-100 btn btn-lg btn-primary" type="submit">
              Update Profile
            </button>

          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;