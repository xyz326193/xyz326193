import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

interface ScrollPosition {
  x: number;
  y: number;
  timestamp: number;
}

interface ScrollHistory {
  [key: string]: ScrollPosition;
}

class ScrollManager {
  private static instance: ScrollManager;
  private scrollHistory: ScrollHistory = {};
  private isNavigatingBack = false;
  private readonly SCROLL_DEBOUNCE_MS = 100;
  private readonly MAX_HISTORY_AGE = 30 * 60 * 1000; // 30 minutes
  private scrollTimeout: NodeJS.Timeout | null = null;

  static getInstance(): ScrollManager {
    if (!ScrollManager.instance) {
      ScrollManager.instance = new ScrollManager();
    }
    return ScrollManager.instance;
  }

  private constructor() {
    // Listen for browser back/forward navigation
    window.addEventListener('popstate', () => {
      this.isNavigatingBack = true;
      // Reset flag after a short delay to allow for scroll restoration
      setTimeout(() => {
        this.isNavigatingBack = false;
      }, 100);
    });

    // Clean up old scroll positions periodically
    setInterval(() => {
      this.cleanupOldPositions();
    }, 5 * 60 * 1000); // Clean every 5 minutes
  }

  private cleanupOldPositions(): void {
    const now = Date.now();
    Object.keys(this.scrollHistory).forEach(key => {
      if (now - this.scrollHistory[key].timestamp > this.MAX_HISTORY_AGE) {
        delete this.scrollHistory[key];
      }
    });
  }

  private generateLocationKey(pathname: string, search: string): string {
    return `${pathname}${search}`;
  }

  saveScrollPosition(pathname: string, search: string): void {
    const key = this.generateLocationKey(pathname, search);
    const position: ScrollPosition = {
      x: window.scrollX,
      y: window.scrollY,
      timestamp: Date.now()
    };
    
    this.scrollHistory[key] = position;
    
    // Also save to sessionStorage as backup
    try {
      sessionStorage.setItem(`scroll_${key}`, JSON.stringify(position));
    } catch (e) {
      // Handle storage quota exceeded
      console.warn('Failed to save scroll position to sessionStorage:', e);
    }
  }

  getScrollPosition(pathname: string, search: string): ScrollPosition | null {
    const key = this.generateLocationKey(pathname, search);
    
    // First try memory cache
    let position = this.scrollHistory[key];
    
    // Fallback to sessionStorage
    if (!position) {
      try {
        const stored = sessionStorage.getItem(`scroll_${key}`);
        if (stored) {
          position = JSON.parse(stored);
          // Restore to memory cache
          this.scrollHistory[key] = position;
        }
      } catch (e) {
        console.warn('Failed to retrieve scroll position from sessionStorage:', e);
      }
    }

    // Check if position is still valid (not too old)
    if (position && Date.now() - position.timestamp < this.MAX_HISTORY_AGE) {
      return position;
    }

    return null;
  }

  restoreScrollPosition(pathname: string, search: string): boolean {
    if (!this.isNavigatingBack) {
      return false;
    }

    const position = this.getScrollPosition(pathname, search);
    if (position) {
      // Use requestAnimationFrame to ensure DOM is ready
      requestAnimationFrame(() => {
        window.scrollTo({
          left: position.x,
          top: position.y,
          behavior: 'auto' // Instant scroll for back navigation
        });
      });
      return true;
    }

    return false;
  }

  shouldRestoreScroll(): boolean {
    return this.isNavigatingBack;
  }

  debouncedSaveScroll = (pathname: string, search: string): void => {
    if (this.scrollTimeout) {
      clearTimeout(this.scrollTimeout);
    }
    
    this.scrollTimeout = setTimeout(() => {
      this.saveScrollPosition(pathname, search);
    }, this.SCROLL_DEBOUNCE_MS);
  };
}

export const useScrollRestoration = () => {
  const location = useLocation();
  const scrollManager = ScrollManager.getInstance();
  const previousLocationRef = useRef<string>('');
  const isInitialMount = useRef(true);

  useEffect(() => {
    const currentLocationKey = `${location.pathname}${location.search}`;
    
    // Save scroll position of previous page before navigating
    if (!isInitialMount.current && previousLocationRef.current) {
      const [prevPathname, prevSearch = ''] = previousLocationRef.current.split('?');
      scrollManager.saveScrollPosition(prevPathname, prevSearch ? `?${prevSearch}` : '');
    }

    // Try to restore scroll position for current page
    const restored = scrollManager.restoreScrollPosition(location.pathname, location.search);
    
    // If not restored (new page or forward navigation), scroll to top
    if (!restored && !isInitialMount.current) {
      // Small delay to ensure page content is rendered
      setTimeout(() => {
        window.scrollTo({
          left: 0,
          top: 0,
          behavior: 'auto'
        });
      }, 0);
    }

    // Set up scroll listener for current page
    const handleScroll = () => {
      scrollManager.debouncedSaveScroll(location.pathname, location.search);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Update refs
    previousLocationRef.current = currentLocationKey;
    isInitialMount.current = false;

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [location.pathname, location.search]);

  // Manual scroll restoration function for specific use cases
  const restoreScroll = (pathname?: string, search?: string) => {
    const targetPathname = pathname || location.pathname;
    const targetSearch = search || location.search;
    return scrollManager.restoreScrollPosition(targetPathname, targetSearch);
  };

  // Manual scroll saving function
  const saveScroll = (pathname?: string, search?: string) => {
    const targetPathname = pathname || location.pathname;
    const targetSearch = search || location.search;
    scrollManager.saveScrollPosition(targetPathname, targetSearch);
  };

  return {
    restoreScroll,
    saveScroll,
    shouldRestoreScroll: scrollManager.shouldRestoreScroll()
  };
};