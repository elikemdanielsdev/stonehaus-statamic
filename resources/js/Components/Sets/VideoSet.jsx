import React from "react";
import ReactPlayer from "react-player";

export default function VideoSet({ src, autoplay = false, controls = true, loop = false, muted = false }) {
  return (
    <div className="relative w-full" style={{ aspectRatio: "16/9" }}>
      <ReactPlayer
        url={src}
        playing={autoplay}
        controls={controls}
        loop={loop}
        muted={muted}
        width="100%"
        height="100%"
      />
    </div>
  );
}
