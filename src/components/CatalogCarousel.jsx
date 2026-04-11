import { useEffect, useMemo, useRef, useState } from 'react';
import './CatalogCarousel.css';

function ArrowButton({ direction, disabled, onClick }) {
  const label = direction === 'left' ? 'Ver categorias anteriores' : 'Ver proximas categorias';

  return (
    <button
      type="button"
      className={`catalog-carousel__arrow catalog-carousel__arrow--${direction} ${disabled ? 'is-hidden' : ''}`}
      onClick={onClick}
      aria-label={label}
      aria-hidden={disabled}
      tabIndex={disabled ? -1 : 0}
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        {direction === 'left' ? <polyline points="15 18 9 12 15 6" /> : <polyline points="9 6 15 12 9 18" />}
      </svg>
    </button>
  );
}

function CarouselItem({ item, onSelect }) {
  return (
    <article className="catalog-carousel__item card" role="group" aria-label={item.name}>
      <div className="catalog-carousel__image-wrap">
        <img
          className="catalog-carousel__image"
          src={item.image}
          alt={item.name}
          loading="lazy"
          decoding="async"
        />
      </div>
      <div className="catalog-carousel__body">
        <h3 className="catalog-carousel__title">{item.name}</h3>
        <p className="catalog-carousel__description">{item.description}</p>
        <button type="button" className="catalog-carousel__cta" onClick={() => onSelect(item.id)}>
          Ver categoria
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polyline points="9 6 15 12 9 18" />
          </svg>
        </button>
      </div>
    </article>
  );
}

export default function CatalogCarousel({ items, onSelect }) {
  const viewportRef = useRef(null);
  const touchStartXRef = useRef(0);
  const [visibleCount, setVisibleCount] = useState(3);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth <= 800) {
        setVisibleCount(1);
        return;
      }

      if (window.innerWidth <= 1200) {
        setVisibleCount(2);
        return;
      }

      setVisibleCount(3);
    };

    updateVisibleCount();
    window.addEventListener('resize', updateVisibleCount);

    return () => window.removeEventListener('resize', updateVisibleCount);
  }, []);

  const maxIndex = Math.max(items.length - visibleCount, 0);

  useEffect(() => {
    setCurrentIndex((value) => Math.min(value, maxIndex));
  }, [maxIndex]);

  const dotCount = useMemo(() => Math.max(items.length - visibleCount + 1, 1), [items.length, visibleCount]);
  const highlightedIndex = useMemo(() => {
    if (visibleCount >= 3) {
      return Math.min(currentIndex + 1, items.length - 1);
    }

    return currentIndex;
  }, [currentIndex, items.length, visibleCount]);

  const goToIndex = (index) => {
    const nextIndex = Math.max(0, Math.min(index, maxIndex));
    setCurrentIndex(nextIndex);
  };

  const handleTouchStart = (event) => {
    touchStartXRef.current = event.touches[0].clientX;
  };

  const handleTouchEnd = (event) => {
    const deltaX = event.changedTouches[0].clientX - touchStartXRef.current;

    if (Math.abs(deltaX) < 48) {
      return;
    }

    if (deltaX < 0) {
      goToIndex(currentIndex + 1);
      return;
    }

    goToIndex(currentIndex - 1);
  };

  const canGoPrevious = currentIndex > 0;
  const canGoNext = currentIndex < maxIndex;

  return (
    <div
      className="catalog-carousel"
      style={{
        '--items-per-view': visibleCount,
        '--current-index': currentIndex,
      }}
    >
      <div className="catalog-carousel__viewport-wrap">
        <ArrowButton direction="left" disabled={!canGoPrevious} onClick={() => goToIndex(currentIndex - 1)} />
        <div
          ref={viewportRef}
          className="catalog-carousel__viewport"
          role="region"
          aria-label="Carrossel de categorias do catalogo"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div className="catalog-carousel__track">
            {items.map((item, index) => (
              <div
                key={item.id}
                className={`catalog-carousel__slide ${index === highlightedIndex ? 'is-active' : ''}`}
                data-carousel-index={index}
              >
                <CarouselItem item={item} onSelect={onSelect} />
              </div>
            ))}
          </div>
        </div>
        <ArrowButton direction="right" disabled={!canGoNext} onClick={() => goToIndex(currentIndex + 1)} />
      </div>

      <div className="catalog-carousel__dots" aria-label="Posicao do carrossel">
        {Array.from({ length: dotCount }, (_, index) => (
          <button
            key={`dot-${index}`}
            type="button"
            className={`catalog-carousel__dot ${currentIndex === index ? 'is-active' : ''}`}
            onClick={() => goToIndex(index)}
            aria-label={`Ir para grupo ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}