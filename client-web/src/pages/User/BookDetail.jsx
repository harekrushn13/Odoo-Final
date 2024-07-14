import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";

const book = {
  kind: "books#volume",
  id: "yDB0tAEACAAJ",
  volumeInfo: {
    title: "Odoo 10 Implementation Cookbook",
    authors: ["Mantavy Gajjar"],
    publishedDate: "2017-10-06",
    description:
      "Comprehensive tasks covering Odoo 10 in the right way...Lorem ipsum dolor sit amet consectetur adipisicing elit..Comprehensive tasks covering Odoo 10 in the right way...Lorem ipsum dolor sit amet consectetur adipisicing elit..Comprehensive tasks covering Odoo 10 inehensive tasks covering Odoo 10 in the right way...Lorem ipsum dolor sit amet consectetur adipisicing elit..Comprehensive tasks covering Odoo 10 in the right way...Lorem ipsum dolor sit amet consectetur adipisicing elit..Comprehensive tasks covering Odoo 10 in the right way...Lorem ipsum dolor sit amet consectetur adipisicing elit...",
    industryIdentifiers: [
      { type: "ISBN_10", identifier: "1787123421" },
      { type: "ISBN_13", identifier: "9781787123427" },
    ],
    imageLinks: {
      thumbnail:
        "http://books.google.com/books/content?id=yDB0tAEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    infoLink:
      "http://books.google.co.in/books?id=yDB0tAEACAAJ&dq=isbn:9781787123428&hl=&source=gbs_api",
  },
};

function BookDetail() {
  const navigate = useNavigate();
  const volumeInfo = book.volumeInfo || {};

  return (
    <>
      <Header />
      <div className="container mx-auto p-4 flex flex-col">
        <button
          onClick={() => navigate(-1)}
          className="rounded-lg bg-gray-900 py-2 px-4 text-white w-28  transition transform hover:scale-105"
        >
          Back
        </button>
        <div className="flex sm:flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-4 mt-10">
          <img
            src={
              volumeInfo.imageLinks?.thumbnail ||
              "https://via.placeholder.com/150"
            }
            alt={volumeInfo.title || "Book Cover"}
            className="w-60 ml-auto h-auto rounded-lg mb-4 ml-12 mt-2 transition-transform transform hover:scale-105" // Image hover effect
          />
          <div className="bg-white p-4 rounded-lg shadow-md w-full max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-1 transition duration-200 hover:text-blue-600 cursor-pointer">
              {volumeInfo.title || "Title Unavailable"}
            </h2>
            <h3 className="text-lg text-gray-600 mb-4">
              {volumeInfo.authors?.join(", ") || "Unknown Author"}
            </h3>
            <div className="space-y-2">
              <div>
                <span className="font-semibold">ISBN-10:</span>
                {volumeInfo.industryIdentifiers?.[0]?.identifier || "N/A"}
              </div>
              <div>
                <span className="font-semibold">ISBN-13:</span>
                {volumeInfo.industryIdentifiers?.[1]?.identifier || "N/A"}
              </div>
              <div>
                <span className="font-semibold">Published Date:</span>
                {volumeInfo.publishedDate || "N/A"}
              </div>
            </div>
            <div className="mt-6">
              <div className="mt-6">
                <span className="text-2xl font-bold mb-1">Description:</span>
                <p className="mt-1">
                  {volumeInfo.description || "No description available."}
                </p>
              </div>
            </div>
            <div className="mt-4 flex space-x-2">
              <button className="rounded-lg bg-green-500 py-2 px-4 text-white transition-transform transform hover:scale-105">
                Add to Favorites
              </button>
              <button className="rounded-lg bg-yellow-500 py-2 px-4 text-white transition-transform transform hover:scale-105">
                Share
              </button>
              <button className="rounded-lg bg-blue-500 py-2 px-4 text-white transition-transform transform hover:scale-105">
                View More Information
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BookDetail;
