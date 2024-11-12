import { Link } from 'react-router-dom';
import './HomePage.css';

const categories = [
  { name: 'Fiction' },
  { name: 'Adventure' },
  { name: 'Sci-Fi'},
  { name: 'Fantasy' },
  { name: 'Romance' },
  { name: 'Mystery' },
  { name: 'Historical Fiction' },
  { name: 'Philosophical' },
  { name: 'Classic' },
];

function HomePage() {
  return (
    <div className="home-container">
      <h2><span>Welcome</span> to Online Library</h2>
      <h3>Readers, choose your book</h3>
      <div className="category-grid">
        {categories.map((category) => (
          <Link to={`/browse/${category.name}`} key={category.name} className="category-card">
            <div className="category-background">
              <div className="category-overlay">
                <h4 className="category-name">{category.name}</h4>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
