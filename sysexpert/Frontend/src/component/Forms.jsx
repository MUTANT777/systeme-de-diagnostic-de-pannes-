import React, { useState } from 'react';
import './Forms.css';

export default function Forms() {
  // État pour stocker la description du problème de l'utilisateur
  const [problemDescription, setProblemDescription] = useState('');
  // État pour stocker le problème sélectionné par l'utilisateur
  const [selectedProblem, setSelectedProblem] = useState(null);

  // Fonction pour gérer le changement dans le champ d'entrée
  const handleInputChange = (event) => {
    setProblemDescription(event.target.value);
  };

  
  const frequentProblems = [
    'IL REFUSE DE DÉMARRER',
    'IL SE FIGE OCCASIONNELLEMENT',
    'SES MENUS SONT RALENTIS',
    'IL SE COMPORTE BIZARREMENT',
    'Écran bleu de la mort (BSOD)',
    'Problème de connexion Wi-Fi',
  ];

  // Fonction pour gérer le clic sur un des boutons de problème
  const handleProblemButtonClick = (problem) => {
    // Ajouter le problème au champ d'entrée
    setProblemDescription(problem);
    // Stocker le problème sélectionné
    setSelectedProblem(problem);
  };

  // Fonction pour gérer le clic sur le bouton "Submit"
  const handleSubmit = () => {
    // Vérifier si un problème est sélectionné
    if (selectedProblem) {
      // Vous pouvez exécuter le code pour passer au cas suivant ici
      console.log(`Passer au cas suivant pour le problème : ${selectedProblem}`);
    } else {
      // Gérer le cas où aucun problème n'est sélectionné
      console.log('Veuillez sélectionner un problème avant de soumettre.');
    }
  };

  return (
    <div className="form-container">
      <h1 className='h1'>Powerful Computer Diagnostic Tool</h1>
      <h2 className='h2'>Detecting defective computer components</h2>
      <h3 className='h3'>Describe some symptoms you observed</h3>
      <input
        type="text"
        className="input-field"
        placeholder="Describe symptoms..."
        value={problemDescription}
        onChange={handleInputChange}
      />
      <button className="submit-btn" onClick={handleSubmit}>Submit</button>
      <h2 className='h2'>Problèmes de diagnostic fréquents :</h2>
      <div className="btn-container">
        {frequentProblems.map((problem, index) => (
          <button
            key={index}
            className="btn"
            onClick={() => handleProblemButtonClick(problem)}
          >
            {problem}
          </button>
        ))}
      </div>
    </div>
  );
}
