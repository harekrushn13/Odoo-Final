import { useEffect, useMemo, useRef, useState } from "react";
import Header from "../components/Header";
import SideBarLink from "../components/SidebarLink";
import { Outlet } from "react-router-dom";
import { PrimeIcons } from "primereact/api";
import { Toast } from "primereact/toast";

function Home() {
  const toast = useRef(null);
  const [sideBar, setSideBar] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  const sideBarLinks = useMemo(() => {
    return {
      ADMIN: [
        {
          to: "/admin",
          iconClass: PrimeIcons.BUILDING,
          name: "Dashboard",
        },
        {
          to: "/admin/librarian",
          iconClass: PrimeIcons.USERS,
          name: "Librarian",
        },
        {
          to: "/",
          iconClass: PrimeIcons.SIGN_OUT,
          name: "Logout",
        },
      ],
      USER: [
        {
          to: "/user",
          iconClass: PrimeIcons.BUILDING,
          name: "Dashboard",
        },
        {
          to: "/user/profile",
          iconClass: PrimeIcons.USER,
          name: "My Profile",
        },
        {
          to: "/",
          iconClass: PrimeIcons.SIGN_OUT,
          name: "Logout",
        },
      ],
    };
  }, []);

  const toggleSidebar = (prev) => {
    setSideBar(!prev);
  };

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <Toast ref={toast} />
      <Header toggleSidebar={toggleSidebar} width={width} />

      <div className="w-full h-full overflow-x-hidden">
        <div className="flex flex-row h-[90vh] w-full overflow-x-hidden">
          <div
            className={`absolute md:static top-15 left-0 md:top-auto h-[90vh] overflow-y-auto transition-all z-20 shadow-xl ${
              sideBar ? "left-0" : "-left-72"
            }`}
            style={{ minWidth: 224 }}
          >
            {localStorage.getItem("role") &&
              sideBarLinks[localStorage.getItem("role")].map((ele) => (
                <SideBarLink
                  to={ele.to}
                  name={ele.name}
                  iconClass={ele.iconClass}
                  key={ele.name}
                  end={ele.end}
                  toggleSidebarClick={
                    width < 768
                      ? () => {
                          toggleSidebar(false);
                        }
                      : undefined
                  }
                />
              ))}
          </div>
          <div
            className={
              "overflow-y-auto w-full h-full p-2 pl-56 md:p-7 pb-20 md:pb-5"
            }
          >
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
