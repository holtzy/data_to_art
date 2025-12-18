import { useEffect, useRef, useState } from "react";
import { useSpring, animated } from "@react-spring/web";

type AnimatedCounterProps = {
  value: number;
  duration?: number;
  threshold?: number;
  format?: (n: number) => string;
  className?: string;
};

export const AnimatedCounter = ({
  value,
  duration = 1500,
  threshold = 0.5,
  format = (n) => Math.floor(n).toString(),
  className,
}: AnimatedCounterProps) => {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  const spring = useSpring({
    from: { number: 0 },
    to: { number: inView ? value : 0 },
    config: { duration },
  });

  return (
    <animated.span ref={ref} className={className}>
      {spring.number.to(format)}
    </animated.span>
  );
};
