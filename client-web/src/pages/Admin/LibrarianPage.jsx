import React from "react";
import Datatable from "../../components/Datatable";

const librarian = [
  {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    question: "<p>What is React?</p>",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane.smith@example.com",
    question: "<p>Explain Redux</p>",
  },
];

const columns = [
  { field: "id", header: "ID" },
  { field: "name", header: "Name" },
  { field: "email", header: "Email" },
  { field: "question", header: "Question" },
];

const LibrarianPage = () => {
  return (
    <div className="container mx-auto px-16 py-8">
      <h2 className="text-2xl font-semibold mb-4">View Librarian</h2>
      <Datatable data={librarian} array={columns} />
    </div>
  );
};

export default LibrarianPage;
