import React, { useState, useEffect } from 'react';
import './Carousel.css';

interface CarouselItem {
  id: string;
  title: string;
  category: string;
  color: string;
}

interface CarouselProps {
  items: CarouselItem[];
  onItemClick?: (item: CarouselItem) => void;
}

const Carousel: React.FC<CarouselProps> = ({ items, onItemClick }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);

  useEffect(() => {
    if (!isAutoplay) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoplay, items.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoplay(false);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
    setIsAutoplay(false);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
    setIsAutoplay(false);
  };

  return (
    <div className="carousel" onMouseEnter={() => setIsAutoplay(false)} onMouseLeave={() => setIsAutoplay(true)}>
      <div className="carousel__viewport">
        {items.map((item, index) => (
          <div
            key={item.id}
            className={`carousel__slide ${index === currentIndex ? 'active' : ''}`}
            style={{ backgroundColor: item.color }}
          >
            <div className="carousel__overlay">
              <div className="carousel__content">
                <p className="carousel__category">{item.category}</p>
                <h3 className="carousel__title">{item.title}</h3>
                {onItemClick && (
                  <button
                    className="carousel__button"
                    onClick={() => onItemClick(item)}
                  >
                    Ver projeto
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <button className="carousel__nav carousel__nav--prev" onClick={goToPrevious} aria-label="Anterior">
        ←
      </button>
      <button className="carousel__nav carousel__nav--next" onClick={goToNext} aria-label="Próximo">
        →
      </button>

      <div className="carousel__indicators">
        {items.map((_, index) => (
          <button
            key={index}
            className={`carousel__indicator ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Ir para slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
