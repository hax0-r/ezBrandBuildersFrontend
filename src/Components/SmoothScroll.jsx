import React, { useEffect } from 'react';
import Scrollbar from 'smooth-scrollbar';
import OverscrollPlugin from 'smooth-scrollbar/plugins/overscroll';

const SmoothScroll = ({ target }) => {
  useEffect(() => {
    Scrollbar.use(OverscrollPlugin);
    const scrollbar = Scrollbar.init(target, {
      damping: 0.07,
      plugins: {
        overscroll: {
          enable: true,
          effect: 'bounce',
          damping: 0.15,
          maxOverscroll: 150,
          glowColor: '#fff',
        },
      },
    });

    return () => {
      if (scrollbar) scrollbar.destroy();
    };
  }, [target]); // Include target as a dependency

  return null;
};

export default SmoothScroll;
