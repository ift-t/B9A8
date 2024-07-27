import { useEffect, useState } from "react";
import Banner from "../Banner/Banner";
import Books from "../Books/Books";


const Home = () => {

    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch('/books.json')
        .then(res => res.json())
        .then(data => setBooks(data));
    }, [])

    return (
        <div>
            <Banner></Banner>
            <h1 className="text-center text-3xl m-4">Books</h1>
            <div className="flex flex-wrap gap-4">
                {
                    books.map(book => <Books key={book.bookId} book={book}></Books>)
                }
            </div>
        </div>
    );
};

export default Home;