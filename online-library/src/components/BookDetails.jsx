import { useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import './BookDetails.css';

function BookDetails() {
  const { bookId } = useParams();
  const book = useSelector(state => state.books.books.find(b => b.id.toString() === bookId));

  return (
    <div className='book-card'>
      <div className='book-items'>
      <div className='img-div'>
      <img src={book.coverImage} alt=''height='300px' width='300px' className='book-cover'/>
      </div>
      <div className='book-detail'>
      <h2>{book.title}</h2>
      <p className='book-author'>Author: {book.author}</p>
      <p className='book-cate' style={{fontSize: '1.2rem'}}>Category: {book.category}</p>
      <p className='book-disc' style={{fontSize: '1.2rem'}}>Description: {book.description}</p>
      <p className='book-rating' style={{fontSize: '1.2rem'}}>Rating: {book.rating}</p>
      <Link to="/browse">Back to Browse</Link>
      </div>
      </div>
    </div>
  );
}

export default BookDetails;
