import { Navigate, useNavigate } from "react-router-dom";

function BookCard({ book }) {
  const navigate = useNavigate();
  return (
    <div
      key={book.id}
      className="flex rounded-lg border border-gray-300 bg-white shadow-lg overflow-hidden transition-transform transform hover:scale-105 p-4"
    >
      <img
        src={
          book.volumeInfo.imageLinks?.thumbnail ||
          "https://via.placeholder.com/150"
        }
        alt={book.volumeInfo.title}
        className="w-1/3 h-48 object-contain"
      />
      <div className="p-4 flex flex-col justify-between w-2/3">
        <h5 className="text-lg font-semibold text-blue-gray-900">
          {book.volumeInfo.title}
        </h5>
        <p className="text-sm text-gray-600">
          {book.volumeInfo.averageRating
            ? `Rating: ${book.volumeInfo.averageRating}`
            : "Rating: N/A"}
        </p>
        <p className="text-base font-light text-gray-700 truncate">
          {book.volumeInfo.description
            ? book.volumeInfo.description.slice(0, 100) + "..."
            : "No description available."}
        </p>
        <button
          className="mt-4 rounded-lg bg-gray-900 py-2 px-4 text-white text-sm font-bold uppercase shadow-md hover:shadow-lg focus:opacity-85"
          type="button"
          onClick={() => navigate(`/book/${book.id}`)}
        >
          View Details
        </button>
      </div>
    </div>
  );
}

export default BookCard;
