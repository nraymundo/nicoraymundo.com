import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import {
  Box,
  Flex,
  IconButton,
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
} from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import FadeImage from "./FadeImage";

export default function ScreenshotCarouselModal({
  images,
  startIndex = 0,
  isOpen,
  onClose,
  borderRadius = [16, 26],
}) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
  });
  const [selectedIndex, setSelectedIndex] = useState(startIndex);
  const dotColor = "whiteAlpha.400";
  const dotActiveColor = "#edede9";

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((i) => emblaApi?.scrollTo(i), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
    return () => emblaApi.off("select", onSelect);
  }, [emblaApi]);

  useEffect(() => {
    if (isOpen && emblaApi) {
      emblaApi.scrollTo(startIndex, true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen, emblaApi]);

  const handleKeyDown = (e) => {
    if (e.key === "ArrowLeft") scrollPrev();
    if (e.key === "ArrowRight") scrollNext();
  };

  const ratio = images[0]?.ratio ?? 1;
  // Bound height by both viewport height AND viewport width (via the
  // image's aspect ratio) so wide/landscape screenshots don't overflow
  // narrow mobile viewports when height alone would make them too wide.
  // The width budget also leaves room for the arrows/close button, which
  // sit outside the box's edges.
  const boxHeight = [
    `min(58dvh, ${(70 / ratio).toFixed(2)}vw)`,
    `min(70dvh, ${(78 / ratio).toFixed(2)}vw)`,
  ];

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="full" allowPinchZoom>
      <ModalOverlay bg="blackAlpha.700" />
      <ModalContent
        bg="transparent"
        boxShadow="none"
        display="flex"
        flexDir="column"
        alignItems="center"
        justifyContent="center"
        minH="100dvh"
        px={[10, 20]}
        py={[10, 16]}
        onKeyDown={handleKeyDown}
        onClick={onClose}
      >
        <Box
          position="relative"
          w="fit-content"
          onClick={(e) => e.stopPropagation()}
        >
          <ModalCloseButton
            zIndex={2}
            color={dotActiveColor}
            top={[-8, -10]}
            right={[-10, -14]}
          />
          <IconButton
            aria-label="Previous screenshot"
            icon={<ChevronLeftIcon boxSize={6} />}
            onClick={scrollPrev}
            isRound
            position="absolute"
            left={[-10, -14]}
            top="50%"
            transform="translateY(-50%)"
            zIndex={2}
            size="sm"
          />
          <Box
            ref={emblaRef}
            overflow="hidden"
            h={boxHeight}
            aspectRatio={ratio}
          >
            <Flex h="100%">
              {images.map((img) => (
                <Box key={img.src} flex="0 0 100%" h="100%" minW={0}>
                  <FadeImage
                    eager
                    src={img.fullSrc ?? img.src}
                    alt={img.alt}
                    fit="contain"
                    h="100%"
                    w="100%"
                    borderRadius={borderRadius}
                  />
                </Box>
              ))}
            </Flex>
          </Box>
          <IconButton
            aria-label="Next screenshot"
            icon={<ChevronRightIcon boxSize={6} />}
            onClick={scrollNext}
            isRound
            position="absolute"
            right={[-10, -14]}
            top="50%"
            transform="translateY(-50%)"
            zIndex={2}
            size="sm"
          />
        </Box>
        <Flex
          justify="center"
          gap={2}
          mt={4}
          onClick={(e) => e.stopPropagation()}
        >
          {images.map((img, i) => (
            <Box
              key={img.src}
              as="button"
              aria-label={`Go to screenshot ${i + 1}`}
              onClick={() => scrollTo(i)}
              w={2}
              h={2}
              borderRadius="full"
              bg={i === selectedIndex ? dotActiveColor : dotColor}
              transition="background-color 0.2s ease"
            />
          ))}
        </Flex>
      </ModalContent>
    </Modal>
  );
}
