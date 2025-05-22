
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white p-4">
            <div className="flex flex-col items-center justify-center py-">
        <div className="w-12 h-12 mb-8">
          <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/19/4f/0c/79/logomarca.jpg?w=900&h=500&s=1" alt="fail logo" className="w-full h-full object-contain" />
        </div>
      </div>
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-6">Página não encontrada</p>
        <Link to="/home" className="text-menu-red flex items-center justify-center gap-2 hover:underline">
          <ArrowLeft size={20} />
          <span>Voltar ao Menu</span>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
