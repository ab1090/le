import {useCurrentFrame, useVideoConfig} from 'remotion';
import {BouncingCircle} from './BouncingCircle';
import './BouncingCircle.css';

export const Video = () => {
  const frame = useCurrentFrame();
  const {durationInFrames, fps} = useVideoConfig();

  const progress = Math.min(frame / durationInFrames, 1);
  const seconds = Math.round((frame / fps) * 10) / 10;

  return (
    <div className="video-shell">
      <div className="video-shell__header">
        <h1>Competency Lesson</h1>
        <p>Rendering runtime lesson content directly in the browser.</p>
      </div>
      <div className="video-shell__body">
        <BouncingCircle delay={0} />
        <BouncingCircle delay={150} color="#22d3ee" />
        <BouncingCircle delay={300} color="#818cf8" />
      </div>
      <p className="video-shell__footer">Frame: {frame} / {durationInFrames} · {seconds}s</p>
      <div className="video-shell__progress" aria-hidden>
        <div className="video-shell__progress-bar" style={{transform: `scaleX(${progress})`}} />
      </div>
    </div>
  );
};
