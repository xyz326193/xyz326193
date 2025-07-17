import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface ScrollToTopProps {
  smooth?: boolean;
  excludePaths?: string[];
}

export const ScrollToTop: React.FC<ScrollToTopProps> = ({ 
  smooth = false, 
  excludePaths = [] 
}) => {
  const location = useLocation();

  useEffect(() => {
    // Check if current path should be excluded from auto-scroll
    const shouldExclude = excludePaths.some(path => 
      location.pathname.startsWith(path)
    );

    if (!shouldExclude) {
      // Small delay to ensure page content is rendered
      const timeoutId = setTimeout(() => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: smooth ? 'smooth' : 'auto'
        });
      }, 0);

      return () => clearTimeout(timeoutId);
    }
  }, [location.pathname, smooth, excludePaths]);

  return null;
};