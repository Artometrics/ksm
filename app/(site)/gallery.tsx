import Head from "expo-router/head";
import { galleryItems } from "@/data/gallery";

export default function GalleryScreen() {
  return (
    <>
      <Head>
        <title>Art · Kyle McAuliffe</title>
        <meta
          name="description"
          content="Pictures on file — brand, editorial, and identity stills."
        />
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <div className="ksm-page-sheet ksm-has-tickets">
        <header className="ksm-journal-head">
          <h1 className="ksm-headline ksm-sheet-title">Art</h1>
          <p className="ksm-lede">Pictures on file.</p>
        </header>
        <div className="ksm-ticket-grid ksm-ticket-grid--3">
          {galleryItems.map((item) => (
            <figure key={item.id} className="ksm-ticket">
              <span className="ksm-ticket-plate">
                <img src={item.src} alt={item.title} />
              </span>
              <figcaption className="ksm-ticket-body">
                <span className="ksm-card-title">{item.title}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </>
  );
}
