import { Link } from 'react-router-dom';
import '../styles/Home.css';

export default function Home() {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <span className="hero-kicker">Plateforme Etudiante en Tunisie</span>
          <h1 className="hero-title">
            <span className="title-icon">🎓</span>
            Studify — L'Espace Étudiant Intelligent
          </h1>
          <p className="hero-subtitle">
            Simplifie ta vie étudiante grâce à une plateforme centralisée qui regroupe logements, 
            services et opportunités en un seul endroit.
          </p>
          <div className="hero-highlights">
            <span className="highlight-chip">Prix en TND</span>
            <span className="highlight-chip">Communaute verifiee</span>
            <span className="highlight-chip">Modules connectes</span>
          </div>
          <div className="hero-buttons">
            <Link to="/housing" className="hero-btn primary">Trouver un Logement</Link>
            <Link to="/deals" className="hero-btn secondary">Découvrir les Bons Plans</Link>
          </div>
          <div className="hero-stats">
            <div className="hero-stat">
              <span className="hero-stat-value">10+</span>
              <span className="hero-stat-label">Logements actifs</span>
            </div>
            <div className="hero-stat">
              <span className="hero-stat-value">12+</span>
              <span className="hero-stat-label">Annonces marketplace</span>
            </div>
            <div className="hero-stat">
              <span className="hero-stat-value">6</span>
              <span className="hero-stat-label">Modes transport</span>
            </div>
          </div>
        </div>
        <div className="hero-image">
          <div className="hero-illustration" aria-hidden="true">
            <div className="hero-orb orb-one">🏠</div>
            <div className="hero-orb orb-two">🚌</div>
            <div className="hero-orb orb-three">🎁</div>
            <div className="hero-orb orb-four">🛍️</div>
          </div>
        </div>
      </section>

      {/* Modules Overview */}
      <section className="modules-overview">
        <h2>Nos 4 Modules Principaux</h2>
        <div className="modules-grid">
          {/* Housing Module */}
          <div className="module-card">
            <div className="module-icon">🏠</div>
            <h3>Logement Intelligent</h3>
            <p>
              Trouve le logement étudiant idéal selon ton budget, ta distance de l'université 
              et tes moyens de transport préférés.
            </p>
            <ul className="module-features">
              <li>✓ 100+ logements disponibles</li>
              <li>✓ Filtrage avancé</li>
              <li>✓ Recommandations intelligentes</li>
              <li>✓ Trajet optimisé</li>
            </ul>
            <Link to="/housing" className="module-btn">Explorez →</Link>
          </div>

          {/* Transport Module */}
          <div className="module-card">
            <div className="module-icon">🚌</div>
            <h3>Transport</h3>
            <p>
              Planifie tes trajets avec tous les moyens de transport disponibles. 
              Durée, coût et horaires en un coup d'œil.
            </p>
            <ul className="module-features">
              <li>✓ 6 modes de transport</li>
              <li>✓ Durée estimée</li>
              <li>✓ Coût calculé</li>
              <li>✓ Trajets optimaux</li>
            </ul>
            <Link to="/transport" className="module-btn">Découvrez →</Link>
          </div>

          {/* Student Deals Module */}
          <div className="module-card">
            <div className="module-icon">🎁</div>
            <h3>Bons Plans Étudiants</h3>
            <p>
              Accès à des restaurants, coworking spaces, formations et événements 
              avec réductions exceptionnelles pour les étudiants.
            </p>
            <ul className="module-features">
              <li>✓ Restaurants -30%</li>
              <li>✓ Coworking 160 TND/mois</li>
              <li>✓ Formations complètes</li>
              <li>✓ Événements gratuits</li>
            </ul>
            <Link to="/deals" className="module-btn">Parcourez →</Link>
          </div>

          {/* Marketplace Module */}
          <div className="module-card">
            <div className="module-icon">🛍️</div>
            <h3>Marketplace Étudiante</h3>
            <p>
              Vente, échange de meubles et partage de cours entre étudiants. 
              Économisez jusqu'à 70% sur vos achats.
            </p>
            <ul className="module-features">
              <li>✓ Meubles éco-responsables</li>
              <li>✓ Partage de cours</li>
              <li>✓ Avis vérifiés</li>
              <li>✓ Entraide communautaire</li>
            </ul>
            <Link to="/marketplace" className="module-btn">Explorez →</Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2>Pourquoi Choisir Studify?</h2>
        <div className="features-grid">
          <div className="feature-item">
            <span className="feature-number">1</span>
            <h4>Centralisé</h4>
            <p>Tout ce dont tu as besoin au même endroit</p>
          </div>
          <div className="feature-item">
            <span className="feature-number">2</span>
            <h4>Économique</h4>
            <p>Jusqu'à 50% d'économies sur logement</p>
          </div>
          <div className="feature-item">
            <span className="feature-number">3</span>
            <h4>Pour Tous</h4>
            <p>Gratuit et accessible à tous les étudiants</p>
          </div>
          <div className="feature-item">
            <span className="feature-number">4</span>
            <h4>Communauté</h4>
            <p>Partage et entraide entre étudiants</p>
          </div>
          <div className="feature-item">
            <span className="feature-number">5</span>
            <h4>Intelligent</h4>
            <p>Recommandations personnalisées</p>
          </div>
          <div className="feature-item">
            <span className="feature-number">6</span>
            <h4>Sécurisé</h4>
            <p>Profils vérifiés et avis authentiques</p>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="statistics">
        <div className="stat-card">
          <div className="stat-value">5,000+</div>
          <div className="stat-label">Étudiants Actifs</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">100+</div>
          <div className="stat-label">Logements</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">50+</div>
          <div className="stat-label">Bons Plans</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">1000+</div>
          <div className="stat-label">Articles Vendus</div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <h2>Prêt à Simplifier ta Vie Étudiante?</h2>
        <p>Rejoins des milliers d'étudiants qui font confiance à Studify</p>
        <Link to="/housing" className="cta-button">Commencer Maintenant →</Link>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h5>Studify</h5>
            <p>L'espace étudiant intelligent</p>
          </div>
          <div className="footer-section">
            <h5>Modules</h5>
            <ul>
              <li><Link to="/housing">Logements</Link></li>
              <li><Link to="/transport">Transport</Link></li>
              <li><Link to="/deals">Bons Plans</Link></li>
              <li><Link to="/marketplace">Marketplace</Link></li>
            </ul>
          </div>
          <div className="footer-section">
            <h5>Ressources</h5>
            <ul>
              <li><a href="#about">À propos</a></li>
              <li><a href="#contact">Nous Contacter</a></li>
              <li><a href="#blog">Blog</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Studify. Tous droits réservés. | Plateforme pour étudiants, par des étudiants. 💚</p>
        </div>
      </footer>
    </div>
  );
}
