import { useState } from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import FadeImage from "./FadeImage";
import ScreenshotCarouselModal from "./ScreenshotCarouselModal";

export default function ProjectScreenshots({
  images,
  bg,
  eager = false,
  borderRadius = [16, 26],
  maxThumbnails,
}) {
  const [openIndex, setOpenIndex] = useState(null);

  const visibleImages =
    maxThumbnails && maxThumbnails < images.length
      ? images.slice(0, maxThumbnails)
      : images;
  const hiddenCount = images.length - visibleImages.length;

  return (
    <>
      <Flex
        justify="center"
        align="center"
        flexWrap="wrap"
        backgroundColor={bg}
        mt={2}
        mb={2}
        py={[1.5, 2.5]}
        borderRadius={10}
        gap={[3, 6]}
      >
        {visibleImages.map((img, i) => {
          const isLastVisible = i === visibleImages.length - 1;

          return (
            <Box key={img.src} position="relative" role="group">
              <FadeImage
                eager={eager}
                aspectRatio={img.ratio}
                h={[150, 250]}
                fit="contain"
                align="center top"
                borderRadius={borderRadius}
                src={img.src}
                alt={img.alt}
                cursor="pointer"
                transition="transform 0.15s ease"
                _groupHover={{ transform: "scale(1.03)" }}
                onClick={() => setOpenIndex(i)}
              />
              {isLastVisible && hiddenCount > 0 && (
                <Flex
                  position="absolute"
                  inset={0}
                  align="center"
                  justify="center"
                  bg="blackAlpha.600"
                  borderRadius={borderRadius}
                  cursor="pointer"
                  pointerEvents="none"
                  transition="transform 0.15s ease"
                  _groupHover={{ transform: "scale(1.03)" }}
                >
                  <Text
                    textStyle="secondary"
                    fontSize={["lg", "2xl"]}
                    fontWeight={700}
                    color="#edede9"
                  >
                    +{hiddenCount}
                  </Text>
                </Flex>
              )}
            </Box>
          );
        })}
      </Flex>
      <ScreenshotCarouselModal
        images={images}
        startIndex={openIndex ?? 0}
        isOpen={openIndex !== null}
        onClose={() => setOpenIndex(null)}
        borderRadius={borderRadius}
      />
    </>
  );
}
