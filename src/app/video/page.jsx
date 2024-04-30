"use client";
import React, { useState, useEffect, useRef } from "react";

function Video() {
  const [isVolumeClicked, setVolumeClicked] = useState(false);
  const [isPlayClicked, setPlayClicked] = useState(false);
  const [isScreenClicked, setScreenClicked] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [videoDuration, setVideoDuration] = useState(0);
  const [isFullScreen, setFullScreen] = useState(false);
  const videoRef = useRef(null);

  const progressBarWidth = (currentTime / videoDuration) * 100 || 0;

  useEffect(() => {
    const video = videoRef.current;

    const updateTime = () => {
      setCurrentTime(video.currentTime);
      setVideoDuration(video.duration);
    };

    if (video) {
      video.addEventListener("timeupdate", updateTime);
      return () => video.removeEventListener("timeupdate", updateTime);
    }
  }, []);

  const toggleMute = () => {
    const video = videoRef.current;
    if (video) {
      video.muted = !video.muted;
      setVolumeClicked(!isVolumeClicked);
    }
  };

  const togglePlay = () => {
    const video = videoRef.current;
    if (video.paused || video.ended) {
      video.play();
    } else {
      video.pause();
    }
    setPlayClicked(!isPlayClicked);
  };

  const skipForward = () => {
    const video = videoRef.current;
    if (video) {
      video.currentTime += 15;
    }
  };

  const skipBackward = () => {
    const video = videoRef.current;
    if (video) {
      video.currentTime -= 15;
    }
  };

  const screenSize = () => {
    setIsLarge(!isLarge);
  };

  return (
    <>
      <div className="relative w-screen h-screen bg-black">
        <video ref={videoRef} className="absolute inset-0 w-full h-full" onEnded={() => setPlayClicked(false)}>
          <source src="/video.mp4" type="video/mp4" alt="video" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute left-[5%] top-[75%] text-4xl font-bold  text-white">
          <h1 className="text-white">Fireplace video</h1>
          <p className="text-white">S1:E1 • 1 min</p>
          <p className="text-white">{new Date(currentTime * 1000).toISOString().substr(11, 8)}</p>
          <div className="flex items-center mt-5">
            {isPlayClicked ? (
              <svg onClick={togglePlay} xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor" className="bi bi-pause-circle-fill" viewBox="0 0 16 16">
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.25 5C5.56 5 5 5.56 5 6.25v3.5a1.25 1.25 0 1 0 2.5 0v-3.5C7.5 5.56 6.94 5 6.25 5zm3.5 0c-.69 0-1.25.56-1.25 1.25v3.5a1.25 1.25 0 1 0 2.5 0v-3.5C11 5.56 10.44 5 9.75 5z" />
              </svg>
            ) : (
              <svg onClick={togglePlay} xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor" className="bi bi-play-circle-fill cursor-pointer" viewBox="0 0 16 16">
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z" />
              </svg>
            )}

            <div className="flex pl-8">
              <div className="flex flex-col p-6 items-center justify-center">
                <svg onClick={skipBackward} className="cursor-pointer mb-2" xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-skip-start-fill" viewBox="0 0 16 16">
                  <path d="M4 4a.5.5 0 0 1 1 0v3.248l6.267-3.636c.54-.313 1.232.066 1.232.696v7.384c0 .63-.692 1.01-1.232.697L5 8.753V12a.5.5 0 0 1-1 0V4z" />
                </svg>
                <p className="text-white text-xs select-none">15 sek tilbage</p>
              </div>

              <div className="flex flex-col p-6  items-center justify-center ">
                <svg onClick={skipForward} className="cursor-pointer mb-2" xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-skip-end-fill" viewBox="0 0 16 16">
                  <path d="M12.5 4a.5.5 0 0 0-1 0v3.248L5.233 3.612C4.693 3.3 4 3.678 4 4.308v7.384c0 .63.692 1.01 1.233.697L11.5 8.753V12a.5.5 0 0 0 1 0V4z" />
                </svg>
                <p className="text-white text-xs select-none">15 sek frem</p>
              </div>
              <div className="flex flex-col p-6 items-center justify-center">
                {isVolumeClicked ? (
                  <svg className="cursor-pointer mb-2" onClick={toggleMute} xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-volume-mute-fill" viewBox="0 0 16 16">
                    <path d="M6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06zm7.137 2.096a.5.5 0 0 1 0 .708L12.207 8l1.647 1.646a.5.5 0 0 1-.708.708L11.5 8.707l-1.646 1.647a.5.5 0 0 1-.708-.708L10.793 8 9.146 6.354a.5.5 0 1 1 .708-.708L11.5 7.293l1.646-1.647a.5.5 0 0 1 .708 0z" />
                  </svg>
                ) : (
                  <svg className="cursor-pointer " onClick={toggleMute} xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-volume-up-fill" viewBox="0 0 16 16">
                    <path d="M11.536 14.01A8.473 8.473 0 0 0 14.026 8a8.473 8.473 0 0 0-2.49-6.01l-.708.707A7.476 7.476 0 0 1 13.025 8c0 2.071-.84 3.946-2.197 5.303l.708.707z" />
                    <path d="M10.121 12.596A6.48 6.48 0 0 0 12.025 8a6.48 6.48 0 0 0-1.904-4.596l-.707.707A5.483 5.483 0 0 1 11.025 8a5.483 5.483 0 0 1-1.61 3.89l.706.706z" />
                    <path d="M8.707 11.182A4.486 4.486 0 0 0 10.025 8a4.486 4.486 0 0 0-1.318-3.182L8 5.525A3.489 3.489 0 0 1 9.025 8 3.49 3.49 0 0 1 8 10.475l.707.707zM6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06z" />
                  </svg>
                )}
                <p className="text-white text-xs mt-2 select-none">lydstyrke</p>
              </div>
            </div>
            <div className="flex flex-col p-6 items-center justify-center ">
              {isScreenClicked ? (
                <svg onClick={screenSize} className="cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-fullscreen-exit" viewBox="0 0 16 16">
                  <path d="M5.5 0a.5.5 0 0 1 .5.5v4A1.5 1.5 0 0 1 4.5 6h-4a.5.5 0 0 1 0-1h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 1 .5-.5zm5 0a.5.5 0 0 1 .5.5v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 1 0 1h-4A1.5 1.5 0 0 1 10 4.5v-4a.5.5 0 0 1 .5-.5zM0 10.5a.5.5 0 0 1 .5-.5h4A1.5 1.5 0 0 1 6 11.5v4a.5.5 0 0 1-1 0v-4a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 1-.5-.5zm10 1a1.5 1.5 0 0 1 1.5-1.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 0-.5.5v4a.5.5 0 0 1-1 0v-4z" />
                </svg>
              ) : (
                <svg onClick={screenSize} className="cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-fullscreen" viewBox="0 0 16 16">
                  <path d="M1.5 1a.5.5 0 0 0-.5.5v4a.5.5 0 0 1-1 0v-4A1.5 1.5 0 0 1 1.5 0h4a.5.5 0 0 1 0 1h-4zM10 .5a.5.5 0 0 1 .5-.5h4A1.5 1.5 0 0 1 16 1.5v4a.5.5 0 0 1-1 0v-4a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 1-.5-.5zM.5 10a.5.5 0 0 1 .5.5v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 1 0 1h-4A1.5 1.5 0 0 1 0 14.5v-4a.5.5 0 0 1 .5-.5zm15 0a.5.5 0 0 1 .5.5v4a1.5 1.5 0 0 1-1.5 1.5h-4a.5.5 0 0 1 0-1h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 1 .5-.5z" />
                </svg>
              )}
            </div>
          </div>
        </div>
        {/* Tilføj før/efter progress bar  */}
        <div className="relative top-[85%] left-[5%]">
          <div className="h-2 w-[90%] bg-red-500  mt-3 absolute z-20" style={{ width: `${progressBarWidth}%` }}></div>
          <div className="h-2 w-[90%] bg-slate-600  mt-3 absolute z-10"></div>
        </div>
      </div>
    </>
  );
}

export default Video;
