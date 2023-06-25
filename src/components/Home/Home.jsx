import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./home.css"

const Home = () => {
    const location = useLocation()
    const [user, setUser] = useState('')
    const [email, setEmail] = useState('')
    useEffect(() => {
        // setUser(JSON.parse(sessionStorage.getItem('user')))
        console.log(location);
        setUser(location.state)
        setEmail(location.email)
    }, [location])


    return (
        <div className="home">
            <h1>Главная страница</h1>
            {
                user ?
                    <h2>HELLO, {user} {email} <Link to={"/auth"} className="auth_link">
                        <button className="atuin-btn">Exit</button>
                    </Link></h2>
                    :
                    <h2 className="user_not_auth">Пользователь не авторизован <Link to={"/auth"} className="login_link">
                        Войдите
                    </Link></h2>

            }

        </div>
    );
};

export default Home;