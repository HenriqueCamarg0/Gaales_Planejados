import "./Home.css";
import { FaFire, FaGem, FaBolt, FaShieldAlt } from "react-icons/fa";

export default function Home() {
  const sections = [
    {
      title: "Design Moderno",
      text: "Transformamos espaços com soluções planejadas, modernas e funcionais.",
      image:
        "https://ik.imagekit.io/al1usqugs/Gaales.Planejados/IMG1.jpg?updatedAt=1758200827715",
    },
    {
      title: "Materiais de Qualidade",
      text: "Usamos MDP de alta densidade e acabamentos premium para durabilidade.",
      image:
        "https://ik.imagekit.io/al1usqugs/Gaales.Planejados/Quarto1.jpg?updatedAt=1758201013796",
    },
  ];

  const cards = [
    {
      title: "Feitos para durarem",
      text: "Com estrutura em MDP, nossos móveis são robustos e resistentes.",
      icon: <FaFire />,
    },
    {
      title: "Design elegante",
      text: "Cada projeto é pensado para valorizar o ambiente com sofisticação.",
      icon: <FaGem />,
    },
    {
      title: "Funcionalidade",
      text: "Peças planejadas para otimizar espaço e facilitar o dia a dia.",
      icon: <FaBolt />,
    },
    {
      title: "Segurança garantida",
      text: "Nossos móveis passam por testes rigorosos de qualidade.",
      icon: <FaShieldAlt />,
    },
  ];

  const projectSteps = [
    {
      title: "Planejamento",
      text: "Entendemos suas necessidades e planejamos cada detalhe.",
    },
    {
      title: "Design",
      text: "Criamos o projeto visual do ambiente para aprovação.",
    },
    {
      title: "Produção",
      text: "Fabricamos os móveis com materiais de qualidade e precisão.",
    },
    {
      title: "Entrega e Montagem",
      text: "Entregamos e montamos tudo com cuidado e profissionalismo.",
    },
  ];

  return (
    <div className="home">
      <h1 className="title">Gaales Planejados</h1>
      <p className="subtitle">Móveis planejados com qualidade e design</p>
      {sections.map((section, index) => (
        <div
          className={`section ${index % 2 === 1 ? "reverse" : ""}`}
          key={index}
        >
          <div className="text">
            <h2>{section.title}</h2>
            <p>{section.text}</p>
            <button>Saiba Mais</button>
          </div>
          <div className="image">
            <img src={section.image} alt={section.title} />
          </div>
        </div>
      ))}

      <div className="containerCards">
        {cards.map((card, index) => (
          <div className="card" key={index}>
            <div className="iconWrapper">{card.icon}</div>
            <div className="textHeadLine">{card.title}</div>
            <div className="text">{card.text}</div>
          </div>
        ))}
      </div>

      <div className="project-steps">
        <div className="project-steps-section">
          <h2>Nosso Processo</h2>
          <p>Veja como transformamos seu espaço passo a passo:</p>
          <div className="project-steps-cards">
            {projectSteps.map((step, index) => (
              <div className="step-card" key={index}>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
