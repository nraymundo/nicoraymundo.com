import { useLayoutEffect, useRef, useState } from "react";
import { Image, Skeleton } from "@chakra-ui/react";

export default function FadeImage({ eager = false, aspectRatio, ...imageProps }) {
  const imgRef = useRef(null);
  const [loaded, setLoaded] = useState(false);

  // If the browser already has this image cached (e.g. we're remounting
  // after navigating away and back), skip the skeleton/fade entirely
  // instead of re-flashing it while the cached image paints instantly.
  useLayoutEffect(() => {
    if (imgRef.current?.complete) {
      setLoaded(true);
    }
  }, []);

  return (
    <Skeleton
      isLoaded={loaded}
      borderRadius={imageProps.borderRadius}
      w={imageProps.w}
      h={imageProps.h}
      aspectRatio={aspectRatio}
    >
      <Image
        {...imageProps}
        ref={imgRef}
        aspectRatio={aspectRatio}
        loading={eager ? "eager" : "lazy"}
        onLoad={() => setLoaded(true)}
        opacity={loaded ? 1 : 0}
        transition="opacity 0.3s ease"
      />
    </Skeleton>
  );
}
