import React from "react";
import Datatable from "../../components/Datatable";
import { Column } from "primereact/column";
import { FaPaypal } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const headerStyle = {
  backgroundColor: "#27616e",
  color: "white",
  textAlign: "center",
};

const cellStyle = {
  border: "1px solid #dddddd",
  textAlign: "left",
  padding: "8px",
  width: "fit-content",
};

const paymentBooks = [
  {
    id: 1,
    title: "Book 1",
    librarian: "Author 1",
    issueDate: "2024-07-01",
    dueDate: "2024-08-01",
  },
  {
    id: 2,
    title: "Book 2",
    librarian: "Author 2",
    issueDate: "2024-07-02",
    dueDate: "2024-08-02",
  },
  {
    id: 3,
    title: "Book 3",
    librarian: "Author 3",
    issueDate: "2024-07-03",
    dueDate: "2024-08-03",
  },
];

const columnsCurrent = [
  { field: "id", header: "ID" },
  { field: "title", header: "Title" },
  { field: "librarian", header: "Librarian" },
  { field: "issueDate", header: "Issue Date" },
];

const PaymentHistoryPage = () => {
  const navigate = useNavigate();
  const actionComponent = (
    <Column
      header="Action"
      key={"Action"}
      headerStyle={headerStyle}
      bodyStyle={cellStyle}
      body={(data) => {
        return (
          <div className="flex justify-evenly">
            <button
              className="px-5 py-2 bg-[#27616e] text-white font-bold rounded-md"
              onClick={() =>
                navigate("abc")
              }
            >
              Pay
            </button>
          </div>
        );
      }}
    />
  );

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Payment History</h1>

      <Datatable
        data={paymentBooks}
        array={columnsCurrent}
        extraComponent={actionComponent}
      />
    </div>
  );
};

export default PaymentHistoryPage;
