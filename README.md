# Studify — L'Espace Étudiant Intelligent 🎓

A comprehensive React-based platform designed to simplify student life by centralizing housing, transportation, deals, and marketplace services in one intelligent space.

## 🌟 Features

Studify is a full-featured student platform with 4 main modules:

### 1. **Logement Intelligent** (Smart Housing) 🏠
- Browse 100+ available student housing options
- Advanced filtering by:
  - Budget (250€ - 700€/month)
  - Distance from campus (0 - 10 km)
  - Faculty/University
  - Transportation options
- Smart recommendations based on your preferences
- View amenities, ratings, and reviews
- Contact landlords directly

### 2. **Transport** 🚌
- Explore 6 transportation modes:
  - Metro, Bus, Tram, Train, Vélo, Voiture
- Plan routes with estimated duration and cost
- Compare multiple transport options
- Get tips for optimizing your commute
- Student discounts information

### 3. **Bons Plans Étudiants** (Student Deals) 🎁
- Discover special offers for students:
  - **Restaurants**: -30% with student card
  - **Coworking**: Spaces from 100€/month
  - **Formation**: Online courses and training
  - **Événements**: Free events for students
- All verified by our team
- Search and filter by category
- Average 30% savings

### 4. **Marketplace Étudiante** (Student Marketplace) 🛍️
- **Buy/Sell**: Second-hand furniture
- **Exchange**: Trade items with other students
- **Share**: Course notes and study materials
- Verified seller profiles with ratings
- Save up to 70% compared to new items
- Community-driven mutual aid

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone or extract the project:**
```bash
cd project
```

2. **Install dependencies:**
```bash
npm install
```

3. **Start the development server:**
```bash
npm run dev
```

4. **Open in browser:**
```
http://localhost:5173
```

## 📦 Project Structure

```
src/
├── components/
│   └── Navigation.jsx          # Main navigation bar
├── pages/
│   ├── Home.jsx               # Landing page
│   ├── Housing.jsx            # Housing module
│   ├── Transport.jsx          # Transport module
│   ├── StudentDeals.jsx       # Student deals
│   └── Marketplace.jsx        # Marketplace module
├── data/
│   ├── housingData.js         # Housing mock data
│   ├── transportData.js       # Transport data
│   ├── dealsData.js           # Deals and offers
│   └── marketplaceData.js     # Marketplace items
├── styles/
│   ├── Navigation.css
│   ├── Housing.css
│   ├── Transport.css
│   ├── StudentDeals.css
│   ├── Marketplace.css
│   └── Home.css
├── App.jsx                    # Main App with routing
├── App.css                    # Global styles
└── index.css                  # CSS variables and resets
```

## 🛠️ Tech Stack

- **React 19**: Frontend framework
- **React Router DOM**: Navigation and routing
- **Vite**: Module bundler and dev server
- **CSS3**: Styling and animations
- **JavaScript ES6+**: Modern JavaScript

## 📖 Available Scripts

### `npm run dev`
Starts the development server with hot module replacement (HMR).

### `npm run build`
Builds the application for production.

### `npm run preview`
Preview the production build locally.

### `npm run lint`
Run ESLint to check code quality.

## 🎯 Key Features

### Smart Filtering
- Real-time filtering on housing with multiple criteria
- Smart recommendations based on user preferences
- Sort by price, distance, or rating

### Responsive Design
- Mobile-first approach
- Works seamlessly on desktop, tablet, and mobile
- Touch-friendly interfaces

### User Experience
- Intuitive navigation between modules
- Clean and modern UI
- Fast loading times with Vite
- Smooth animations and transitions

## 📱 Module Details

### Housing Module
- **Filter Options**: Budget, Distance, Faculty, Transportation
- **Sorting**: Rating, Price, Distance
- **Card Layout**: Shows all important information at a glance
- **Contact**: Easy way to reach landlords

### Transport Module
- **6 Transport Types**: Each with duration, cost, and availability
- **Route Planner**: Compare multiple routes between locations
- **Tips Section**: Student transport advice
- **Interactive**: Hover effects and route selection

### Student Deals
- **4 Categories**: Restaurants, Coworking, Formation, Events
- **Search**: Full-text search across all deals
- **Verification**: All deals verified by platform
- **Statistics**: Show total deals and average savings

### Marketplace
- **3 Types**: Vente (Sale), Échange (Exchange), Partage (Sharing)
- **Filter**: By category and type
- **Seller Info**: Ratings and reviews
- **Reviews**: Real student testimonials

## 🎨 Design System

### Color Palette
- **Primary Gradient**: #667eea to #764ba2 (Purple)
- **Text**: #333 (Dark)
- **Light Background**: #f9f9f9
- **Borders**: #eee (Light Gray)

### Typography
- **Font Family**: Segoe UI, Tahoma, Geneva, Verdana
- **Font Size**: 16px base
- **Line Height**: 1.5

## 🔄 Data Structure

### Housing
```javascript
{
  id, title, location, faculty, price, distance,
  transport[], image, rating, reviews, amenities[], description
}
```

### Transport
```javascript
{
  id, type, icon, color, description,
  avgDuration, cost, availability
}
```

### Deals
```javascript
{
  id, category, icon, title, description,
  address, rating, offer, openingHours, verified
}
```

### Marketplace
```javascript
{
  id, category, type, title, description,
  price, image, seller, rating, reviews,
  condition, location, postedDate, available
}
```

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Vercel (recommended)
```bash
npm install -g vercel
vercel
```

### Deploy to Netlify
```bash
npm run build
# Drag and drop 'dist' folder to Netlify
```

## 📝 Mock Data

The application comes with comprehensive mock data:
- **6 housing options**
- **6 transportation modes**
- **8 student deals**
- **8 marketplace items**
- **3 example routes**

All data can be found in the `src/data/` folder.

## 🔮 Future Enhancements

- User authentication and profiles
- Real database integration
- Payment processing for marketplace
- Push notifications for deals
- Map integration
- Real-time chat with sellers/landlords
- Advanced recommendation algorithm
- Mobile app version
- Dark mode support

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the MIT License.

## 💬 Support

For issues, feature requests, or questions, please reach out to the development team.

---

**Studify — Simplifying Student Life!** 🎓💚

Made with ❤️ for students, by students.
