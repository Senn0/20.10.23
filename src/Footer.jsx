import { Link } from "react-router-dom";
import "./footer.css";
function Footer() {
  return (
    <>
      <div>

        <div>
        <Link to="/">logo</Link>
        </div>

        <div>
        <Link to="/">Исходные продукты</Link>
        <Link to="/">Товары</Link>
        <Link to="/">О предприятии</Link>
        <Link to="/">Исходные продукты</Link>
        <Link to="/">Статистика</Link>
        <Link to="/">Новости</Link>
        <Link to="/">Документация</Link>

        <Link to="/">Telegramm</Link>
        <Link to="/">Группа Вконтакте</Link>
        <Link to="/">Youtube</Link>

        <p>ООО “GoldenSilver” © 2023</p>
        </div>

        <div>
        <Link to="">mail@example.ru</Link>
        <Link to="">+7 999 999 99 99</Link>
        </div>
      </div>
    </>
  );
}

export default Footer;
