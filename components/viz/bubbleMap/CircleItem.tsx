"use client";

import { useSpring, animated } from "@react-spring/web";

type CircleItemProps = {
  x: number;
  y: number;
  color: string;
  r: number;
  onClick: any;
};

export const CircleItem = ({ x, y, color, r, onClick }: CircleItemProps) => {
  const springProps = useSpring({
    from: {
      r: 1,
    },
    to: {
      r,
      x,
      y,
      color,
    },
    config: {
      friction: 100,
    },
  });

  return (
    <g>
      <animated.circle
        cy={springProps.y}
        cx={springProps.x}
        opacity={1}
        stroke={springProps.color}
        fill={color === "black" ? "transparent" : springProps.color}
        fillOpacity={0.3}
        strokeWidth={1}
        r={springProps.r}
        onClick={onClick}
        cursor={"pointer"}
      />
    </g>
  );
};
