import React, { useState } from "react";

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Register User:", formData);
  };

  return (
    <div className="register-container">
      <h2>Sign Up</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Username</label>
          <input
            type="text"
            name="username"
            placeholder="Enter Username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>First Name</label>
          <input
            type="text"
            name="first_name"
            placeholder="Enter First Name"
            value={formData.first_name}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Last Name</label>
          <input
            type="text"
            name="last_name"
            placeholder="Enter Last Name"
            value={formData.last_name}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
