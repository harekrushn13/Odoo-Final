import 'primeicons/primeicons.css';
import 'primereact/resources/primereact.min.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import { Toast } from "primereact/toast";
import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from "../components/Header";
import BookCard from "../components/BookCard"


const Landing = () => {
    const toast = useRef(null);
    const [books, setBooks] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchBooks = async () => {
            const urls = [
                "https://www.googleapis.com/books/v1/volumes?q=isbn:9781787123427",
                "https://www.googleapis.com/books/v1/volumes?q=isbn:9781787123428",
                "https://www.googleapis.com/books/v1/volumes?q=isbn:9781787123429",
                "https://www.googleapis.com/books/v1/volumes?q=isbn:9781787123429",
                "https://www.googleapis.com/books/v1/volumes?q=isbn:9781787123429",
                "https://www.googleapis.com/books/v1/volumes?q=isbn:9781787123429",
            ];

            try {
                const responses = await Promise.all(urls.map(url => fetch(url)));
                const data = await Promise.all(responses.map(response => response.json()));
                const allBooks = data.flatMap(item => item.items || []);
                setBooks(allBooks);
            } catch (error) {
                console.error("Error fetching books:", error);
            }
        };

        fetchBooks();
    }, []);

    return (
        <>
            <Toast ref={toast} />
            <Header />
            <div className="container mx-auto p-4">
                <h1 className="text-3xl font-bold mb-4">Books</h1>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {books.map(book => (
                        <BookCard book={book} />
                    ))}
                </div>
            </div>
        </>
    );
};

export default Landing;
