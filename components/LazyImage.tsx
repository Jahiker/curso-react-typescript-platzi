import { useRef, useEffect, useState } from "react";
import type { ImgHTMLAttributes } from "react";

type LazyImageProps = {
  src: string;
  alt?: string;
};

type ImageNativeType = ImgHTMLAttributes<HTMLImageElement>;

type Props = LazyImageProps & ImageNativeType;

export const LazyImage = ({ src, alt, ...imageProps }: Props): JSX.Element => {
  const node = useRef<HTMLImageElement>(null);
  const [currentSrc, setCurrentSrc] = useState(
    "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4="
  );

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setCurrentSrc(src);

          observer.disconnect();
        }
      });
    });

    if (node.current) {
      observer.observe(node.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [src]);

  return <img src={currentSrc} alt={alt} ref={node} {...imageProps} />;
};
