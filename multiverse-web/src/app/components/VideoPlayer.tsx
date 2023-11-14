"use client";
import React, { useRef, useState, useEffect } from "react";
import ReactPlayer from "react-player";
import {
  PlayerPause,
  PlayerPlay,
  Volume3,
  Volume,
  Minimize,
  Maximize,
} from "tabler-icons-react";
import { useIntersectionObserver } from "usehooks-ts";
import screenfull from "screenfull";

// const isSafari = () => {
//   const ua = navigator.userAgent.toLowerCase();
//   return ua.indexOf("safari") > -1 && ua.indexOf("chrome") < 0;
// };

export function VideoAutoPlayer({
  src,
  showControls = false,
  style={},
  videoWidth,
  videoHeight,
}: {
  src: string;
  showControls: boolean;
  style?: any
  videoHeight?: number;
  videoWidth?: number;
}) {
  const [playing, setPlaying] = useState(false);
  const [mute, setMute] = useState(true);
  const [show, setShow] = useState(false);
  const [fullScreen, setFullScreen] = useState(false);

  // const initialRef: any = null;
  // const videoParentRef = useRef(initialRef);
  const ref = useRef<HTMLDivElement | null>(null);
  const playerRef = useRef<HTMLDivElement | null>(null);
  const entry = useIntersectionObserver(ref, {});
  //const [shouldUseImage, setShouldUseImage] = useState(false);
  const isVisible = !!entry?.isIntersecting;
  useEffect(() => {
    setPlaying(isVisible);

    // check if user agent is safari and we have the ref to the container <div />
    // if (
    //   isSafari() &&
    //   videoParentRef.current &&
    //   videoParentRef.current.children
    // ) {
    //   // obtain reference to the video element
    //   const player = videoParentRef.current.children[0];

    //   // if the reference to video player has been obtained
    //   if (player) {
    //     // set the video attributes using javascript as per the
    //     // webkit Policy
    //     player.controls = false;
    //     player.playsinline = true;
    //     player.muted = true;
    //     player.setAttribute("muted", ""); // leave no stones unturned :)
    //     player.autoplay = true;

    //     // Let's wait for an event loop tick and be async.
    //     setTimeout(() => {
    //       // player.play() might return a promise but it's not guaranteed crossbrowser.
    //       const promise = player.play();
    //       // let's play safe to ensure that if we do have a promise
    //       if (promise.then) {
    //         promise
    //           .then(() => {})
    //           .catch(() => {
    //             // if promise fails, hide the video and fallback to <img> tag
    //             videoParentRef.current.style.display = "none";
    //             setShouldUseImage(true);
    //           });
    //       }
    //     }, 0);
    //   }
    // }
  }, [isVisible]);

  const toogleFullScreen = () => {
    screenfull.toggle(ref.current!);
  };
  return (
    //  shouldUseImage ? (
    //   <img src={src} alt="Muted Video" />
    // ) :
    <div ref={ref} className="relative select-none">
      <ReactPlayer
        loop={true}
        style={{
          ...style,
          overflow: "hidden",
          position: "relative",
          marginTop: "0.5rem",
          zIndex: 10,
          borderRadius: "0.5rem",
          aspectRatio: videoWidth&&videoHeight ? videoWidth/videoHeight : "16/9",
        }}
        playsinline={true}
        width={"auto"}
        height={"auto"}
        muted={mute}
        playing={playing}
        full
        url={src}
        controls={showControls}
      />
      {!showControls && (
        <div
          className="absolute px-5 pt-6  bottom-4 h-[100%] w-full flex justify-between items-end z-20 select-none cursor-pointer"
          onMouseLeave={() => setShow(false)}
          onMouseEnter={() => setShow(true)}
        >
          {show && (
            <>
              <div className="flex">
                <div onClick={() => setPlaying(!playing)} className="mr-4">
                  {playing ? (
                    <PlayerPause
                      size={32}
                      overlineThickness={0}
                      fill="white"
                      color="white"
                    />
                  ) : (
                    <PlayerPlay
                      size={32}
                      overlineThickness={0}
                      fill="white"
                      color="white"
                    />
                  )}
                </div>

                <div onClick={() => setMute(!mute)}>
                  {mute ? (
                    <Volume3
                      size={32}
                      overlineThickness={2}
                      fill="white"
                      color="white"
                    />
                  ) : (
                    <Volume
                      size={32}
                      overlineThickness={2}
                      fill="white"
                      color="white"
                    />
                  )}
                </div>
              </div>
              <div onClick={toogleFullScreen}>
                <div onClick={() => setFullScreen(!fullScreen)}>
                  {fullScreen ? (
                    <Minimize
                      size={32}
                      overlineThickness={2}
                      fill="white"
                      color="white"
                    />
                  ) : (
                    <Maximize
                      size={32}
                      overlineThickness={2}
                      fill="white"
                      color="white"
                    />
                  )}
                </div>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}
