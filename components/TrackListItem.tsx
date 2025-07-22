
import React from 'react';
import { Track } from '../types';

interface TrackListItemProps {
  track: Track;
  onSelectTrack: (track: Track) => void;
  alignment: 'left' | 'right';
}

const TrackListItem: React.FC<TrackListItemProps> = ({ track, onSelectTrack, alignment }) => {
  const isRightAligned = alignment === 'right';

  return (
    <div
      onClick={() => onSelectTrack(track)}
      className={`group flex items-center p-2 rounded-lg hover:bg-neutral-800/60 transition-all duration-300 cursor-pointer ${isRightAligned ? 'justify-end' : 'justify-start'}`}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && onSelectTrack(track)}
      aria-label={`View lyrics for ${track.title}`}
    >
      <div className={`flex items-center gap-4 ${isRightAligned ? 'flex-row-reverse' : 'flex-row'}`}>
        <p className="text-white font-medium group-hover:text-pink-400 transition-colors uppercase tracking-wider text-sm">
          {track.title}
        </p>
        <p className="w-6 text-center text-neutral-500 group-hover:text-pink-400 transition-colors font-mono text-xs">
          {track.id.toString().padStart(2, '0')}
        </p>
      </div>
    </div>
  );
};

export default TrackListItem;
