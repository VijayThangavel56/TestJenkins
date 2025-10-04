import { useState } from "react";

function Login() {
  const [login, setLogin] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLogin((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
debugger
    if (login.email !== "" && login.password !== "") {
      console.log("Login successful with:", login);
      // Add your login logic here (e.g., API call)
    } else {
      alert("Please provide a valid input");
    }
  };

  return (
    <div className="container mt-5" style={{ maxWidth: "400px" }}>
      <h2 className="mb-4 text-center">Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group mb-3">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            name="email"
            className="form-control"
            id="email"
            value={login.email}
            onChange={handleChange}
          />
        </div>

        <div className="form-group mb-4">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            className="form-control"
            id="password"
            value={login.password}
            onChange={handleChange}
          />
        </div>

        <button className="btn btn-primary w-100">Submit</button>
      </form>
    </div>
  );
}

export default Login;
