import "@fortawesome/fontawesome-free/css/all.css";
import "../styles/Footer.css";

export const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-md-4 text-left">
              <h4>Información de contacto</h4>
              <ul>
                <li>
                  <i className="fas fa-envelope"></i>{" "}
                  jalvarez-2021317@kinal.edu.gt
                </li>
              </ul>
            </div>
            <div className="col-md-4 text-right">
              <div className="copyrigt-container">
                <p className="copyrigt">
                  &copy; 2023 Todos los derechos reservados a Joshua Alvarez
                  2021317
                </p>
              </div>
            </div>
            <div className="col-md-4 text-center">
              <h4>Síguenos en redes sociales</h4>
              <ul className="social">
                <li>
                  <a href="https://github.com/jalvarez-2021317">
                    <i className="fab fa-github"> GitHub</i>
                  </a>
                </li>
                <li>
                  <a href="https://youtube.com/@JoshuaSinTV">
                    <i className="fab fa-youtube"> YouTube</i>
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/joshua.alvarezxy/">
                    <i className="fab fa-instagram"> Instagram</i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
