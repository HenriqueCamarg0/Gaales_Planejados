import { useState } from "react";
import "./projeto.css";
import { Modal } from "react-bootstrap";

interface ImageItem {
  id: number;
  src: string;
  title: string;
  description: string;
}

const images: ImageItem[] = [
  {
    id: 1,
    src: "https://ik.imagekit.io/al1usqugs/Gaales.Planejados/IMG2.jpg?updatedAt=1758200828176",
    title: "Escritório Planejado com Elegância e Funcionalidade",
    description:
      "Ambiente moderno e funcional, com iluminação natural abundante, mobiliário planejado e acabamento sofisticado que valoriza a produtividade e o estilo.",
  },
  {
    id: 2,
    src: "https://ik.imagekit.io/al1usqugs/Gaales.Planejados/Quarto2.jpg?updatedAt=1758201014044",
    title: "Quarto Planejado com Conforto e Estilo",
    description:
      "Quarto planejado com estilo contemporâneo, combinando tons neutros, iluminação embutida e soluções inteligentes de armazenamento para criar um ambiente acolhedor, funcional e sofisticado",
  },
  {
    id: 3,
    src: "https://ik.imagekit.io/al1usqugs/Gaales.Planejados/Modulados1.jpg?updatedAt=1758201264595",
    title: "Sala de Estar Planejada com Estilo e Conforto",
    description:
      "Sala de estar planejada com estética minimalista, tons neutros e soluções integradas de armazenamento que combinam conforto, organização e sofisticação em um único ambiente.",
  },
  {
    id: 4,
    src: "https://ik.imagekit.io/al1usqugs/Gaales.Planejados/Modulados2.jpg?updatedAt=1758201266227",
    title: "Ambiente de Estudo Planejado com Estilo e Funcionalidade",
    description:
      "Ambiente de estudo planejado com linhas limpas, iluminação natural e estantes funcionais que promovem organização, conforto e foco no dia a dia.",
  },
  {
    id: 5,
    src: "https://ik.imagekit.io/al1usqugs/Gaales.Planejados/Escritorio01.jpg?updatedAt=1758207085492",
    title: "Escritório Planejado com Estilo e Funcionalidade",
    description:
      "Escritório planejado com design limpo e materiais naturais, oferecendo um ambiente sofisticado e funcional para trabalho com conforto e estilo.",
  },
  {
    id: 6,
    src: "https://ik.imagekit.io/al1usqugs/Gaales.Planejados/Escritorio02.jpg?updatedAt=1758207086276",
    title: "Espaço de Trabalho Planejado com Estilo e Funcionalidade",
    description:
      "Espaço de trabalho planejado com estética clean, iluminação natural e mobiliário funcional que transmite profissionalismo, conforto e organização.",
  },
  {
    id: 7,
    src: "https://ik.imagekit.io/al1usqugs/Gaales.Planejados/Escritorio04.jpg?updatedAt=1758207086142",
    title: "Ambiente Corporativo Planejado com Estilo e Funcionalidade",
    description: "Ambiente corporativo com design fluido e iluminação natural, integrando mobiliário curvo e estantes planejadas para um espaço moderno e acolhedor.",
  },  
  {
    id: 8,
    src: "https://ik.imagekit.io/al1usqugs/Gaales.Planejados/Escritorio03.jpg?updatedAt=1758207086189",
    title: "Escritório Planejado com Estilo e Funcionalidade",
    description:
      "Escritório simétrico e sofisticado, com vista urbana e soluções de armazenamento embutidas que equilibram funcionalidade, elegância e organização.",
  },
];

export default function Galeria() {
  const [modalShow, setModalShow] = useState(false);
  const [selectedImage, setSelectedImage] = useState<ImageItem | null>(null);

  const openModal = (image: ImageItem) => {
    setSelectedImage(image);
    setModalShow(true);
  };

  return (
    <div className="galeria-container">
      <div className="galeria-grid">
        {images.map((img) => (
          <div
            key={img.id}
            className="galeria-item"
            onClick={() => openModal(img)}
          >
            <img src={img.src} alt={img.title} />
            <div className="overlay">
              <h5>{img.title}</h5>
              <p>{img.description}</p>
            </div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <Modal
          show={modalShow}
          onHide={() => setModalShow(false)}
          centered
          dialogClassName="custom-modal"
        >
          <Modal.Body>
            <div className="modal-content-wrapper">
              <img src={selectedImage.src} alt={selectedImage.title} />
              <div className="modal-details">
                <h5>{selectedImage.title}</h5>
                <p>{selectedImage.description}</p>
                <button
                  className="close-button"
                  onClick={() => setModalShow(false)}
                >
                  Fechar
                </button>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      )}
    </div>
  );
}
