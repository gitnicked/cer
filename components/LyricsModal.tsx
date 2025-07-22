
import React, { useEffect } from 'react';
import { Track } from '../types';

interface LyricsModalProps {
  track: Track;
  onClose: () => void;
}

const LyricsModal: React.FC<LyricsModalProps> = ({ track, onClose }) => {
  
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div 
        className="relative bg-neutral-900/80 border border-pink-500/30 rounded-xl shadow-2xl shadow-pink-500/20 w-full max-w-2xl max-h-[85vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center p-6 border-b border-neutral-700/50">
          <h2 className="text-2xl font-bold text-white">{track.title}</h2>
          <button onClick={onClose} className="text-neutral-400 hover:text-white transition-colors">&times;</button>
        </div>
        <div className="p-6 overflow-y-auto scrollbar-thin">
          <p className="text-neutral-300 whitespace-pre-wrap leading-relaxed text-base">
            {track.lyrics}
          </p>
        </div>
      </div>
    </div>
  );
};

export default LyricsModal;
