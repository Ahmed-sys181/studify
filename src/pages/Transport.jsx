import { useState } from 'react';
import { transportModes, routeExamples } from '../data/transportData';
import '../styles/Transport.css';

export default function Transport() {
  const [selectedRoute, setSelectedRoute] = useState(0);

  return (
    <div className="transport-container">
      <div className="transport-header">
        <h1>🚌 Module Transport</h1>
        <p>Explorateur les moyens de transport disponibles et optimisez vos trajets</p>
      </div>

      <div className="transport-layout">
        {/* Transport Modes Section */}
        <section className="transport-modes">
          <h2>Moyens de Transport Disponibles</h2>
          <div className="modes-grid">
            {transportModes.map(mode => (
              <div key={mode.id} className="transport-card">
                <div className="mode-icon" style={{ color: mode.color }}>
                  {mode.icon}
                </div>
                <h3>{mode.type}</h3>
                <p className="description">{mode.description}</p>
                <div className="mode-details">
                  <div className="detail-item">
                    <span className="detail-label">Durée moyenne</span>
                    <span className="detail-value">{mode.avgDuration} min</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Coût moyen</span>
                    <span className="detail-value">{mode.cost} TND</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Disponibilité</span>
                    <span className="detail-value">{mode.availability}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Route Planner Section */}
        <section className="route-planner">
          <h2>Planificateur de Trajet</h2>
          
          <div className="route-selector">
            <div className="route-buttons">
              {routeExamples.map((route, index) => (
                <button
                  key={index}
                  className={`route-btn ${selectedRoute === index ? 'active' : ''}`}
                  onClick={() => setSelectedRoute(index)}
                >
                  <span className="route-from">{route.from}</span>
                  <span className="arrow">→</span>
                  <span className="route-to">{route.to}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="route-details">
            <h3>
              De <strong>{routeExamples[selectedRoute].from}</strong> à{' '}
              <strong>{routeExamples[selectedRoute].to}</strong>
            </h3>
            
            <div className="routes-list">
              {routeExamples[selectedRoute].routes.map((route, index) => (
                <div key={index} className="route-option">
                  <div className="route-option-header">
                    <div className="transport-info">
                      <span className="transport-icon">
                        {transportModes.find(m => m.type === route.transport)?.icon}
                      </span>
                      <div className="transport-details">
                        <h4>{route.transport}</h4>
                        <p>Fréquence: {route.frequency}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="route-stats">
                    <div className="stat">
                      <span className="stat-icon">⏱️</span>
                      <div>
                        <span className="stat-label">Durée</span>
                        <span className="stat-value">{route.duration} min</span>
                      </div>
                    </div>
                    <div className="stat">
                      <span className="stat-icon">💰</span>
                      <div>
                        <span className="stat-label">Coût</span>
                        <span className="stat-value">{route.cost} TND</span>
                      </div>
                    </div>
                  </div>
                  
                  <button className="select-route-btn">Choisir</button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tips Section */}
        <section className="transport-tips">
          <h2>💡 Conseils de Transport Étudiant</h2>
          <div className="tips-grid">
            <div className="tip-card">
              <div className="tip-icon">🎟️</div>
              <h3>Abonnement Jeune</h3>
              <p>-50% sur les abonnements mensuels avec votre carte étudiant</p>
            </div>
            <div className="tip-card">
              <div className="tip-icon">🚴</div>
              <h3>Vélos Gratuits</h3>
              <p>Station de vélo partout dans la ville pour les trajets courts</p>
            </div>
            <div className="tip-card">
              <div className="tip-icon">🗺️</div>
              <h3>Trajet Optimal</h3>
              <p>Utilisez notre app pour trouver l'option la plus économique</p>
            </div>
            <div className="tip-card">
              <div className="tip-icon">🤝</div>
              <h3>Covoiturage</h3>
              <p>Partagez un trajet et divisez les frais avec d'autres étudiants</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
