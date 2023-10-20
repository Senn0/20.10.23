import "./documentation.css";
import { Link } from "react-router-dom";

function Documentation() {
  return (
    <>
      <div className="doc_container">
        <div className="doc_container_header">
          <h3 className="doc_text doc_h">Документация</h3>
        </div>
        <div className="doc_container_header_line">
          <img className="doc_header_img" src="/line.png" alt="Сепаратор" />
        </div>

        <div className="doc_container_body">
          <div className="doc_body">
            <div className="doc_body_element">
              <img src="/doc_img_1.png" alt="Декларация ЕС о Соответствии" />
            </div>
            <div className="doc_body_element">
              <p className="doc_text doc_p">
                Декларация ЕС о<br /> Соответствии
              </p>
            </div>
          </div>

          <div className="doc_body_c">
            <div className="doc_body_element">
              <img src="/doc_img_2.png" alt="Знак качества" />
            </div>
            <div className="doc_body_element">
              <p className="doc_text doc_p">Знак качества</p>
            </div>
          </div>

          <div className="doc_body">
            <div className="doc_body_element">
              <img src="/doc_img_3.png" alt="Диплом" />
            </div>
            <div className="doc_body_element">
              <p className="doc_text doc_p">Диплом</p>
            </div>
          </div>
        </div>
        <div className="doc_container_footer">
        <div className="doc_container_button">
        <Link className="doc_text doc_link" to="/">Подробнее</Link>
      </div>
      </div>
      </div>

      
    </>
  );
}

export default Documentation;
