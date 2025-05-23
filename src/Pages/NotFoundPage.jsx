import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const NotFoundPage = () => {
  const navigate = useNavigate();

  // Optional: Add starry background effect
  useEffect(() => {
    const createStars = () => {
      const count = 100;
      const container = document.querySelector('.stars-container');
      
      for (let i = 0; i < count; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.animationDelay = `${Math.random() * 5}s`;
        container?.appendChild(star);
      }
    };

    createStars();
  }, []);

  return (
    <div className="min-h-screen  text-white overflow-hidden relative stars-container">
      {/* Stars background */}
      <style>
        {`
          .star {
            position: absolute;
            width: 2px;
            height: 2px;
            background: white;
            border-radius: 50%;
            animation: twinkle 5s infinite;
          }
          @keyframes twinkle {
            0%, 100% { opacity: 0.2; }
            50% { opacity: 1; }
          }
        `}
      </style>

      <div className="container mx-auto px-4 py-20 flex flex-col items-center justify-center min-h-screen relative z-10">
        {/* Spaceship graphic */}
        <div className="relative mb-10">
          <div className="text-9xl font-bold text-yellow-400">404</div>
          <div className="absolute -top-8 -right-12 w-16 h-16 bg-gray-700 rounded-full animate-pulse"></div>
          <div className="absolute -bottom-4 -left-12 w-24 h-8 bg-gray-700 rounded-full"></div>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
          <span className="text-yellow-400">Page Not </span> Found!
        </h1>

        <p className="text-xl md:text-2xl text-center mb-10 max-w-2xl">
          There is no Page for the Particular Route.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <button 
            onClick={() => navigate('/')}
            className="px-8 py-3 bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold rounded-full transition-all transform hover:scale-105"
          >
            Go To Home
          </button>
        
        </div>

       
     
      </div>
    </div>
  );
};

export default NotFoundPage;