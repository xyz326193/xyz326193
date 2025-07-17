import React, { useEffect, useRef } from 'react';
import { useScrollRestoration } from '../hooks/useScrollRestoration';

interface PageWrapperProps {
  children: React.ReactNode;
  className?: string;
  preserveScroll?: boolean;
  scrollToTopOnMount?: boolean;
}

export const PageWrapper: React.FC<PageWrapperProps> = ({
  children,
  className = '',
  preserveScroll = true,
  scrollToTopOnMount = false
}) => {
  const { shouldRestoreScroll } = useScrollRestoration();
  const mountedRef = useRef(false);

  useEffect(() => {
    if (!mountedRef.current) {
      mountedRef.current = true;
      
      // Handle initial scroll behavior
      if (scrollToTopOnMount && !shouldRestoreScroll) {
        setTimeout(() => {
          window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'auto'
          });
        }, 0);
      }
    }
  }, [scrollToTopOnMount, shouldRestoreScroll]);

  return (
    <div className={className}>
      {children}
    </div>
  );
};