import { useParams } from "react-router-dom";

const BookDetail = () => {
  const params = useParams();
  console.log(params);
  return <div>BookDetail</div>;
};

export default BookDetail;
