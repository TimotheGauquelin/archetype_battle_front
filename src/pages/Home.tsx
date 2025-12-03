import React from 'react';
import Example from '../components/Example';

const Home: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 text-gray-800">Page d'accueil</h1>
      <Example title="Bienvenue">
        <p className="mt-2">Ceci est un exemple de composant réutilisable.</p>
      </Example>
    </div>
  );
};

export default Home;

