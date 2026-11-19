import React, { useEffect, useRef, useState } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize } from 'lucide-react';
import { BRAND_INFO } from '../../data/siteData';

// Local MP4 is used when present in /public/videos; otherwise the YouTube upload is embedded.
const LOCAL_VIDEO_SOURCES = ['/videos/VSL%2001_2.mp4', '/videos/vsl-intro.mp4'];
const VIDEO_POSTER = '/images/hero-payal-thumb.jpg';
const YOUTUBE_ID = 'lfiGHm5Hgm8';
const YOUTUBE_EMBED = `https://www.youtube.com/embed/${YOUTUBE_ID}?autoplay=1&mute=1&playsinline=1&loop=1&playlist=${YOUTUBE_ID}&rel=0&modestbranding=1`;

const formatTime = (secs) => {
  if (!secs || !isFinite(secs)) return '00:00';
  const m = Math.floor(secs / 60);
  const s = Math.floor(secs % 60);
  return `${m < 10 ? '0' : ''}${m}:${s < 10 ? '0' : ''}${s}`;
};

export const HeroProofCard = () => {
  const videoRef = useRef(null);
  const [useYouTube, setUseYouTube] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(90);

  // Browsers only allow autoplay when muted
  useEffect(() => {
    const video = videoRef.current;
    if (!video || useYouTube) return;
    video.muted = true;
    const p = video.play();
    if (p !== undefined) {
      p.then(() => setIsPlaying(true)).catch(() => setIsPlaying(false));
    }
  }, [useYouTube]);

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
    } else {
      video.pause();
      setIsPlaying(false);
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
    <div className="relative w-full max-w-[560px] lg:max-w-none pt-5 pb-6 sm:pt-6 sm:pb-7 px-1 sm:px-3">
      <div className="absolute inset-x-6 top-0 bottom-2 rounded-[2.2rem] bg-gradient-to-br from-[#E8DCD4] via-[#F2ECE5] to-[#E3D3C5] rotate-[2.5deg] pointer-events-none" />
      <div className="absolute -inset-4 rounded-[2.6rem] bg-gradient-to-tr from-[#C78460]/20 via-[#D4A373]/15 to-transparent blur-2xl pointer-events-none" />
      <svg className="absolute -bottom-3 -left-3 w-20 h-20 text-[#D4A373]/50 pointer-events-none hidden sm:block" viewBox="0 0 80 80" fill="currentColor" aria-hidden="true">
        {Array.from({ length: 25 }).map((_, i) => (
          <circle key={i} cx={8 + (i % 5) * 16} cy={8 + Math.floor(i / 5) * 16} r="1.8" />
        ))}
      </svg>
      <article className="relative rounded-[1.8rem] sm:rounded-[2rem] bg-white/90 backdrop-blur-sm border border-[#D9CEC7] p-2 sm:p-2.5 shadow-[0_30px_60px_-20px_rgba(45,32,26,0.35)]">
        <div className="relative w-full aspect-video overflow-hidden rounded-[1.35rem] sm:rounded-[1.5rem] bg-[#2D201A] group/video ring-1 ring-black/5">
          {!useYouTube ? (
            <>
              <video
                ref={videoRef}
                className="block w-full h-full object-cover cursor-pointer"
                poster={VIDEO_POSTER}
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                onClick={toggleMute}
                onTimeUpdate={handleTimeUpdate}
                onLoadedMetadata={(e) => setDuration(e.currentTarget.duration)}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                onError={handleSourceError}
              >
                {LOCAL_VIDEO_SOURCES.map((src) => (
                  <source key={src} src={src} type="video/mp4" onError={handleSourceError} />
                ))}
              </video>

              {isMuted && (
                <button
                  type="button"
                  onClick={toggleMute}
                  className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 hover:bg-white text-[#2D201A] text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider shadow-lg cursor-pointer transition-all hover:scale-105"
                >
                  <Volume2 className="w-3.5 h-3.5 text-[#866452] animate-pulse" />
                  <span>Tap for sound</span>
                </button>
              )}

              <div className="absolute inset-x-0 bottom-0 z-20 px-3 sm:px-4 pb-2.5 pt-10 bg-gradient-to-t from-black/75 via-black/25 to-transparent flex flex-col gap-2 opacity-100 sm:opacity-0 sm:group-hover/video:opacity-100 transition-opacity duration-300">
                <div className="w-full h-1 hover:h-1.5 bg-white/25 rounded-full cursor-pointer overflow-hidden transition-all" onClick={handleSeek}>
                  <div className="h-full bg-gradient-to-r from-[#D4A373] to-[#C78460]" style={{ width: `${progress}%` }} />
                </div>
                <div className="flex items-center justify-between text-white">
                  <div className="flex items-center gap-2.5">
                    <button type="button" onClick={togglePlay} aria-label={isPlaying ? 'Pause video' : 'Play video'} className="p-1 hover:text-[#D4A373] transition-colors cursor-pointer">
                      {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-white" />}
                    </button>
                    <button type="button" onClick={toggleMute} aria-label={isMuted ? 'Unmute video' : 'Mute video'} className="p-1 hover:text-[#D4A373] transition-colors cursor-pointer">
                      {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                    </button>
                    <span className="font-mono text-[10.5px] text-white/80">
                      {formatTime((progress / 100) * duration)} / {formatTime(duration)}
                    </span>
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
        <div className="flex items-center justify-between gap-3 px-3 sm:px-4 pt-3 pb-2 sm:pt-3.5 sm:pb-2.5 text-left">
          <div className="min-w-0 flex items-center gap-3">
            <img
              src={BRAND_INFO.coachPayal}
              alt="Payal Gulati"
              className="w-11 h-11 sm:w-12 sm:h-12 rounded-full object-cover object-top ring-2 ring-[#F2ECE5] shrink-0"
              onError={(e) => { e.currentTarget.src = BRAND_INFO.founderPhoto; }}
            />
            <div className="min-w-0 leading-tight">
              <h3 className="font-serif text-[18px] sm:text-[21px] text-[#2D201A] font-semibold leading-snug">
                Payal Gulati
              </h3>
              <p className="mt-0.5 text-[10px] sm:text-[11px] tracking-[0.14em] uppercase text-[#866452] font-semibold">
                Founder · The Innate Bliss
              </p>
            </div>
          </div>
          {!useYouTube && (
            <button
              type="button"
              onClick={toggleMute}
              aria-label={isMuted ? 'Unmute video' : 'Mute video'}
              className="shrink-0 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-[#9A7562] to-[#6B584E] text-white flex items-center justify-center shadow-[0_10px_20px_-6px_rgba(107,88,78,0.6)] hover:scale-105 transition-transform cursor-pointer"
            >
              {isMuted ? <VolumeX className="w-[18px] h-[18px]" /> : <Volume2 className="w-[18px] h-[18px]" />}
            </button>
          )}
        </div>
      </article>
    </div>
  );
};
