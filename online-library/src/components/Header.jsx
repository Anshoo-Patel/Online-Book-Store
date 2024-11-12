import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header>
      <nav>
        <div>
          <h1>Book Store</h1>
        </div>
        <div>
        <Link to="/" className='link'>Home</Link>
        <Link to="/browse" className='link'>Browse Books</Link>
        <Link to="/add" className='link'>Add Book</Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
