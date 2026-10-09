const PHOTOS = [
  { src: '/images/gallery-1.jpg', alt: 'Stone Town market street' },
  { src: '/images/gallery-2.jpg', alt: 'The Rock restaurant, Zanzibar' },
  { src: '/images/gallery-3.jpg', alt: 'Stone Town alley' },
  { src: '/images/gallery-4.jpg', alt: 'Elephant on the savanna' },
  { src: '/images/gallery-5.jpg', alt: 'Zebras at a waterhole' },
  { src: '/images/gallery-6.jpg', alt: 'Lion cubs' },
]

export default function Gallery() {
  return (
    <section className="section gallery">
      <div className="container">
        <div className="gallery-grid" data-stagger>
          {PHOTOS.map((p) => (
            <figure className="gallery-item" key={p.src} data-item>
              <img src={p.src} alt={p.alt} loading="lazy" />
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
