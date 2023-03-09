'use client'
import React, { useRef, useState, useEffect } from 'react'
import { PlayerPause, PlayerPlay, Volume3 } from 'tabler-icons-react'
import { Volume } from 'tabler-icons-react'
import { useIntersectionObserver } from 'usehooks-ts'

const isSafari = () => {
  const ua = navigator.userAgent.toLowerCase()
  return ua.indexOf('safari') > -1 && ua.indexOf('chrome') < 0
}

export function VideoAutoPlayer({ src }: { src: string }) {
  const [playing, setPlaying] = useState(false)
  const [mute, setMute] = useState(false)
  const [show, setShow] = useState(false)
  const initialRef: any = null
  const videoParentRef = useRef(initialRef)
  const entry = useIntersectionObserver(videoParentRef, {})
  const [shouldUseImage, setShouldUseImage] = useState(false)
  const isVisible = !!entry?.isIntersecting
  useEffect(() => {
    setPlaying(isVisible)
    // check if user agent is safari and we have the ref to the container <div />
    if (
      isSafari() &&
      videoParentRef.current &&
      videoParentRef.current.children
    ) {
      // obtain reference to the video element
      const player = videoParentRef.current.children[0]

      // if the reference to video player has been obtained
      if (player) {
        // set the video attributes using javascript as per the
        // webkit Policy
        player.controls = false
        player.playsinline = true
        player.muted = true
        player.setAttribute('muted', '') // leave no stones unturned :)
        player.autoplay = true

        // Let's wait for an event loop tick and be async.
        setTimeout(() => {
          // player.play() might return a promise but it's not guaranteed crossbrowser.
          const promise = player.play()
          // let's play safe to ensure that if we do have a promise
          if (promise.then) {
            promise
              .then(() => {})
              .catch(() => {
                // if promise fails, hide the video and fallback to <img> tag
                videoParentRef.current.style.display = 'none'
                setShouldUseImage(true)
              })
          }
        }, 0)
      }
    }
  }, [isVisible])

  return shouldUseImage ? (
    <img src={src} alt="Muted Video" />
  ) : (
    <div className=" relative z-10" ref={videoParentRef}>
      <div
        ref={videoParentRef}
        dangerouslySetInnerHTML={{
          __html: `
        <video
          loop
          muted="${mute}"
          playing="${playing}"
          preload="metadata"
          style=" width: 100vw; height: auto; object-fit: cover; top: 0; left: 0; z-index: -1; border-radius: 0.5rem; margin-top: 0.5rem;
          margin-bottom: 0.5rem; "
          >
          <source src="${src}" type="video/mp4" />
          </video>`,
        }}
      />
      <div
        className="absolute top-0 pt-6 px-6 h-1/3 w-full flex justify-between z-20"
        onMouseLeave={() => setShow(false)}
        onMouseEnter={() => setShow(true)}
      >
        {show && (
          <>
            <div onClick={() => setPlaying(!playing)}>
              {playing ? (
                <PlayerPause size={48} color="white" />
              ) : (
                <PlayerPlay size={48} color="white" />
              )}
            </div>

            <div onClick={() => setMute(!mute)}>
              {mute ? (
                <Volume3 size={48} color="white" />
              ) : (
                <Volume size={48} color="white" />
              )}
            </div>
          </>
        )}
      </div>
    </div>
  )
}
