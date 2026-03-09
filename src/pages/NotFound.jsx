import { useNavigate } from "react-router-dom";
import Button from "../components/common/Button";

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center gap-4">
      <span className="text-8xl">🔍</span>
      <h1 className="text-4xl font-bold text-gray-800">404</h1>
      <p className="text-gray-400">Page not found!</p>
      <Button onClick={() => navigate("/")}>Go Home</Button>
    </div>
  );
};

export default NotFoundPage;
