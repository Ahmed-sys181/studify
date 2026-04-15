import { useState, useMemo } from 'react';
import { marketplaceItems, reviews, categories, types } from '../data/marketplaceData';
import '../styles/Marketplace.css';

export default function Marketplace() {
  const [selectedCategory, setSelectedCategory] = useState('Meuble');
  const [selectedType, setSelectedType] = useState('Vente');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('recent');
  const [actionFeedback, setActionFeedback] = useState('');

  const filteredItems = useMemo(() => {
    let results = marketplaceItems.filter(item => {
      const categoryMatch = item.category === selectedCategory;
      const typeMatch = item.type === selectedType;
      const searchMatch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase());
      return categoryMatch && typeMatch && searchMatch;
    });

    results.sort((a, b) => {
      if (sortBy === 'price') return a.price - b.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      return 0;
    });

    return results;
  }, [selectedCategory, selectedType, searchTerm, sortBy]);

  const handleAddListing = () => {
    setActionFeedback('Creation d\'annonce: formulaire bientot disponible. En attendant, utilisez le bouton Contacter sur un article.');
  };

  const handleContactSeller = (item) => {
    if (item.type === 'Échange') {
      setActionFeedback(`Demande d'echange envoyee a ${item.seller} pour ${item.title}.`);
      return;
    }

    setActionFeedback(`Message envoye au vendeur ${item.seller} pour ${item.title}.`);
  };

  return (
    <div className="marketplace-container">
      <div className="marketplace-header">
        <h1>🛍️ Marketplace Étudiante</h1>
        <p>Échange, vente et partage entre étudiants</p>
      </div>

      <div className="marketplace-content">
        {actionFeedback && (
          <div className="marketplace-feedback-panel">
            <p>{actionFeedback}</p>
            <button className="dismiss-feedback-btn" onClick={() => setActionFeedback('')}>
              Fermer
            </button>
          </div>
        )}

        {/* Search Bar */}
        <div className="marketplace-search">
          <input
            type="text"
            placeholder="Chercher un article..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
          <button className="add-listing-btn" onClick={handleAddListing}>➕ Ajouter une annonce</button>
        </div>

        {/* Filters */}
        <div className="filters-section">
          <div className="filter-group">
            <label>Catégorie</label>
            <div className="filter-buttons">
              {categories.map(cat => (
                <button
                  key={cat}
                  className={`filter-btn ${selectedCategory === cat ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(cat)}
                >
                  {cat === 'Meuble' && '🪑'} {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="filter-group">
            <label>Type</label>
            <div className="filter-buttons">
              {types.map(type => (
                <button
                  key={type}
                  className={`filter-btn ${selectedType === type ? 'active' : ''}`}
                  onClick={() => setSelectedType(type)}
                >
                  {type === 'Vente' && '💵'}
                  {type === 'Échange' && '🔄'}
                  {type === 'Partage' && '📤'} {type}
                </button>
              ))}
            </div>
          </div>

          <div className="filter-group">
            <label>Trier par</label>
            <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
              <option value="recent">Plus récent</option>
              <option value="price">Prix croissant</option>
              <option value="rating">Meilleure note</option>
            </select>
          </div>
        </div>

        {/* Items Grid */}
        <div className="marketplace-grid">
          {filteredItems.length === 0 ? (
            <div className="no-items">
              <p>Aucun article trouvé</p>
              <p>Soyez le premier à ajouter une annonce! 🎉</p>
            </div>
          ) : (
            filteredItems.map(item => (
              <div key={item.id} className="marketplace-card">
                <div className="card-image">
                  <span className="item-icon">{item.image}</span>
                  <span className="type-badge">{item.type}</span>
                </div>

                <div className="card-content">
                  <h3>{item.title}</h3>
                  <p className="description">{item.description}</p>

                  <div className="item-details">
                    <div className="detail">
                      <span className="detail-icon">📍</span>
                      <span>{item.location}</span>
                    </div>
                    <div className="detail">
                      <span className="detail-icon">📅</span>
                      <span>{item.postedDate}</span>
                    </div>
                  </div>

                  <div className="condition-tag">
                    {item.condition}
                  </div>

                  {item.exchangeFor && (
                    <div className="exchange-info">
                      <span className="exchange-label">Cherche:</span>
                      <span className="exchange-value">{item.exchangeFor}</span>
                    </div>
                  )}
                </div>

                <div className="card-footer">
                  <div className="seller-info">
                    <span className="seller-name">Vendeur: {item.seller}</span>
                    <div className="seller-rating">
                      ⭐ {item.rating}
                      <span className="review-count">({item.reviews} avis)</span>
                    </div>
                  </div>

                  <div className="card-bottom">
                    {item.type === 'Vente' && (
                      <span className="price">{item.price} TND</span>
                    )}
                    {item.type === 'Échange' && (
                      <span className="exchange-badge">Proposer un échange</span>
                    )}
                    {item.type === 'Partage' && (
                      <span className="sharing-info">Fichiers: {item.price} TND</span>
                    )}
                    <button className="contact-seller-btn" onClick={() => handleContactSeller(item)}>
                      Contacter
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* User Reviews Section */}
        <section className="reviews-section">
          <h2>📝 Avis de Nos Utilisateurs</h2>
          <div className="reviews-grid">
            {reviews.map(review => (
              <div key={review.id} className="review-card">
                <div className="review-header">
                  <span className="reviewer-name">{review.author}</span>
                  <span className="review-rating">{'⭐'.repeat(review.rating)}</span>
                </div>
                <p className="review-comment">"{review.comment}"</p>
                <span className="review-date">{review.date}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Features Section */}
        <section className="marketplace-features">
          <h2>Pourquoi Studify Marketplace?</h2>
          <div className="features-grid">
            <div className="feature">
              <div className="feature-icon">🛡️</div>
              <h3>Sécurisé</h3>
              <p>Profils vérifiés et système d'avis</p>
            </div>
            <div className="feature">
              <div className="feature-icon">💚</div>
              <h3>Écologique</h3>
              <p>Réduisez les déchets, achetez d'occasion</p>
            </div>
            <div className="feature">
              <div className="feature-icon">💰</div>
              <h3>Économique</h3>
              <p>Jusqu'à 70% moins cher que neuf</p>
            </div>
            <div className="feature">
              <div className="feature-icon">🤝</div>
              <h3>Communautaire</h3>
              <p>Entraides entre étudiants</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
