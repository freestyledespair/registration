/* eslint-disable no-unused-vars */
import axios from "axios";
import "./registration.css";
import { POST_USERS } from "../../../API";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { message } from "antd";
import "./registration.css"

const Registration = () => {
  const navigate = useNavigate();
  const [pass1, setPass1] = useState("");
  const [pass2, setPass2] = useState("");
  const [postUser, setPostUser] = useState({
    email: "",
    password: "",
    phone: "",
  });

  const handleRegistration = (e) => {
    e.preventDefault();
    try {
      if (pass1.length >= 6 && pass1 === pass2) {
        axios
          .post(
            POST_USERS,
            {
              ...postUser,
              password: pass1,
            },
            {
              headers: { "Content-Type": "application/json" },
            }
          )
          .then((res) => {
            console.log(res.status);
            if (res.status === 200) {
              message.success("Регистрация успешно завершена");
              setPostUser({
                email: "",
                password: "",
                phone: "",
              });
              setPass1("");
              setPass2("");
              navigate('/', { state: postUser.email })
            } else {
              message.error("Ошибка при регистрации");
            }
          })
      } else {
        message.error(`Некорректное заполнение формы. Примечание: Пароль должен состоять не менее из 6 символов`);
      }
    } catch (e) {
      console.log(e);
      message.error("Ошибка при регистрации");
    }
  };

  return (
    <div>
      <h1>REGISTRATION PAGE</h1>
      <form onSubmit={(e) => handleRegistration(e)} className="reg_form">
        <input
          value={postUser.email}
          onChange={(e) => setPostUser({ ...postUser, email: e.target.value })}
          placeholder="email"
          type="text"
        />
        <input
          onChange={(e) => setPass1(e.target.value)}
          value={pass1}
          placeholder="password"
          type="password"
        />
        <input
          onChange={(e) => setPass2(e.target.value)}
          value={pass2}
          placeholder="password"
          type="password"
        />
        <input
          value={postUser.phone}
          onChange={(e) => setPostUser({ ...postUser, phone: e.target.value })}
          placeholder="phone number"
          type="tel"
        />
        <button className="atuin-btn_reg">Зарегистрироваться</button>
      </form>
      <h3>
        Уже есть учетная запись?{" "}
        <Link to={"/auth"} className="login_link">
          Войдите
        </Link>
      </h3>
    </div>
  );
};

export default Registration;
