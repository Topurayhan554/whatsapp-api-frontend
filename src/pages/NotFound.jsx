import { useNavigate } from "react-router-dom";
import Button from "../components/common/Button";
import { MdHome } from "react-icons/md";
import { BsExclamationTriangleFill } from "react-icons/bs";

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center gap-4">
      <div className="bg-white rounded-3xl shadow-lg p-10 flex flex-col items-center gap-4 max-w-sm w-full mx-4">
        <BsExclamationTriangleFill className="text-yellow-400 text-6xl" />
        <h1 className="text-5xl font-bold text-gray-800">404</h1>
        <p className="text-gray-400 text-center">
          Oops! The page you are looking for does not exist.
        </p>
        <Button onClick={() => navigate("/")} fullWidth icon={<MdHome />}>
          Go Home
        </Button>
      </div>
    </div>
  );
};

export default NotFoundPage;
