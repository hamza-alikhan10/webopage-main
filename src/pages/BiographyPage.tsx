import Biography from "@/components/Biography";
import { useNavigate } from "react-router-dom";

const BiographyPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      {/* button */}
      {/* <button 
        onClick={() => navigate('/')}
        className="fixed top-4 left-4 px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition-colors"
      >
        Back
      </button> */}
      <Biography
        mainImage="/"
        secondaryImage="https://images.unsplash.com/photo-1561214115-f2f134cc4912"
        biography={`Artworks that are visually powerful, intellectually elegant, and timeless

Founded by Abhinav Goyal, the studio’s approach to design and fabrication is rooted in the integration of technology that transcends traditional design limitations by exploring infinite possibilities within a given parameter.

The studio’s narrative is governed by a context and its storyline, ensuring that every installation is not just unique but a singular, extraordinary experience.

The use of advanced design tools in harmony with human craftsmanship ensures that each piece is unique, embodying the studio’s vision of crafting spaces and experiences that inspire and captivate.`}
        artistStory={`Formforge is an avant-garde design studio where art intersects with function to reimagine and redefine spaces.
At the core of Formforge's philosophy lies the ambition to disrupt conventional art forms by integrating contemporary, asymmetric art with modern design principles`}
      />
    </div>
  );
};

export default BiographyPage;