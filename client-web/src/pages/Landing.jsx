import "primeicons/primeicons.css";
import "primereact/resources/primereact.min.css";
import "primereact/resources/themes/saga-blue/theme.css";
import { Toast } from "primereact/toast";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import BookCard from "../components/BookCard";

const Landing = () => {
  const toast = useRef(null);
  const [dropdownValue, setDropdownValue] = useState("all");
  const navigate = useNavigate();
  const [searchInput, setSearchInput] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  const newArrivalBooks = [
    {
      id: 1,
      volumeInfo: {
        title: "New Arrival Book 1",
        description: "Description 1",
        imageLinks: { thumbnail: "https://via.placeholder.com/150" },
      },
    },
    {
      id: 2,
      volumeInfo: {
        title: "New Arrival Book 2",
        description: "Description 2",
        imageLinks: { thumbnail: "https://via.placeholder.com/150" },
      },
    },
    {
      id: 3,
      volumeInfo: {
        title: "New Arrival Book 3",
        description: "Description 3",
        imageLinks: { thumbnail: "https://via.placeholder.com/150" },
      },
    },
    {
      id: 4,
      volumeInfo: {
        title: "New Arrival Book 4",
        description: "Description 4",
        imageLinks: { thumbnail: "https://via.placeholder.com/150" },
      },
    },
    {
      id: 5,
      volumeInfo: {
        title: "New Arrival Book 5",
        description: "Description 5",
        imageLinks: { thumbnail: "https://via.placeholder.com/150" },
      },
    },
  ];

  const trendingBooks = [
    {
      id: 1,
      volumeInfo: {
        title: "Trending Book 1",
        description: "Description 1",
        imageLinks: { thumbnail: "https://via.placeholder.com/150" },
      },
    },
    {
      id: 2,
      volumeInfo: {
        title: "Trending Book 2",
        description: "Description 2",
        imageLinks: { thumbnail: "https://via.placeholder.com/150" },
      },
    },
    {
      id: 3,
      volumeInfo: {
        title: "Trending Book 3",
        description: "Description 3",
        imageLinks: { thumbnail: "https://via.placeholder.com/150" },
      },
    },
    {
      id: 4,
      volumeInfo: {
        title: "Trending Book 4",
        description: "Description 4",
        imageLinks: { thumbnail: "https://via.placeholder.com/150" },
      },
    },
    {
      id: 5,
      volumeInfo: {
        title: "Trending Book 5",
        description: "Description 5",
        imageLinks: { thumbnail: "https://via.placeholder.com/150" },
      },
    },
  ];

  const handleSearch = async (e) => {
    e.preventDefault();

    const url = `https://www.googleapis.com/books/v1/volumes?q=${searchInput}`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      const books = data.items || [];
      setSearchResults(books);
      setIsSearching(true);
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };

  const clearSearch = () => {
    setSearchInput("");
    setSearchResults([]);
    setIsSearching(false);
  };

  return (
    <>
      <Toast ref={toast} />
      <Header />
      <div className="container mx-auto p-4">
        <div className="container mx-auto p-4">
          <div className="flex flex-row md:flex-col">
            <form
              onSubmit={handleSearch}
              className="flex flex-col md:flex-row w-full"
            >
              <h1 className="text-xl font-bold mb-4">Book Search</h1>
              <input
                type="text"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                placeholder="Search for a book"
                className="py-2 px-4 border border-black rounded-md focus:outline-none focus:border-blue-300 mb-4 md:mb-0 md:mr-4 w-full md:w-auto"
              />
              <h1 className="text-xl font-bold mb-4">Select Genre</h1>
              <select
                className="border rounded p-2 mb-4 md:mb-0 md:mr-4 w-full md:w-auto"
                value={dropdownValue}
                onChange={(e) => setDropdownValue(e.target.value)}
              >
                <option value="all">All</option>
                <option value="category1">Category 1</option>
                <option value="category2">Category 2</option>
              </select>
              <button
                type="submit"
                className="py-2 px-4 bg-blue-500 text-white rounded-md w-full md:w-auto"
              >
                Search
              </button>
            </form>
          </div>
          {isSearching && (
            <button
              onClick={clearSearch}
              className="mb-6 py-2 px-4 bg-red-500 text-white rounded-md"
            >
              Clear Search
            </button>
          )}

          {!isSearching && (
            <>
              <h2 className="text-2xl font-semibold mt-4 mb-2">
                New Arrival Books
              </h2>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-6">
                {newArrivalBooks.map((book) => (
                  <BookCard key={book.id} book={book} />
                ))}
              </div>

              <h2 className="text-2xl font-semibold mb-2">Trending Books</h2>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {trendingBooks.map((book) => (
                  <BookCard key={book.id} book={book} />
                ))}
              </div>
            </>
          )}

          {isSearching && (
            <div>
              <h2 className="text-2xl font-semibold mb-2">Search Results</h2>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {searchResults.map((book) => (
                  <BookCard key={book.id} book={book} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Landing;
