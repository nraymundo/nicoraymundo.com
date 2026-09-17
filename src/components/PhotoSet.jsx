import { Flex, SimpleGrid, Box, Text } from "@chakra-ui/react";
import FadeImage from "./FadeImage";

export default function PhotoSet({ title, images }) {
  return (
    <div className={`${title}-photos`}>
      <Box key="london_edinburgh">
        <Flex mt="100px" justify="center">
          <Text textStyle="primary" fontSize={["3xl", "5xl"]} fontWeight={500}>
            {title}
          </Text>
        </Flex>

        <SimpleGrid columns={[1, 2]} spacing={6} px={[4, 10]} mt={20}>
          {images.map((img, i) => (
            <Flex key={img.src ?? i} justify="center">
              <FadeImage
                src={img.src}
                aspectRatio={img.ratio}
                fit="contain"
                w="100%"
              />
            </Flex>
          ))}
        </SimpleGrid>
      </Box>
    </div>
  );
}
