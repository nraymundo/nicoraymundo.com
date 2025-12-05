import { Flex, Image, SimpleGrid, Box, Text, Link } from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
import { photos } from "../utils/photos";

const entries = [
  {
    place: "Italy",
    date: "01.2025",
    images: photos.italy,
    path: "italy",
  },
  {
    place: "New Mexico Badlands & Balloon Fiesta",
    date: "10.2024",
    images: photos.new_mexico,
    path: "new-mexico",
  },
  {
    place: "London & Edinburgh",
    date: "03.2020",
    images: photos.lon_edi,
    path: "london-edinburgh",
  },
  {
    place: "San Francisco",
    date: "01.2020",
    images: photos.sf,
    path: "san-francisco",
  },
  {
    place: "Los Angeles",
    date: "01.2020",
    images: photos.la,
    path: "los-angeles",
  },
  {
    place: "Day N Vegas",
    date: "11.2019",
    images: photos.vegas,
    path: "vegas",
  },
  {
    place: "Tokyo, Osaka, Kyoto",
    date: "05.2019",
    images: photos.japan,
    path: "japan",
  },
];

export default function PhotoJournal() {
  return (
    <div className="photo-journal">
      {entries.map((entry) => (
        <Box key={entry.place}>
          <Flex marginTop={20} px={[4, 10]} direction="row">
            <Link
              as={ReactRouterLink}
              to={entry.path}
              _hover={{ textDecoration: "none", color: "#494949" }}
              display="inline-flex"
              alignItems="center"
              position="relative"
            >
              <Text
                textStyle="secondary"
                fontSize={["md", "xl"]}
                fontWeight={500}
              >
                {entry.place}
              </Text>

              <Text
                textStyle="secondary"
                fontSize={["md", "xl"]}
                fontWeight={700}
                ml={2}
              >
                •
              </Text>

              <Text
                textStyle="secondary"
                fontSize={["md", "xl"]}
                fontWeight={500}
                ml={2}
              >
                {entry.date}
              </Text>
            </Link>
          </Flex>

          <SimpleGrid columns={[2, 3, 4]} spacing={6} px={[4, 10]} mt={5}>
            {entry.images.map((img, i) => (
              <Flex key={img ?? i} justify="center">
                <Image src={img} fit="contain" w="100%" />
              </Flex>
            ))}
          </SimpleGrid>
        </Box>
      ))}
    </div>
  );
}
