export type Slide = { src: string; alt: string; caption?: string };

export function ImageCarousel({ slides }: { slides: Slide[] }) {
  if (!slides.length) return null;
  return (
    <div className="ksm-carousel" aria-label="Project pictures">
      <div className="ksm-carousel-track">
        {slides.map((slide) => (
          <figure key={slide.src} className="ksm-carousel-slide">
            <img src={slide.src} alt={slide.alt} />
            {slide.caption ? <figcaption>{slide.caption}</figcaption> : null}
          </figure>
        ))}
      </div>
    </div>
  );
}
