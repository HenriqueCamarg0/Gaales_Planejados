import React from 'react';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import './Links.css';

const socialMedia = [

  {
    name: 'Instagram',
    url: 'https://www.instagram.com/gaales.planejados/',
    icon: <FaInstagram />,
    className: 'instagram',
  },
  {
    name: 'WhatsApp',
    url: 'https://wa.me/5511965271417',
    icon: <FaWhatsapp />,
    className: 'whatsapp',
  },
];

const Links: React.FC = () => {
  return (
    <section className="cta-section">
      <h2>Entre em contato em nossas redes sociais</h2>
      <div className="social-links">
        {socialMedia.map(({ name, url, icon, className }) => (
          <a
            key={name}
            href={url}
            className={`social-link ${className}`}
            aria-label={name}
            target="_blank"
            rel="noopener noreferrer"
          >
            {icon}
          </a>
        ))}
      </div>
    </section>
  );
};

export default Links;