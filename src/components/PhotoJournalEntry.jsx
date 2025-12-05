import { useEffect, useRef, useState } from "react";
import {
  Box,
  Flex,
  Text,
  SimpleGrid,
  Image,
  Skeleton,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";

export default function PhotoJournalEntry({ entry }) {
  const [hasBeenVisible, setHasBeenVisible] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([obsEntry]) => {
        if (obsEntry.isIntersecting) {
          setHasBeenVisible(true);
          observer.disconnect();
        }
      },
      {
        root: null,
        rootMargin: "200px",
        threshold: 0.1,
      }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  return (
    <Box ref={containerRef}>
      <Flex marginTop={20} px={[4, 10]} direction="row">
        <ChakraLink
          as={ReactRouterLink}
          to={entry.path}
          _hover={{ textDecoration: "none", color: "#494949" }}
          display="inline-flex"
          alignItems="center"
        >
          <Text textStyle="secondary" fontSize={["sm", "xl"]} fontWeight={500}>
            {entry.place}
          </Text>

          {entry.date && (
            <>
              <Text
                textStyle="secondary"
                fontSize={["sm", "xl"]}
                fontWeight={700}
                ml={2}
              >
                •
              </Text>
              <Text
                textStyle="secondary"
                fontSize={["sm", "xl"]}
                fontWeight={500}
                ml={2}
              >
                {entry.date}
              </Text>
            </>
          )}
        </ChakraLink>
      </Flex>

      <SimpleGrid columns={[2, 3, 4]} spacing={6} px={[4, 10]} mt={5}>
        {hasBeenVisible
          ? entry.images.map((img, i) => (
              <Flex key={img ?? i} justify="center">
                <Image src={img} fit="contain" w="100%" loading="lazy" />
              </Flex>
            ))
          : Array.from({ length: 8 }).map((_, i) => (
              <Skeleton key={i} h="250px" borderRadius="md" />
            ))}
      </SimpleGrid>
    </Box>
  );
}
