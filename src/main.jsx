import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from './components/Root/Root';
import Home from './components/Home/Home';
import ListedBooks from './components/ListedBooks/ListedBooks';
import Read from './components/Read/Read';
import BookDetails from './components/BookDetails/BookDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/listedbooks',
        loader: () => fetch('/books.json'),
        element: <ListedBooks></ListedBooks>
      },
      {
        path: '/read',
        loader: () => fetch('/books.json'),
        element: <Read></Read>
      },
      {
        path: '/books/:bookId',
        loader: () => fetch('/books.json'),
        element: <BookDetails></BookDetails>
      }
    ]
    
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <RouterProvider router={router} />
  </React.StrictMode>,
)
