import { createContext, useState, useContext, useRef, useEffect } from "react";

const ScrollSyncContext = createContext();

import PropTypes from 'prop-types';

export const SyncScroll = ({ children }) => {
  const [scrollPosition, setScrollPosition] = useState(0);

  return (
    <ScrollSyncContext.Provider value={{ scrollPosition, setScrollPosition }}>
      {children}
    </ScrollSyncContext.Provider>
  );
}

SyncScroll.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useSyncScroll = () => {
  const { scrollPosition, setScrollPosition } = useContext(ScrollSyncContext);
  const elementRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(elementRef.current.scrollTop);
    };

    elementRef.current.addEventListener('scroll', handleScroll);

    return () => {
      elementRef.current.removeEventListener('scroll', handleScroll);
    };
  }, [setScrollPosition]);

  // Set scroll position
  useEffect(() => {
    elementRef.current.scrollTop = scrollPosition;
  }, [scrollPosition]);

  return [elementRef];
}
