import React, { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

const BackgroundMusic = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const toggleMusic = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(error => {
        console.log("Audio play failed:", error);
      });
    }
    setIsPlaying(!isPlaying);
  };

  // Attempt autoplay on mount (usually blocked, but worth a try with muted logic if needed, 
  // but here we want sound so we wait for user interaction or manual toggle)
  // To comply with best UX, we start muted or paused.
  
  return (
    <div className="fixed bottom-6 left-6 z-50">
      <audio
        ref={audioRef}
        src="/assets/audio/background-music.mp3"
        loop
      />
      
      <button
        onClick={toggleMusic}
        className={`p-3 rounded-full shadow-lg transition-all duration-300 ${
          isPlaying 
            ? 'bg-primary text-white hover:bg-pink-700 animate-pulse-slow' 
            : 'bg-white text-gray-500 hover:text-primary hover:bg-pink-50'
        }`}
        aria-label={isPlaying ? "Pausar música" : "Tocar música"}
        title={isPlaying ? "Pausar música" : "Tocar música de fundo"}
      >
        {isPlaying ? <Volume2 size={24} /> : <VolumeX size={24} />}
      </button>
    </div>
  );
};

export default BackgroundMusic;
