import { Link } from "react-router-dom";
import "./header.css";
function Header() {
    return (
        <div className="main_screen">
            <header>
                <div className="header_row">
                    <img src="/logo.png" alt="logo"/>
                    <nav>
                        <Link to="#">Исходный продукты</Link>
                        <Link to="#">Товары</Link>
                        <Link to="/production">О предприятии</Link>
                        <Link to="#">Статистика</Link>
                        <Link to="/news">Новости</Link>
                        <Link to="#">Документация</Link>
                    </nav>
                    <div className="contacts">
                        <p className="mail">
                            <i className="fa-solid fa-envelope"></i>mail@example.ru
                        </p>
                        <p className="phone">
                            <i className="fa-solid fa-phone"></i>+7 999 999 99 99
                        </p>
                        <p className="telegram">
                            <i className="fa-solid fa-envelope"></i>Telegram
                        </p>
                    </div>
                </div>
            </header>
            <div className="offer">
                Честные отношения
                <br/>
                Дорожим вашим доверием
            </div>
        </div>
    )
}

export default Header;