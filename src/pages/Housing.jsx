import { useState, useMemo } from 'react';
import { housings, faculties } from '../data/housingData';
import '../styles/Housing.css';

export default function Housing() {
  const minBudget = Math.min(...housings.map((house) => house.price));
  const maxBudget = Math.max(...housings.map((house) => house.price));

  const [filters, setFilters] = useState({
    budget: maxBudget,
    distance: 5,
    faculty: 'Toutes facultés',
    transport: []
  });
  const [sortBy, setSortBy] = useState('rating');

  const resetFilters = () => {
    setFilters({
      budget: maxBudget,
      distance: 10,
      faculty: 'Toutes facultés',
      transport: []
    });
    setSortBy('rating');
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    if (name === 'transport') {
      const newTransport = filters.transport.includes(value)
        ? filters.transport.filter(t => t !== value)
        : [...filters.transport, value];
      setFilters({ ...filters, transport: newTransport });
    } else {
      setFilters({ ...filters, [name]: name === 'budget' || name === 'distance' ? parseFloat(value) : value });
    }
  };

  const filteredAndSorted = useMemo(() => {
    let results = housings.filter(house => {
      const budgetMatch = house.price <= filters.budget;
      const distanceMatch = house.distance <= filters.distance;
      const facultyMatch = filters.faculty === 'Toutes facultés' || house.faculty === filters.faculty;
      const transportMatch = filters.transport.length === 0 || 
        filters.transport.some(t => house.transport.includes(t));
      
      return budgetMatch && distanceMatch && facultyMatch && transportMatch;
    });

    results.sort((a, b) => {
      if (sortBy === 'price') return a.price - b.price;
      if (sortBy === 'distance') return a.distance - b.distance;
      if (sortBy === 'rating') return b.rating - a.rating;
      return 0;
    });

    return results;
  }, [filters, sortBy]);

  return (
    <div className="housing-container">
      <div className="housing-header">
        <h1>🏠 Module Logement Intelligent</h1>
        <p>Trouvez le logement étudiant idéal selon vos critères</p>
      </div>

      <div className="housing-layout">
        <aside className="filters-panel">
          <h2>Filtres</h2>
          
          <div className="filter-group">
            <label>Budget: {filters.budget} TND/mois</label>
            <input
              type="range"
              name="budget"
              min={minBudget}
              max={maxBudget}
              value={filters.budget}
              onChange={handleFilterChange}
            />
            <div className="range-values">
              <span>{minBudget} TND</span>
              <span>{maxBudget} TND</span>
            </div>
          </div>

          <div className="filter-group">
            <label>Distance: {filters.distance} km</label>
            <input
              type="range"
              name="distance"
              min="0"
              max="10"
              step="0.5"
              value={filters.distance}
              onChange={handleFilterChange}
            />
            <div className="range-values">
              <span>0 km</span>
              <span>10 km</span>
            </div>
          </div>

          <div className="filter-group">
            <label htmlFor="faculty">Faculté</label>
            <select
              id="faculty"
              name="faculty"
              value={filters.faculty}
              onChange={handleFilterChange}
            >
              {faculties.map(fac => (
                <option key={fac} value={fac}>{fac}</option>
              ))}
            </select>
          </div>

          <div className="filter-group">
            <label>Moyens de Transport</label>
            <div className="transport-checkboxes">
              {['Metro', 'Bus', 'Vélo', 'Train'].map(transport => (
                <label key={transport} className="checkbox-label">
                  <input
                    type="checkbox"
                    name="transport"
                    value={transport}
                    checked={filters.transport.includes(transport)}
                    onChange={handleFilterChange}
                  />
                  {transport}
                </label>
              ))}
            </div>
          </div>

          <div className="filter-group">
            <label htmlFor="sort">Trier par</label>
            <select
              id="sort"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="rating">Meilleure note</option>
              <option value="price">Prix (moins cher)</option>
              <option value="distance">Distance (plus proche)</option>
            </select>
          </div>

          <button className="reset-filters-btn" onClick={resetFilters}>
            Reinitialiser les filtres
          </button>
        </aside>

        <main className="housing-listings">
          <div className="results-header">
            <h2>{filteredAndSorted.length} logements trouvés</h2>
          </div>

          {filteredAndSorted.length === 0 ? (
            <div className="no-results">
              <p>Aucun logement ne correspond à vos critères. 😢</p>
              <p>Élargissez vos filtres pour voir plus d'options.</p>
            </div>
          ) : (
            <div className="listings-grid">
              {filteredAndSorted.map(house => (
                <div key={house.id} className="housing-card">
                  <div className="card-header">
                    <span className="house-icon">{house.image}</span>
                    <div className="card-title">
                      <h3>{house.title}</h3>
                      <p className="price">{house.price} TND/mois</p>
                    </div>
                  </div>
                  
                  <div className="card-content">
                    <p className="description">{house.description}</p>
                    
                    <div className="details">
                      <div className="detail">
                        <span className="label">📍 Localisation</span>
                        <span className="value">{house.location}</span>
                      </div>
                      <div className="detail">
                        <span className="label">📏 Distance</span>
                        <span className="value">{house.distance} km</span>
                      </div>
                      <div className="detail">
                        <span className="label">🏫 Faculté</span>
                        <span className="value">{house.faculty}</span>
                      </div>
                    </div>

                    <div className="transport-tags">
                      {house.transport.map(t => (
                        <span key={t} className="tag">{t}</span>
                      ))}
                    </div>

                    <div className="amenities">
                      {house.amenities.map(amenity => (
                        <span key={amenity} className="amenity-tag">✓ {amenity}</span>
                      ))}
                    </div>
                  </div>

                  <div className="card-footer">
                    <div className="rating">
                      <span className="stars">⭐ {house.rating}</span>
                      <span className="reviews">({house.reviews} avis)</span>
                    </div>
                    <button className="contact-btn">Contacter</button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
