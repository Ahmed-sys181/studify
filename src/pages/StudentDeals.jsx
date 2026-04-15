import { useState, useMemo } from 'react';
import { studentDeals, categories } from '../data/dealsData';
import '../styles/StudentDeals.css';

export default function StudentDeals() {
  const [selectedCategory, setSelectedCategory] = useState('Restaurant');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredDeals = useMemo(() => {
    return studentDeals.filter(deal => {
      const categoryMatch = deal.category === selectedCategory;
      const searchMatch = deal.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         deal.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         deal.address.toLowerCase().includes(searchTerm.toLowerCase());
      return categoryMatch && searchMatch;
    });
  }, [selectedCategory, searchTerm]);

  return (
    <div className="deals-container">
      <div className="deals-header">
        <h1>🎁 Bons Plans Étudiants</h1>
        <p>Découvrez les meilleures offres pour les étudiants par les étudiants</p>
      </div>

      <div className="deals-content">
        {/* Search and Filter */}
        <div className="search-filter-section">
          <input
            type="text"
            placeholder="Chercher un bon plan..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>

        {/* Category Tabs */}
        <div className="category-tabs">
          {categories.map(category => (
            <button
              key={category}
              className={`category-tab ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              <span className="tab-icon">
                {category === 'Restaurant' && '🍔'}
                {category === 'Coworking' && '💻'}
                {category === 'Formation' && '📚'}
                {category === 'Événement' && '🎉'}
              </span>
              {category}
              <span className="tab-count">
                ({studentDeals.filter(d => d.category === category).length})
              </span>
            </button>
          ))}
        </div>

        {/* Deals Grid */}
        <div className="deals-grid">
          {filteredDeals.length === 0 ? (
            <div className="no-deals">
              <p>Aucun bon plan trouvé pour cette catégorie 😢</p>
            </div>
          ) : (
            filteredDeals.map(deal => (
              <div key={deal.id} className="deal-card">
                <div className="deal-header">
                  <span className="deal-icon">{deal.icon}</span>
                  <div className="deal-title">
                    <h3>{deal.title}</h3>
                    <p className="deal-location">📍 {deal.address}</p>
                  </div>
                </div>

                <div className="deal-body">
                  <p className="deal-description">{deal.description}</p>
                  <div className="deal-offer">
                    <span className="offer-badge">✨ Offre spéciale</span>
                    <p className="offer-text">{deal.offer}</p>
                  </div>
                </div>

                <div className="deal-info">
                  <div className="info-item">
                    <span className="info-label">Horaires</span>
                    <span className="info-value">{deal.openingHours}</span>
                  </div>
                  <div className="info-item">
                    <span className="info-label">Note</span>
                    <span className="info-value">⭐ {deal.rating}</span>
                  </div>
                </div>

                <div className="deal-footer">
                  {deal.verified && <span className="verified-badge">✓ Vérifié</span>}
                  <button className="discover-btn">Découvrir</button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Statistics */}
        <div className="deals-stats">
          <div className="stat">
            <div className="stat-number">{studentDeals.length}</div>
            <div className="stat-label">Bons plans disponibles</div>
          </div>
          <div className="stat">
            <div className="stat-number">100%</div>
            <div className="stat-label">Vérifié par nos équipes</div>
          </div>
          <div className="stat">
            <div className="stat-number">-30%</div>
            <div className="stat-label">Économies moyennes</div>
          </div>
        </div>
      </div>
    </div>
  );
}
