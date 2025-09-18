import React, { useState, useEffect } from "react";
import { MapPin, Phone, Navigation, Clock, Star } from "lucide-react";
import "./sobre.css";
import Links from "../../components/links/links";

// Dados das lojas
const lojas = [
  {
    id: 1,
    nome: "GAALE´S Cajamar",
    subtitulo: "Sob-Medida, Decoração & Arquitetura",
    endereco: "Av. das Açucenas, 285 - Cajamar, SP",
    telefone: "011 98368-2819",
    horario: "Seg-Sex: 9h às 18h | Sáb: 9h às 14h",
    especialidades: ["Móveis Sob Medida", "Decoração", "Arquitetura"],
    destaque: true,
    cor: "#007bff",
  },
  {
    id: 2,
    nome: "GAALE´S Caieiras Centro",
    subtitulo: "Sob-Medida, Decoração & Arquitetura",
    endereco: "Rua Hugo Pereira da Silva, 57 - Caieiras, SP",
    telefone: "011 98368-2819",
    horario: "Seg-Sex: 8h às 17h",
    especialidades: ["Design de Interiores", "Móveis Personalizados"],
    destaque: false,
    cor: "#28a745",
  },
  {
    id: 3,
    nome: "GAALE´S Caieiras Sul",
    subtitulo: "Sob-Medida, Decoração & Arquitetura",
    endereco: "Av. Vereador Abel Ferreira, 1800 - Caieiras, SP",
    telefone: "011 98368-2819",
    horario: "Seg-Sex: 8h às 17h",
    especialidades: ["Marcenaria", "Reformas", "Consultoria"],
    destaque: false,
    cor: "#dc3545",
  },
];

const LojaCard: React.FC<{ loja: (typeof lojas)[number]; index: number }> = ({
  loja,
  index,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), index * 200);
    return () => clearTimeout(timer);
  }, [index]);

  const openMaps = () =>
    window.open(
      `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
        loja.endereco
      )}`,
      "_blank"
    );

  const callPhone = () => {
    if (loja.telefone) {
      window.open(`tel:${loja.telefone.replace(/\D/g, "")}`, "_self");
    }
  };

  return (
    <div
      className={`loja-card ${isVisible ? "visible" : ""} ${
        loja.destaque ? "destaque" : ""
      }`}
      style={{ ["--card-color" as any]: loja.cor }}
    >
      {loja.destaque && (
        <div className="badge-destaque">
          <Star size={16} />
          <span>Principal</span>
        </div>
      )}

      <div className="card-header">
        <h3 className="loja-nome">{loja.nome}</h3>
        <p className="loja-subtitulo">{loja.subtitulo}</p>
      </div>

      <div className="card-content">
        <div className="info-item clickable-item" onClick={openMaps}>
          <MapPin size={20} className="info-icon" />
          <div className="info-text">
            <span className="info-label">Endereço</span>
            <span className="info-value clickable">{loja.endereco}</span>
          </div>
          <Navigation size={16} className="action-icon" />
        </div>

        {loja.telefone && (
          <div className="info-item clickable-item" onClick={callPhone}>
            <Phone size={20} className="info-icon" />
            <div className="info-text">
              <span className="info-label">Telefone</span>
              <span className="info-value clickable">{loja.telefone}</span>
            </div>
          </div>
        )}

        <div className="info-item">
          <Clock size={20} className="info-icon" />
          <div className="info-text">
            <span className="info-label">Horário</span>
            <span className="info-value">{loja.horario}</span>
          </div>
        </div>

        <div className="especialidades">
          <span className="especialidades-label">Especialidades:</span>
          <div className="tags-container">
            {loja.especialidades.map((item, i) => (
              <span key={i} className="tag">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="card-footer">
        <button className="btn btn-maps" onClick={openMaps}>
          <Navigation size={16} /> Ver no Mapa
        </button>
        {loja.telefone && (
          <button className="btn btn-phone" onClick={callPhone}>
            <Phone size={16} /> Ligar
          </button>
        )}
      </div>
    </div>
  );
};

export default function Sobre() {
  return (
    <div className="sobre-container">
      <div className="sobre-image">
        <img src="https://ik.imagekit.io/al1usqugs/Gaales.Planejados/Carpinteiro%20no%20trabalho.avif?updatedAt=1758197522400" alt="Sobre nós" />
      </div>
      <div className="sobre-text">
        <h2>Sobre Nós</h2>
        <p>
          Há mais de <strong>10 anos</strong> no mercado, nossa loja é referência em <strong>móveis planejados</strong>, unindo qualidade, inovação e funcionalidade em cada projeto.
        </p>
        <p>
          Nosso compromisso é transformar ambientes em espaços únicos, personalizados e com o melhor aproveitamento de cada detalhe. Trabalhamos lado a lado com nossos clientes para realizar sonhos e oferecer soluções sob medida para lares e empresas.
        </p>
      </div>

      <section className="hero-section">
        <h1 className="page-title">
          Nossas <span className="highlight">Lojas</span>
        </h1>
        <p className="page-subtitle">
          Encontre a unidade GAALE'S mais próxima de você
        </p>
        <div className="decorative-line"></div>
      </section>

      <div className="lojas-grid">
        {lojas.map((loja, index) => (
          <LojaCard key={loja.id} loja={loja} index={index} />
        ))}
      </div>

      <Links />
    </div>
  );
}
