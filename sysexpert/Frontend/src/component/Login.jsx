import React, { useState } from 'react';
import "./Login.css";

export default function Login() {
  // Déclaration des états pour les champs de formulaire
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Fonction pour gérer la soumission du formulaire
  const handleSubmit = (event) => {
    event.preventDefault();
    // Ajoutez ici la logique pour la validation des informations de connexion
    console.log('Email:', email);
    console.log('Password:', password);
    // Réinitialiser les champs de formulaire après la soumission
    setEmail('');
    setPassword('');
  };

  return (
    <>
      <div className="container mx-auto mt-10">
        <h2 className="text-2xl font-bold mb-4">Connexion</h2>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Adresse Email</label>
            <input type="email" id="email" className="border border-gray-400 rounded-md px-4 py-2 w-full" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 font-bold mb-2">Mot de passe</label>
            <input type="password" id="password" className="border border-gray-400 rounded-md px-4 py-2 w-full" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Se connecter</button>
        </form>
      </div>
    </>
  );
}
