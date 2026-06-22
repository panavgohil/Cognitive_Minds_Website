import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/common/Navbar';

// Paste your Cloudinary URLs here
const tournamentMedia = {
  'iitb-iv': {
    title: "19th IITB IV",
    images: [
      "https://res.cloudinary.com/dzb964pqt/image/upload/v1781874820/IMG-20251005-WA0072_aqvz4k.jpg",
      "https://res.cloudinary.com/dzb964pqt/image/upload/v1781874819/IMG-20251005-WA0040_yalosh.jpg",
      "https://res.cloudinary.com/dzb964pqt/image/upload/v1781874819/20251004_184206_dhwdn2.jpg",
      "https://res.cloudinary.com/dzb964pqt/image/upload/v1781874621/20251004_180028_gxcxew.jpg",
      "https://res.cloudinary.com/dzb964pqt/image/upload/v1781874594/20251002_194201_vr9j6o.jpg"
    ]
  },
  'nlu-open': {
    title: "NLU Delhi Open",
    images: ["URL_HERE"]
  }
};

const TournamentPhotos = () => {
  const { id } = useParams();
  const data = tournamentMedia[id];

  if (!data) return <div className="pt-32 text-center">Tournament not found</div>;

  return (
    <div className="min-h-screen bg-transparent pt-32 pb-24">
      <Navbar />
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-4xl font-serif text-primary mb-12">{data.title}</h1>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {data.images.map((url, index) => (
            <img 
              key={index} 
              src={url} 
              alt="Gallery" 
              className="w-full h-64 object-cover rounded-2xl shadow-sm hover:scale-[1.02] transition-transform duration-300"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TournamentPhotos;
