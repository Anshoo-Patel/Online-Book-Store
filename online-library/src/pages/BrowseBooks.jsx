import{ useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './BrowseBooks.css';

function BrowseBooks() {
  const { category } = useParams(); 
  const books = useSelector(state => state.books.books);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredBooks = books.filter(book => {
    const matchesCategory = category ? book.category === category : true;
    const matchesSearch = book.title.toLowerCase().includes(searchTerm.toLowerCase()) || book.author.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className='books-container'>
      <h2 style={{textAlign: 'center'}}>{category ? `${category} Books` : 'Browse Books'}</h2>
      <input
        type="text"
        placeholder="Search by title or author"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className='search-input'
      />
      <div className='book-display'>
        {filteredBooks.map(book => (
          <div key={book.id} className='card-book'>
            <img className='cover-image' src={book.coverImage} alt='' height='200px' width='200px'/>
            <p style={{fontWeight: "bold",marginTop: '7px'}}>{book.title}</p>
            <p className='book-author'>{book.author}</p>
            <Link style={{fontWeight: "900"}} to={`/books/${book.id}`}>Show more</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BrowseBooks;
