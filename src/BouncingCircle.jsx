import {useMemo} from 'react';
import './BouncingCircle.css';

export const BouncingCircle = ({delay = 0, color = '#38bdf8'}) => {
  const style = useMemo(
    () => ({
      animationDelay: `${delay}ms`,
      background: color,
    }),
    [delay, color],
  );

  return <span className="bouncing-circle" style={style} />;
};
