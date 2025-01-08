import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';

interface BiographyProps {
  mainImage: string;
  secondaryImage: string;
  biography: string;
  artistStory: string;
}

const Biography: React.FC<BiographyProps> = ({
  mainImage,
  secondaryImage,
  biography,
  artistStory,
}) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Navbar/>
      {/* Main Biography Section */}
<h1 className="mb-8 fade-in text-left" style={{
  fontFamily: 'Montserrat',
  fontWeight: 200,
  fontStyle: 'normal',
  lineHeight: '1.5em',
  fontSize: '2em',
  textTransform: 'none',
  textDecoration: 'none',
  letterSpacing: '.06em'

}}>
  BIOGRAPHY
</h1>

      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="fade-in">
          {biography.split('\n\n').map((paragraph, index) => (
            <p key={index} style={{
              fontFamily: 'Poppins, arial, sans-serif',
              fontWeight: 300,
              fontStyle: 'normal',
              lineHeight: '1.8em',
              fontSize: '16px',
              textTransform: 'none',
              textDecoration: 'none',
              margin: '0 0 1em',
              color: 'rgb(87, 87, 87)', /* Best Match body */
            }} className="text-left">
              {paragraph}
            </p>
          ))}
        </div>
        
        <div className="fade-in h-[500px]">
          <img
            src={mainImage}
            alt="Artist with installation"
            className="w-full h-full rounded-lg shadow-lg"
            style={{
              display: 'block',
              objectFit: 'cover',
              width: '100%',
              height: '100%',
              objectPosition: '50% 50%'
            }}
            loading="lazy"
          />
        </div>
      </div>

      {/* Secondary Image and Story Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="fade-in h-[400px] order-2 md:order-1">
          <img
            src={secondaryImage}
            alt="Art installation"
            className="w-full h-full rounded-lg shadow-lg"
            style={{
              display: 'block',
              objectFit: 'cover',
              width: '100%',
              height: '100%',
              objectPosition: '50% 50%'
            }}
            loading="lazy"
          />
        </div>

        <div className="fade-in order-1 md:order-2">
          <h2 className="mb-8 text-left" style={{
            fontFamily: 'Poppins , sans-serif',
            fontWeight: 300,
            lineHeight: '1.5em',
            fontSize: '2em',
            textTransform: 'none',
            textDecoration: 'none',
            letterSpacing: '0.06em'
          }}>
            ARTIST'S STORY
          </h2>
          
          {artistStory.split('\n\n').map((paragraph, index) => (
            <p key={index} style={{
              fontFamily: 'Poppins, arial, sans-serif',
              fontWeight: 300,
              fontStyle: 'normal',
              lineHeight: '1.8em',
              fontSize: '16px',
              textTransform: 'none',
              textDecoration: 'none',
              margin: '0 0 1em'
            }} className="text-left">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
      {/* Footer Section */}
      < footer/>
    </div>
  );
};

export default Biography;