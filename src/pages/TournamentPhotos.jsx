import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/common/Navbar';

const TournamentPhotos = () => {
  const { id } = useParams(); // This grabs 'iitb-iv', 'nlu-open', etc.

  return (
    <div className="min-h-screen bg-background pt-32 pb-24">
      <Navbar />
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-4xl font-serif text-primary mb-12">Viewing Media for: {id.replace('-', ' ')}</h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {/* Map your specific image/video arrays here */}
          <div className="aspect-square bg-primary/5 rounded-2xl"></div>
          <div className="aspect-square bg-primary/5 rounded-2xl"></div>
        </div>
      </div>
    </div>
  );
};

export default TournamentPhotos;