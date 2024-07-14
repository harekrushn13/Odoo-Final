/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
import { classNames } from "primereact/utils";

function SideBarLink({
  name,
  iconClass,
  to,
  end = true,
  toggleSidebarClick = () => {},
}) {
  const handleLogout = () => {
    localStorage.clear();
  };

  return (
    <>
      {name === "Logout" ? (
        <NavLink
          to={to}
          end={end}
          onClick={handleLogout}
          draggable={false}
          className={(props) =>
            classNames(
              "select-none w-full h-16 flex flex-row items-center ps-5 font-semibold text-xl cursor-pointer transition-all",
              {
                "bg-red-600 text-white": props.isActive,
                "text-black hover:bg-red-100 hover:text-red-600":
                  !props.isActive,
              }
            )
          }
        >
          <i
            className={`pi ${iconClass} me-2`}
            style={{ fontSize: "1.5rem" }}
          ></i>
          <div>{name}</div>
        </NavLink>
      ) : (
        <NavLink
          to={to}
          end={end}
          onClick={toggleSidebarClick}
          draggable={false}
          className={(props) =>
            classNames(
              "select-none w-full h-16 flex flex-row items-center ps-5 font-semibold text-xl cursor-pointer transition-all",
              {
                "bg-[#27616e] text-white": props.isActive, 
                "text-black hover:bg-[#abcad1] hover:text-blue-500": !props.isActive,
              }
            )
          }
        >
          <i
            className={`pi ${iconClass} me-2`}
            style={{ fontSize: "1.5rem" }}
          ></i>
          <div>{name}</div>
        </NavLink>
      )}
    </>
  );
}

export default SideBarLink;
