import {Composition} from 'remotion';
import App from './App.jsx';
import {Video} from './Video.jsx';

export const RemotionRoot = () => {
  return (
    <>
      <Composition
        id="lesson"
        component={App}
        durationInFrames={450}
        fps={30}
        width={1080}
        height={1080}
      />
      <Composition
        id="animated"
        component={Video}
        durationInFrames={240}
        fps={30}
        width={1920}
        height={1080}
      />
    </>
  );
};
