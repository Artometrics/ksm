import { ALL_DIALS } from "@/data/dials";

export function FastDials() {
  return (
    <section className="ksm-dials" aria-labelledby="fast-dials">
      <h2 id="fast-dials" className="ksm-home-section-title">
        Fast dials
      </h2>
      <p className="ksm-lede">Tap a tile to open it.</p>
      <nav className="ksm-dial-grid" aria-label="Fast dials">
        {ALL_DIALS.map((item) => (
          <a key={item.id} className="ksm-dial ksm-dial--home" href={item.href}>
            <span className="ksm-dial-art">
              {item.art ? (
                <img src={item.art} alt="" />
              ) : (
                <span className="ksm-dial-fallback">{item.title[0]}</span>
              )}
            </span>
            <span className="ksm-dial-title">{item.title}</span>
          </a>
        ))}
      </nav>
    </section>
  );
}
