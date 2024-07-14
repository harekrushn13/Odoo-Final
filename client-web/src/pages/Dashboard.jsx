/* eslint-disable react-hooks/exhaustive-deps */
import { useNavigate } from "react-router-dom";
import { fetchGet } from "../apis/fetch";
import { useEffect, useState } from "react";
import Loading from "../components/Loading";

import { PrimeIcons } from "primereact/api";
import CountCard from "../components/Dashboard/CountCard";

function Dashboard() {
  const role = localStorage.getItem("role").toLowerCase();
  const [count, setCount] = useState(null);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();
  // const getData = async () => {
  //   const result = await fetchGet(
  //     role + "/dashboard",
  //     localStorage.getItem("token")
  //   );
  //   if (result.success) {
  //     let data = {
  //       ADMIN: [
  //         {
  //           label: "Total Lbrarian",
  //           count: result.data.instituteCount,
  //           iconClass: (
  //             <i className={PrimeIcons.BUILDING} style={{ fontSize: "25px" }} />
  //           ),
  //         },
  //       ],      
  //     };
  //     setCount(data);
  //   } else {
  //     navigate("/");
  //   }
  //   setLoading(false);
  // };

  const getData = async () => {
    let data = {
      ADMIN: [
        {
          label: "Total Librarian",
          count: 10,
          iconClass: (
            <i className={PrimeIcons.BUILDING} style={{ fontSize: "25px" }} />
          ),
        },
        {
          label: "Total Librarian",
          count: 10,
          iconClass: (
            <i className={PrimeIcons.BUILDING} style={{ fontSize: "25px" }} />
          ),
        },
      ],      
      USER: [
        {
          label: "Total Librarian",
          count: 10,
          iconClass: (
            <i className={PrimeIcons.BUILDING} style={{ fontSize: "25px" }} />
          ),
        },
        {
          label: "Total Librarian",
          count: 10,
          iconClass: (
            <i className={PrimeIcons.BUILDING} style={{ fontSize: "25px" }} />
          ),
        },
      ],      
    };
    setCount(data);
    setLoading(false);
  }
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {loading && <Loading />}
      <div className="text-4xl px-10 font-bold py-1">Dashboard</div>

      <div className="flex overflow-hidden flex-wrap justify-evenly">
        {count &&
          count[localStorage.getItem("role")].map((ele, ind) => {
            return (
              <CountCard
                key={ind}
                label={ele.label}
                iconClass={ele.iconClass}
                count={ele.count}
              />
            );
          })}
      </div>
      {count && <div>{count.instituteCount}</div>}
    </>
  );
}

export default Dashboard;
