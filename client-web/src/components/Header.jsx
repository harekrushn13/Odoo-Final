import { Menu } from "primereact/menu";
import { useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "primeicons/primeicons.css";
import { PrimeIcons } from "primereact/api";
import { Button } from "primereact/button";

function Header({ toggleSidebar, width }) {
  const username = localStorage.getItem("username");
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");
  const navigate = useNavigate();
  const menuLeft = useRef(null);
  const location = useLocation();
  const { pathname } = location;
  const items = [
    {
      label: localStorage.getItem("role"),
      items: [
        {
          label: "Dashboard",
          icon: "pi pi-home",
          command: () => {
            navigate("/" + role.toLowerCase());
          },
        },
        {
          label: "Logout",
          icon: "pi pi-power-off",
          command: () => {
            localStorage.clear();
            navigate("/");
          },
        },
      ],
    },
  ];

  return (
    <div className="w-full h-[10vh] border-b shadow-lg flex items-center justify-between md:justify-start relative bg-white">
      {width < 768 ? (
        <button
          className="text-3xl text-black font-bold md:mx-5 cursor-pointer"
          onClick={() => toggleSidebar(true)}
        >
          <i className={PrimeIcons.BARS}></i>
        </button>
      ) : (
        <div className="text-3xl text-black font-bold md:mx-5 cursor-pointer">
          Oddo Hackathon
        </div>
      )}
      {token && role && (
        <div className="absolute right-5 flex items-center">
          {role == "USER" && pathname != "/" && (
            <Button
              onClick={() => {
                navigate("/");
              }}
            >
              Home
            </Button>
          )}
          <a
            className="flex items-center cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              menuLeft.current.toggle(e);
            }}
          >
            <i className="pi pi-user me-2 md:text-xl"></i>
            <span className="md:block hidden text-gray-800">{username}</span>
          </a>
          <Menu
            model={items}
            popup
            ref={menuLeft}
            id="popup_menu_right"
            popupClassName="bg-white shadow-lg"
          />
        </div>
      )}

      {!token && !role && (
        <Button
          onClick={() => {
            navigate("/login");
          }}
        >
          Login
        </Button>
      )}
    </div>
  );
}

export default Header;
