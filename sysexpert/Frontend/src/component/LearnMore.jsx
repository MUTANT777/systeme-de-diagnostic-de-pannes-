import React from 'react';
import "./LearnMore.css";

export default function LearnMore() {
  return (
    <div className="learn-more-container">
      <h1 className="learn-more-heading">Documentation du Système Expert de Diagnostic de Panne</h1>
      <p>
        Bienvenue dans la documentation du Système Expert de Diagnostic de Panne. Ce système est conçu pour aider à diagnostiquer les pannes potentielles dans différents systèmes et équipements.
      </p>
      <h2 className="learn-more-subheading">Fonctionnalités principales :</h2>
      <ul className="learn-more-list">
        <li>Analyse des symptômes : Le système recueille des informations sur les symptômes observés par l'utilisateur.</li>
        <li>Base de connaissances : Il dispose d'une base de connaissances contenant des informations sur les pannes possibles et les solutions associées.</li>
        <li>Diagnostic automatique : En utilisant les données fournies par l'utilisateur, le système propose des diagnostics et des solutions potentielles.</li>
        <li>Interface utilisateur conviviale : L'interface est conçue pour être simple et intuitive, permettant à l'utilisateur de fournir des informations facilement.</li>
      </ul>
      <h2 className="learn-more-subheading">Utilisation :</h2>
      <p>
        Pour utiliser le système, suivez ces étapes :
      </p>
      <ol className="learn-more-list">
        <li>Entrez les symptômes observés dans le formulaire de diagnostic.</li>
        <li>Cliquez sur le bouton de diagnostic pour obtenir les résultats.</li>
        <li>Consultez les diagnostics et les solutions proposées par le système.</li>
        <li>Si nécessaire, suivez les instructions pour effectuer les réparations nécessaires.</li>
      </ol>
      <p>
        Pour plus d'informations ou pour signaler des problèmes, veuillez contacter le support technique.
      </p>
    </div>
  );
}
