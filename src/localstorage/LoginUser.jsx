import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginUser = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const storedUser = localStorage.getItem("user");

    if (!storedUser) {
      alert("Please register first!");
      return;
    }

    const userData = JSON.parse(storedUser);

    if (email === userData.email && password === userData.password) {

    
      localStorage.setItem("isLoggedIn", "true");

      alert("Login Success ");

      
      navigate("/dashboard");

    } else {
      alert("Invalid Credentials ");
    }
  };

  return (
    <>
      <h2>Login</h2>

      <form onSubmit={handleSubmit}>
        <input
        className='font-bold bg-white  text-black'
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br /><br />

        <input
        className='font-bold bg-white  text-black'
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br /><br />

        <button type="submit" className='rounded-2xl bg-green-400 p-3'>Login</button>
      </form>
    </>
  );
};

export default LoginUser