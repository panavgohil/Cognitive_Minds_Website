import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const images = [
  {
    src: 'https://res.cloudinary.com/dzb964pqt/image/upload/v1781874820/IMG-20251005-WA0072_aqvz4k.jpg',
    alt: 'Cognitive Minds members at a debating tournament',
  },
  {
    src: 'https://res.cloudinary.com/dzb964pqt/image/upload/v1781874819/IMG-20251005-WA0040_yalosh.jpg',
    alt: 'Debaters representing Cognitive Minds',
  },
  {
    src: 'https://res.cloudinary.com/dzb964pqt/image/upload/v1781874819/20251004_184206_dhwdn2.jpg',
    alt: 'A Cognitive Minds tournament moment',
  },
  {
    src: 'https://res.cloudinary.com/dzb964pqt/image/upload/v1781874621/20251004_180028_gxcxew.jpg',
    alt: 'Members during a debate event',
  },
];

const VisualStory = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % images.length);
    }, 5000);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden bg-transparent px-6 py-24 md:px-12 md:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.3em] text-accent">
            In the Room
          </p>
          <h2 className="text-4xl font-serif leading-tight text-primary md:text-5xl">
            The argument is only half the story.
          </h2>
          <p className="mt-6 max-w-md text-sm leading-7 text-secondary">
            The other half is community—researching together, travelling the
            circuit, and learning to hold the room.
          </p>

          <div className="mt-8 flex gap-2" aria-label="Select slideshow image">
            {images.map((image, index) => (
              <button
                key={image.src}
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={`Show image ${index + 1}`}
                aria-current={activeIndex === index}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  activeIndex === index ? 'w-10 bg-accent' : 'w-4 bg-primary/15 hover:bg-primary/30'
                }`}
              />
            ))}
          </div>
        </div>

        <div className="relative lg:col-span-8">
          <div
            aria-hidden="true"
            className="absolute -inset-8 -z-10 translate-x-5 translate-y-5 border border-accent/20"
          />
          <div className="relative aspect-[16/10] overflow-hidden rounded-[2rem] bg-primary/10 shadow-2xl shadow-primary/10">
            <AnimatePresence mode="sync">
              <motion.img
                key={images[activeIndex].src}
                src={images[activeIndex].src}
                alt={images[activeIndex].alt}
                initial={{ opacity: 0, scale: 1.035 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ opacity: { duration: 1.1 }, scale: { duration: 5 } }}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-t from-primary/35 via-transparent to-transparent" />
            <p className="absolute bottom-6 left-6 text-[10px] font-bold uppercase tracking-[0.28em] text-white/80">
              Cognitive Minds on the circuit
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisualStory;
