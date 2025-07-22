
import React from 'react';
import { Track } from '../types';
import TrackListItem from './TrackListItem';

interface TrackListProps {
  tracks: Track[];
  onSelectTrack: (track: Track) => void;
  alignment: 'left' | 'right';
}

const TrackList: React.FC<TrackListProps> = ({ tracks, onSelectTrack, alignment }) => {
  return (
    <div className="space-y-2">
      {tracks.map((track) => (
        <TrackListItem 
          key={track.id} 
          track={track} 
          onSelectTrack={onSelectTrack} 
          alignment={alignment}
        />
      ))}
    </div>
  );
};

export default TrackList;
