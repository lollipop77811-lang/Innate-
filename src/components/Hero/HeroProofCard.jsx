import React, { useEffect, useRef, useState } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize } from 'lucide-react';

// Hero VSL video (previously shown in the site-load popup).
// Local MP4 is used when present in /public/videos; otherwise it falls back to YouTube.
const LOCAL_VIDEO_SOURCES = ['/videos/VSL%2001_2.mp4', '/videos/vsl-intro.mp4'];
const YOUTUBE_ID = 'lfiGHm5Hgm8';
const YOUTUBE_EMBED = `https://www.youtube.com/embed/${YOUTUBE_ID}?autoplay=1&mute=1&playsinline=1&loop=1&playlist=${YOUTUBE_ID}&rel=0&modestbranding=1`;

// Tell the ambient background audio to pause while the hero video has sound
const notifyAmbientAudio = (videoHasSound) => {
  window.dispatchEvent(new CustomEvent('vsl-state-change', { detail: { isOpen: videoHasSound } }));
};

export const HeroProofCard = () => {
  const videoRef = useRef(null);
  const [useYouTube, setUseYouTube] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);

  // Default autoplay (muted — required by browsers for autoplay)
  useEffect(() => {
    const video = videoRef.current;
    if (!video || useYouTube) return;
    video.muted = true;
    const p = video.play();
    if (p !== undefined) {
      p.then(() => setIsPlaying(true)).catch(() => setIsPlaying(false));
    }
  }, [useYouTube]);

  // Restore ambient audio if the component unmounts while the video has sound
  useEffect(() => () => notifyAmbientAudio(false), []);

  // Local file missing / unplayable → fall back to YouTube
  const handleSourceError = (e) => {
    const sources = videoRef.current?.querySelectorAll('source') || [];
    const last = sources[sources.length - 1];
    if (!sources.length || e.target === last || e.target === videoRef.current) {
      setUseYouTube(true);
    }
  };

  const togglePlay = (e) => {
    e?.stopPropagation();
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play().then(() => setIsPlaying(true)).catch(() => {});
      if (!video.muted) notifyAmbientAudio(true);
    } else {
      video.pause();
      setIsPlaying(false);
      notifyAmbientAudio(false);
    }
  };

  const toggleMute = (e) => {
    e?.stopPropagation();
    const video = videoRef.current;
    if (!video) return;
    const nextMuted = !video.muted;
    video.muted = nextMuted;
    setIsMuted(nextMuted);
    if (!nextMuted && video.paused) {
      video.play().then(() => setIsPlaying(true)).catch(() => {});
    }
    notifyAmbientAudio(!nextMuted);
  };

  const handleFullscreen = (e) => {
    e?.stopPropagation();
    const video = videoRef.current;
    if (!video) return;
    if (video.requestFullscreen) video.requestFullscreen();
    else if (video.webkitRequestFullscreen) video.webkitRequestFullscreen();
  };

  const handleTimeUpdate = () => {
    const video = videoRef.current;
    if (!video || !video.duration) return;
    setProgress((video.currentTime / video.duration) * 100);
  };

  const handleSeek = (e) => {
    e.stopPropagation();
    const video = videoRef.current;
    if (!video || !video.duration) return;
    const rect = e.currentTarget.getBoundingClientRect();
    video.currentTime = ((e.clientX - rect.left) / rect.width) * video.duration;
  };

  return (
    <div className="relative w-full max-w-[460px] lg:max-w-[520px]">
      {/* Soothing Organic Back Glow */}
      <div className="absolute -inset-3 rounded-[2.2rem] bg-gradient-to-tr from-[#C78460]/15 via-[#D4A373]/20 to-[#F2ECE5] blur-xl pointer-events-none" />

      {/* Main Card Frame */}
      <article className="card-soothing-white relative rounded-3xl sm:rounded-[1.9rem] bg-white border border-[#D9CEC7] overflow-hidden shadow-premium">

        {/* Hero Video (autoplays by default) */}
        <div className="relative w-full aspect-video overflow-hidden bg-black group/video">
          {!useYouTube ? (
            <>
              <video
                ref={videoRef}
                className="block w-full h-full object-cover cursor-pointer"
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                onClick={toggleMute}
                onTimeUpdate={handleTimeUpdate}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                onError={handleSourceError}
              >
                {LOCAL_VIDEO_SOURCES.map((src) => (
                  <source key={src} src={src} type="video/mp4" onError={handleSourceError} />
                ))}
              </video>

              {/* Tap-for-sound pill while muted */}
              {isMuted && (
                <button
                  type="button"
                  onClick={toggleMute}
                  className="absolute top-2.5 left-2.5 sm:top-3.5 sm:left-3.5 z-20 inline-flex items-center gap-1.5 px-3 py-1 sm:py-1.5 rounded-full bg-[#866452] hover:bg-[#6B584E] text-white text-[10px] sm:text-[11px] font-medium uppercase tracking-wider shadow-lg cursor-pointer transition-colors"
                >
                  <VolumeX className="w-3.5 h-3.5" />
                  <span>Tap for sound</span>
                </button>
              )}

              {/* Control Bar */}
              <div className="absolute inset-x-0 bottom-0 z-20 px-3 pb-2.5 pt-8 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col gap-2 opacity-100 sm:opacity-0 sm:group-hover/video:opacity-100 transition-opacity duration-300">
                <div
                  className="w-full h-1.5 bg-white/25 rounded-full cursor-pointer overflow-hidden"
                  onClick={handleSeek}
                >
                  <div className="h-full bg-[#D4A373]" style={{ width: `${progress}%` }} />
                </div>
                <div className="flex items-center justify-between text-white">
                  <div className="flex items-center gap-3">
                    <button type="button" onClick={togglePlay} aria-label={isPlaying ? 'Pause video' : 'Play video'} className="p-1 hover:text-[#D4A373] transition-colors cursor-pointer">
                      {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-white" />}
                    </button>
                    <button type="button" onClick={toggleMute} aria-label={isMuted ? 'Unmute video' : 'Mute video'} className="p-1 hover:text-[#D4A373] transition-colors cursor-pointer">
                      {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                    </button>
                  </div>
                  <button type="button" onClick={handleFullscreen} aria-label="Fullscreen" className="p-1 hover:text-[#D4A373] transition-colors cursor-pointer">
                    <Maximize className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </>
          ) : (
            <iframe
              src={YOUTUBE_EMBED}
              title="Your Money Blocks Are Running Your Income | The Innate Bliss"
              className="absolute inset-0 w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          )}
        </div>

      </article>
    </div>
  );
};
