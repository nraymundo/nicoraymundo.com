import { Flex, Image, SimpleGrid, Box, Text, Link } from "@chakra-ui/react";
import { photos } from "../utils/photos";

export default function PhotoSet({ title, images }) {
  return (
    <div className="journal-page">
      <Box key="london_edinburgh">
        <Flex mt="100px" justify="center">
          <Text textStyle="primary" fontSize={["2xl", "5xl"]} fontWeight={500}>
            {title}
          </Text>
        </Flex>

        <SimpleGrid columns={[1, 2]} spacing={6} px={[4, 10]} mt={20}>
          {images.map((img, i) => (
            <Flex key={img ?? i} justify="center">
              <Image src={img} fit="contain" w="100%" />
            </Flex>
          ))}
        </SimpleGrid>
      </Box>
    </div>
  );
}
