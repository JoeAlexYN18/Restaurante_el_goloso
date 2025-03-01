import React, { useState } from 'react';
import '../styles/styles-pages/HomePage.css';

const HomePage = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleContent = () => {
    setIsExpanded(!isExpanded);
  };

  const openImageModal = (imageUrl) => {
    setSelectedImage(imageUrl);
    setIsModalOpen(true);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
    setIsModalOpen(false);
  };

  return (
    <div>
      <div className="home-container">
        <h1>EL GOLOSO - CHICLAYO</h1>
        <p className="description">
          Disfruta de la mejor experiencia gastronómica en el corazón de Chiclayo. Nuestro equipo se enorgullece de ofrecer una fusión de sabores locales y una atmósfera acogedora.
        </p>
        <div className="info">
          <p><strong>Horario:</strong> Lunes a Domingo, 07:00 am - 11:00 pm</p>
          <p><strong>Dirección:</strong> 1427 Alfonso Ugarte</p>
        </div>
      </div>

      <div className="content-section">
        <div className="text-content">
          <h2>EL GOLOSO</h2>
          <p className="subtitle">Restaurante</p>
          <div className="divider"></div>
          
          <p className={`description-text ${isExpanded ? 'expanded' : ''}`}>
            Somos un restaurante líder con más de 10 años de tradición, enfocado en preservar la sazón de la gastronomía peruana.
            El Goloso es más que un restaurante, es un hogar y lo demostramos en la calidez de nuestra atención en cada
            visita a esta casa y en los detalles de cada plato.
            
            {isExpanded && (
              <div className="expanded-text">
                Además, contamos con una variedad de platos exclusivos que combinan lo mejor de la cocina tradicional peruana con toques innovadores. Nos encanta sorprender a nuestros clientes con experiencias culinarias únicas.
              </div>
            )}
          </p>
          
          <button 
            className="read-more-button" 
            onClick={toggleContent}
            onMouseDown={(e) => e.preventDefault()}
          >
            {isExpanded ? 'Leer menos' : 'Leer más'}
          </button>
        </div>

        <div className="image-gallery">
          <img 
            className="main-image" 
            src="https://www.eltrinche.com/wp-content/uploads/2023/07/cebiche-3.jpeg" 
            alt="Main Dish" 
            onClick={() => openImageModal('https://www.eltrinche.com/wp-content/uploads/2023/07/cebiche-3.jpeg')}
          />
          <div className="side-images">
            <img 
              src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/19/5f/1a/57/nuestra-terraza.jpg?w=1200&h=-1&s=1" 
              alt="Side Dish 1" 
              onClick={() => openImageModal('https://dynamic-media-cdn.tripadvisor.com/media/photo-o/19/5f/1a/57/nuestra-terraza.jpg?w=1200&h=-1&s=1')} 
            />
          </div>
        </div>
      </div>

      {selectedImage && isModalOpen && (
        <div className="image-modal" onClick={closeImageModal}>
          <div className="modal-content">
            <img src={selectedImage} alt="Selected" className="modal-image" />
            <span className="close-button" onClick={closeImageModal}>X</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;
