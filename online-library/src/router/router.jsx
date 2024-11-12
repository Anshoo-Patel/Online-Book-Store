import { createBrowserRouter } from 'react-router-dom';
import HomePage from '../components/HomePage';
import BrowseBooks from "../pages/BrowseBooks";
import AddBook from '../pages/AddBook';
import BookDetails from "../components/BookDetails";
import NotFound from '../components/NotFound';
import App from '../App';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/browse', element: <BrowseBooks /> },
      { path: '/browse/:category', element: <BrowseBooks /> },
      { path: '/add', element: <AddBook /> },
      { path: '/books/:bookId', element: <BookDetails /> },
    ],
  },
  {
    path: '*',
    element: <NotFound />
  }
]);

export default router;
