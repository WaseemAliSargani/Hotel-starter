import { useEffect } from 'react';
import { useLocation } from 'react-router-dom'

const ScrollToTop = () => {
  // location/ pathname state
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
};

export default ScrollToTop;
