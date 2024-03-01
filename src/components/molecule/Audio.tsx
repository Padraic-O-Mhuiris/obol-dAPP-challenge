"use client";

import { useCallback, useEffect } from "react";
import { useAudioPlayer } from "react-use-audio-player";

const Audio = ({
  oggUrl,
  className = "",
}: {
  oggUrl: string;
  className?: string;
}) => {
  const song = useAudioPlayer();

  useEffect(() => {
    song.load(oggUrl, { autoplay: false });

    return () => {
      song.cleanup();
    };
  }, []);

  const togglePlayPause = useCallback(() => {
    song.togglePlayPause();
  }, [song.togglePlayPause]);

  return (
    <div onClick={togglePlayPause} className={`${className} cursor-pointer`}>
      {song.playing ? "⏸️" : "▶️"}
    </div>
  );
};

export default Audio;
