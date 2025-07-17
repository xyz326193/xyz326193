import React from 'react';
import { Link, LinkProps } from 'react-router-dom';
import { useScrollRestoration } from '../hooks/useScrollRestoration';

interface SmartLinkProps extends LinkProps {
  saveScrollBeforeNavigate?: boolean;
  scrollToTop?: boolean;
}

export const SmartLink: React.FC<SmartLinkProps> = ({
  saveScrollBeforeNavigate = true,
  scrollToTop = true,
  onClick,
  ...props
}) => {
  const { saveScroll } = useScrollRestoration();

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    // Save current scroll position before navigating
    if (saveScrollBeforeNavigate) {
      saveScroll();
    }

    // Call original onClick if provided
    if (onClick) {
      onClick(event);
    }

    // Handle scroll to top for new pages (if not prevented)
    if (scrollToTop && !event.defaultPrevented) {
      // This will be handled by the scroll restoration system
      // but we can add additional logic here if needed
    }
  };

  return <Link {...props} onClick={handleClick} />;
};