import { RefObject, UIEvent, UIEventHandler, useEffect, useRef, useState } from 'react';
import { isScrollAtTheEnd } from './dom.utils';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function useHorizontalScroll(): [RefObject<any>, UIEventHandler, boolean, boolean] {
  const [isScrollStart, setIsScrollStart] = useState(true);
  const [isScrollEnd, setIsScrollEnd] = useState(true);
  const scrollDivRef = useRef(null);

  const setScrollPoints = (target: Element) => {
    setIsScrollStart(target.scrollLeft <= 0);
    setIsScrollEnd(isScrollAtTheEnd(target));
  };

  useEffect(() => {
    const target = scrollDivRef.current;
    if (target) {
      setScrollPoints(target);
    }
  }, [scrollDivRef]);

  useEffect(() => {
    function handleResize() {
      scrollDivRef.current && setScrollPoints(scrollDivRef.current);
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleScroll = (e: UIEvent<Element>) => {
    const target = e.target as Element;
    setScrollPoints(target);
  };

  return [scrollDivRef, handleScroll, isScrollStart, isScrollEnd];
}

export function useOutsideClick(onOutsideClick: (event: EventTarget | null) => void) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const elementRef: RefObject<any> = useRef(null);

  const handleClick = (event: MouseEvent) => {
    if (!elementRef?.current?.contains(event?.target)) {
      onOutsideClick(event?.target);
    }
  };

  useEffect(() => {
    window.addEventListener('click', handleClick);
    return () => {
      window.removeEventListener('click', handleClick);
    };
  });

  return { elementRef };
}
