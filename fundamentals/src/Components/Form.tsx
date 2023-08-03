import { useState } from "react";

const Form = () => {
  const centerContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    height: '100vh',
    marginBottom: '10px',
  };

  const formContainerStyle = {
    width: '300px',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '5px',
  };

  const inputStyle = {
    width: '100%',
    marginBottom: '10px',
    padding: '8px',
    fontSize: '16px',
  };

  const buttonStyle = {
    width: '100%',
    padding: '10px',
    fontSize: '18px',
    backgroundColor: '#4CAF50',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  const dataItemStyle = {
    border: '1px solid #ccc',
    padding: '10px',
    marginBottom: '10px',
  };

  const [userRegistration, setUserRegistration] = useState({
    username: "",
    email: "",
    phone: "",
    password: ""
  });

  const [record, setRecord] = useState([]);

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserRegistration({ ...userRegistration, [name]: value });
  }

  const handleData = (e) => {
    e.preventDefault();

    const newRecord = { ...userRegistration, id: new Date().getTime().toString() };
    setRecord([...record, newRecord]);
    setUserRegistration({
      username: "",
      email: "",
      phone: "",
      password: ""
    });
  }

  return (
    <>
      <div style={centerContainerStyle}>
        <form onSubmit={handleData} style={formContainerStyle}>
          <div>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              autoComplete="off"
              value={userRegistration.username}
              onChange={handleInput}
              name="username"
              id="username"
              style={inputStyle}
            />
          </div>

          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="text"
              autoComplete="off"
              value={userRegistration.email}
              onChange={handleInput}
              name="email"
              id="email"
              style={inputStyle}
            />
          </div>
          <div>
            <label htmlFor="phone">Phone:</label>
            <input
              type="number"
              autoComplete="off"
              value={userRegistration.phone}
              onChange={handleInput}
              name="phone"
              id="phone"
              style={inputStyle}
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="text"
              autoComplete="off"
              value={userRegistration.password}
              onChange={handleInput}
              name="password"
              id="password"
              style={inputStyle}
            />
          </div>
          <button type="submit" style={buttonStyle}>Register</button>
        </form>

        <div>
          {
            record.map((currElem) => {
              return (
                <div className="Data" style={dataItemStyle} key={currElem.id}>
                  <p><strong>Username:</strong> {currElem.username}</p>
                  <p><strong>Email:</strong> {currElem.email}</p>
                  <p><strong>Phone:</strong> {currElem.phone}</p>
                  <p><strong>Password:</strong> {currElem.password}</p>
                </div>
              )
            })
          }
        </div>
      </div>
    </>
  );
};

export default Form;
