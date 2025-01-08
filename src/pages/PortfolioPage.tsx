import Portfolio from "@/components/Portfolio";
import { useNavigate } from "react-router-dom";


const PortfolioPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      {/* <button 
        onClick={() => navigate('/')}
        className="fixed top-4 left-4 px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition-colors"
      >
        Back
      </button> */}
      <Portfolio />
    </div>
  );
};

export default PortfolioPage;