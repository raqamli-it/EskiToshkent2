import { useRef, useState } from "react";
import video from "../assets/videos.mp4";
import { PiPlayBold } from "react-icons/pi";
import { PiPauseBold } from "react-icons/pi";

function Video() {
  const videoRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPaused) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
      setIsPaused(!isPaused);
    }
  };

  return (
    <div className="w-full h-[75vh] relative overflow-hidden flex justify-center items-center lg:h-[55vh] md:h-[38vh] sm:h-[26vh]">
      <video
        src={video}
        ref={videoRef}
        type="video/mp4"
        className="w-full md:h-[400px] md:w-full"
        muted
        // controls
        autoPlay
        loop
      ></video>

      <button
        onClick={handlePlayPause}
        className="absolute right-[4%] bottom-[15%] w-[60px] rounded-full h-[60px] bg-[#000000d1] hover:bg-[#004d80] xl:w-[50px] xl:h-[50px] md:w-[40px] md:h-[40px] sm:w-[30px] sm:h-[30px] xl:bottom-[20%]"
      >
        {isPaused ? (
          <PiPauseBold className="text-[30px] text-white absolute left-[25%] top-[50%] transform -translate-y-1/2 xl:text-[24px] md:text-[18px] sm:text-[14px] md:left-[28%]" />
        ) : (
          <PiPlayBold className="text-[30px] text-white absolute left-[25%] top-[50%] transform -translate-y-1/2 xl:text-[24px] md:text-[18px] sm:text-[14px] md:left-[28%]" />
        )}
      </button>
    </div>
  );
}

export default Video;
