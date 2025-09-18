import "./home.css";
import { FaFire, FaGem, FaBolt, FaShieldAlt } from "react-icons/fa";

const sections = [
  {
    title: "Design Moderno",
    text: "Cada lar é único e seus móveis também devem ser. Por isso, oferecemos dois tipos de personalização para atender as necessidades do seu projeto com as soluções mais apropriadas.",
    image:
      "https://ik.imagekit.io/al1usqugs/Gaales.Planejados/IMG1.jpg?updatedAt=1758200827715",
  },
  {
    title: "Materiais de Qualidade",
    text: "Os projetos sob medida são a escolha perfeita para quem busca exclusividade em um design totalmente funcional. Ideal para maximizar o aproveitamento do cômodo e criar um ambiente único e sofisticado. Cada peça é criada de acordo com suas preferências para garantir que seus móveis se ajustem perfeitamente ao espaço e reflitam seu gosto pessoal e estilo de vida.",
    image:
      "https://ik.imagekit.io/al1usqugs/Gaales.Planejados/Quarto1.jpg?updatedAt=1758201013796",
  },
  {
    title: "Móveis Modulados",
    text: "Os móveis modulares são ideais para quem valoriza flexibilidade e praticidade. Com peças pré-criadas em diferentes medidas, criamos combinações funcionais para garantir a liberdade de reconfigurar seu espaço conforme a sua necessidade. Os módulos são montados rapidamente e proporcionam um excelente custo-benefício sem comprometer a qualidade e o design impecável do seu projeto.",
    image:
      "https://ik.imagekit.io/al1usqugs/Gaales.Planejados/Modulados3.jpg?updatedAt=1758201264246",
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

export default function Home() {
  return (
    <div className="home">
      <header className="home-header">
        <h1 className="title">
          Bem vindo a <strong>Gaale's Planejados</strong>
        </h1>
        <p className="subtitle">Móveis planejados com qualidade e design</p>
      </header>

      <section className="home-sections">
        {sections.map(({ title, text, image }, index) => (
          <div className={`section ${index % 2 ? "reverse" : ""}`} key={title}>
            <div className="text">
              <h2>{title}</h2>
              <p>{text}</p>
              <button>Saiba Mais</button>
            </div>
            <div className="image">
              <img src={image} alt={title} />
            </div>
          </div>
        ))}
      </section>

      <section className="containerCards">
        {cards.map(({ title, text, icon }) => (
          <div className="card" key={title}>
            <div className="iconWrapper">{icon}</div>
            <div className="textHeadLine">{title}</div>
            <div className="text">{text}</div>
          </div>
        ))}
      </section>

      <section className="project-steps">
        <div className="project-steps-section">
          <h2>Nosso Processo</h2>
          <p>Veja como transformamos seu espaço passo a passo:</p>
          <div className="project-steps-cards">
            {projectSteps.map(({ title, text }) => (
              <div className="step-card" key={title}>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
