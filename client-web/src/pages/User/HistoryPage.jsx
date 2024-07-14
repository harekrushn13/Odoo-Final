import React from 'react';
import Datatable from '../../components/Datatable';

const HistoryPage = () => {
  const currentIssueBooks = [
    { id: 1, title: 'Current Book 1', librarian: 'Author 1', issueDate: '2024-07-01', dueDate: '2024-08-01' },
    { id: 2, title: 'Current Book 2', librarian: 'Author 2', issueDate: '2024-07-02', dueDate: '2024-08-02' },
    { id: 3, title: 'Current Book 3', librarian: 'Author 3', issueDate: '2024-07-03', dueDate: '2024-08-03' },
  ];

  const pastIssueBooks = [
    { id: 1, title: 'Past Book 1', librarian: 'Author 1', issueDate: '2024-06-01', returnDate: '2024-06-15' },
    { id: 2, title: 'Past Book 2', librarian: 'Author 2', issueDate: '2024-06-05', returnDate: '2024-06-20' },
    { id: 3, title: 'Past Book 3', librarian: 'Author 3', issueDate: '2024-06-10', returnDate: '2024-06-25' },
  ];

  const columnsCurrent = [
    { field: 'id', header: 'ID' },
    { field: 'title', header: 'Title' },
    { field: 'librarian', header: 'Librarian' },
    { field: 'issueDate', header: 'Issue Date' },
    { field: 'dueDate', header: 'Due Date' },
  ];

  const columnsPast = [
    { field: 'id', header: 'ID' },
    { field: 'title', header: 'Title' },
    { field: 'librarian', header: 'Librarian' },
    { field: 'issueDate', header: 'Issue Date' },
    { field: 'returnDate', header: 'Return Date' },
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">History</h1>

      <h2 className="text-2xl font-semibold mb-2">Current Issue Book Details</h2>
      <Datatable
        data={currentIssueBooks}
        array={columnsCurrent}
      />

      <h2 className="text-2xl font-semibold mb-2 mt-5">Past Book Details</h2>
      <Datatable
        data={pastIssueBooks}
        array={columnsPast}
      />
    </div>
  );
};

export default HistoryPage;
