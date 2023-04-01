import React, { useRef, useState } from "react";
import VideoFooter from "./components/footer/VideoFooter";
import "./Video.css";

function Video() {
  const videoRef = useRef(null);
  const [play, setPlay] = useState(false);

  function handdleStart() {
    if (!play) {
      videoRef.current.play();
      setPlay(true);
    } else {
      videoRef.current.pause();
      setPlay(false);
    }
  }

  return (
    <div className="video">
      <video
        className="video__player"
        ref={videoRef}
        onClick={handdleStart}
        loop
        src="https://cdn.discordapp.com/attachments/1090396071261372491/1091167951245295667/brecker2.mp4"
      ></video>
      {/* Side bar */}
      <VideoFooter />
    </div>
  );
}

export default Video;
