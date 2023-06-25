/* eslint-disable no-unused-vars */
import axios from "axios";
import { useState } from "react";
import { GET_USERS } from "../../../API";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const handleAuth = (e) => {
    e.preventDefault();
    try {
      axios.get(GET_USERS).then((users) => {
        const usersData = users.data.users;
        const existingUser = usersData.find((user) => {
          const foundUser = user;
          return foundUser.email === email && foundUser.password === password;
        });
        if (existingUser) {
          // sessionStorage.setItem('user', JSON.stringify(existingUser.email))
          console.log("Пользователь найден");
          navigate("/", { state: existingUser.email });
        } else {
          alert("Пользователь НЕ найден");
        }
      });
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div>
      <h1>LOGIN PAGE</h1>
      <form onSubmit={(e) => handleAuth(e)} className="login_form">
        <input
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email"
          type="text"
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          placeholder="password"
          type="password"
        />
        <button className="atuin-btn">Авторизоваться</button>
      </form>
      <h3>
        Нет учетной записи?
        <Link to={"/registration"} className="reg_link">
          Создайте её
        </Link>
      </h3>
    </div>
  );
};

export default Login;
