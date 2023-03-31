import { useRef } from "react";

type Props = {
  image: string;
  alt: string;
};

export const RandomFox = ({ image }: Props): JSX.Element => {
  const node = useRef<HTMLImageElement>(null)

  return (
    <img
      src={image}
      alt=""
      width={320}
      height={"auto"}
      className="mx-auto my-5 rounded-md"
      ref={node}
    />
  );
};
