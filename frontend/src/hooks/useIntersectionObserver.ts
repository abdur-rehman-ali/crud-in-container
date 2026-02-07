import { useEffect, type RefObject } from "react";

interface UseIntersectionObserverOptions {
  enabled?: boolean;
  threshold?: number;
  rootMargin?: string;
}

export const useIntersectionObserver = (
  ref: RefObject<HTMLElement | null>,
  callback: () => void,
  options: UseIntersectionObserverOptions = {}
) => {
  const { enabled = true, threshold = 0.1, rootMargin } = options;

  useEffect(() => {
    if (!ref.current || !enabled) {return;}

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          callback();
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [ref, callback, enabled, threshold, rootMargin]);
};
