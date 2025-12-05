import { Flex, Image, SimpleGrid, Box, Text, Link } from "@chakra-ui/react";

export default function ProjectSet({ title }) {
  return (
    <div className={`${title}-details`}>
      <Box key={`${title}-details`}>
        <Flex mt="100px" justify="center">
          <Text textStyle="primary" fontSize={["3xl", "5xl"]} fontWeight={500}>
            WIP
          </Text>
        </Flex>

        {/* <Flex
          justify="center"
          backgroundColor="#E9E3DD"
          mt={2}
          mb={2}
          _hover={{ bg: "#797979" }}
          borderRadius={10}
        >
          <Image
            fit="cover"
            align="center top"
            src="/app_screenshots/whoop-grid.jpg"
            alt="Whoop Grid"
            borderRadius={10}
          />
        </Flex> */}

        {/* <SimpleGrid columns={[1, 2]} spacing={6} px={[4, 10]} mt={20}>
          {images.map((img, i) => (
            <Flex key={img ?? i} justify="center">
              <Image src={img} fit="contain" w="100%" />
            </Flex>
          ))}
        </SimpleGrid> */}
      </Box>
    </div>
  );
}
