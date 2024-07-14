import { Toast } from "primereact/toast";
import { useRef } from "react";
import Header from "../components/Header";

const Landing = () => {
  const toast = useRef(null);

  return (
    <>
      <Toast ref={toast} />
      <Header />
    </>
  );
};

export default Landing;
