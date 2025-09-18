import React from "react";
import "./footer.css";

const Footer: React.FC = () => {
  return (
    <footer className="modern-footer">
      <div className="footer-content">
        <div className="container">
          <div className="row">
            {/* Coluna da empresa */}
            <div className="col-lg-4 col-md-6 mb-4 text-center text-md-start">
              <div className="footer-logo">
                <img
                  src="https://ik.imagekit.io/al1usqugs/Gaales.Planejados/Logo.png?updatedAt=1757974938254"
                  alt="Logo Gaales Planejados"
                />
              </div>
            </div>

            {/* Coluna de serviços */}
            <div className="col-lg-2 col-md-6 mb-4">
              <h6 className="footer-subtitle">Serviços</h6>
              <ul className="footer-links">
                {[
                  "Cozinhas",
                  "Dormitórios",
                  "Escritórios",
                  "Closets",
                  "Banheiros",
                  "Áreas de Lazer",
                ].map((item) => (
                  <li key={item}>
                    <a href="/galeria">{item}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Coluna de links rápidos */}
            <div className="col-lg-2 col-md-6 mb-4">
              <h6 className="footer-subtitle">Links Rápidos</h6>
              <ul className="footer-links">
                <li><a href="/home">Início</a></li>
                <li><a href="/sobre">Sobre Nós</a></li>
                <li><a href="/galeria">Galeria</a></li>
                <li><a href="/contato">Contato</a></li>
                <li><a href="/orcamento">Orçamento</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="newsletter-section">
        <div className="container">
          <div className="newsletter-content">
            <div className="newsletter-text">
              <h5>Receba nossas novidades</h5>
              <p>Fique por dentro das tendências em móveis planejados</p>
            </div>
            <form className="newsletter-form">
              <div className="input-group">
                <input
                  type="email"
                  placeholder="Seu melhor e-mail"
                  className="newsletter-input"
                />
                <button type="submit" className="newsletter-btn">
                  Inscrever-se
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-md-6 text-center text-md-start">
              <p className="copyright">
                © {new Date().getFullYear()} Gaales Planejados. Todos os direitos reservados.
              </p>
            </div>
            <div className="col-md-6 text-center text-md-end">
              <small className="developer-credit">
                Desenvolvido por
                <a href="#" className="developer-link"> Henrique</a>
              </small>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
