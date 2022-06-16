import { useRef, memo } from "react";

//STYLES
interface VideoOnHoverType {
  videoPath: string;
  isMiddle: boolean;
  type: {
    title: string;
    content: string[];
  };
}

const VideoOnHover = ({ videoPath, isMiddle, type }: VideoOnHoverType) => {
  const videoRef = useRef<null | HTMLVideoElement>(null);

  const textOnMouseEnter = (e: any) => {
    if (videoRef && videoRef.current) {
      videoRef.current.play();
    }
  };

  const textOnMouseLeave = (e: any) => {
    if (videoRef && videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.pause();
    }
  };

  return (
    <div className={`mt-2 ${isMiddle ? "mx-8" : ""} one relative z-0`}>
      <video
        ref={videoRef}
        src={videoPath}
        loop
        muted
        className=" relative w-[100%] transition-[width] ease-in-out delay-150 object-cover  h-96  flex-wrap  rounded-lg shadow-xl"
      />
      <div className="absolute inset-0 flex justify-start items-end z-10 px-4 pb-2 " onMouseEnter={textOnMouseEnter} onMouseLeave={textOnMouseLeave}>
        <div>
          <div className=" text-4xl text-white font-semibold mb-4 underline underline-offset-8">{type.title}</div>
          <ul className="text-sm whitespace">
            {type.content.map((val: string) => (
              <li className="text-white my-1" key={val}>
                {val}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default memo(VideoOnHover);
