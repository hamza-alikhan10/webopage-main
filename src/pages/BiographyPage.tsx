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
        mainImage="https://images.unsplash.com/photo-1561214115-f2f134cc4912"
        secondaryImage="https://images.unsplash.com/photo-1519681399372-8d33999683ad"
        biography={`Artworks that are visually powerful, intellectually elegant, and timeless

Founded by Abhinav Goyal, the studio’s approach to design and fabrication is rooted in the integration of technology that transcends traditional design limitations by exploring infinite possibilities within a given parameter.

The studio’s narrative is governed by a context and its storyline, ensuring that every installation is not just unique but a singular, extraordinary experience.

The use of advanced design tools in harmony with human craftsmanship ensures that each piece is unique, embodying the studio’s vision of crafting spaces and experiences that inspire and captivate.`}
        artistStory={`Formforge is an avant-garde design studio where art intersects with function to reimagine and redefine spaces.
At the core of Formforge's philosophy lies the ambition to disrupt conventional art forms by integrating contemporary, asymmetric art with modern design principles`}
        thirdImage="https://images.unsplash.com/photo-1542314831-068cd1db4b2f"
        thirdStory={`Our studio is a collective of artists, designers, and engineers, each bringing a unique perspective and skill set to the table. We believe in the power of collaboration and the magic that happens when diverse minds come together to create something extraordinary.

We are committed to pushing the boundaries of what's possible, constantly experimenting with new materials, techniques, and technologies. Our goal is to create art that not only looks beautiful but also tells a story and evokes emotion.`}
        fourthImage="https://images.unsplash.com/photo-1519681399372-8d33999683ad"
        fourthStory={`We are passionate about creating art that is not only visually stunning but also meaningful and impactful. We believe that art has the power to transform spaces and lives, and we are dedicated to using our creativity to make a positive difference in the world.

Our work is inspired by the beauty of nature, the complexity of human emotions, and the endless possibilities of technology. We strive to create art that is both timeless and relevant, that speaks to the human experience and inspires wonder and awe.`}
      />
    </div>
  );
};

export default BiographyPage;
