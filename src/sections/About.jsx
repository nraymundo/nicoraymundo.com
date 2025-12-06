import { Box, Text, Grid, GridItem, useColorModeValue } from "@chakra-ui/react";
import AnimatedText from "../components/AnimatedText";

const introText =
  "Hi, I'm Nico. I'm a software engineer from the San Francisco Bay Area, currently in New York City and at American Express.";

const aboutText =
  "I’m a software engineer who enjoys building clean, reliable web applications. I enjoy the slow, thoughtful process of taking ideas from concept to production and slowly shaping them through iteration and refinement.\n\n" +
  "I'm currently working on enhancing the client onboarding experience at American Express. My role involves collaborating with various teams to design and implement solutions to streamline the onboarding process, ensuring a reliable and efficient journey for our clients.\n\n" +
  "Outside of work, I enjoy looking for new restaurants to try in the city, running the Central Park loop, and traveling with friends and family.";

function CVGridHeader({ rows, text, isSectionHeader }) {
  return (
    <GridItem rowSpan={rows} colSpan={[12, 2]}>
      <Box textAlign={"left"}>
        <Text fontSize="md" fontWeight={700} _selection={{ color: "#F0A202" }}>
          {text}
        </Text>
      </Box>
    </GridItem>
  );
}

function CVGridInfo({ positions, dates }) {
  return (
    <GridItem colSpan={[12, 8]}>
      <Grid
        templateRows="repeat(1, 1fr)"
        templateColumns={["repeat(12, 1fr)", "repeat(8, 1fr)"]}
        gap={4}
      >
        <GridItem rowSpan={2} colSpan={[8, 6]}>
          <Box textAlign={"left"}>
            {positions.map((position, i) => (
              <Text
                fontSize="md"
                _selection={{ color: "#F0A202" }}
                fontWeight={400}
                mt={i > 0 ? 5 : 0}
              >
                {position}
              </Text>
            ))}
          </Box>
        </GridItem>
        <GridItem rowSpan={2} colSpan={[4, 2]}>
          <Box textAlign={"left"}>
            {dates.map((date, i) => (
              <Text
                fontSize="md"
                _selection={{ color: "#F0A202" }}
                fontWeight={400}
                mt={i > 0 ? 5 : 0}
              >
                {date}
              </Text>
            ))}
          </Box>
        </GridItem>
      </Grid>
    </GridItem>
  );
}

export default function About() {
  const textColor = useColorModeValue("#252627", "#F2F2F2");

  return (
    <Box
      w="100%"
      color={textColor}
      mt={[10, 20]}
      pt={5}
      pl={[5, 10]}
      pr={[5, 10]}
    >
      <Box
        fontSize={["3xl", "6xl"]}
        textStyle="primary"
        _selection={{ color: "#F0A202" }}
        textAlign="left"
        fontWeight={400}
      >
        <AnimatedText text={introText} link={"American Express"} />
        {/* {introText}{" "}
        <Link
          href="#"
          _hover={{ textDecoration: "none", color: "#016FD0" }}
          _selection={{ color: "#016FD0" }}
          textStyle="secondary"
          fontWeight={700}
        >
          American Express
        </Link>
        . */}
      </Box>
      <Box h={0.8} mt={5} backgroundColor="#494949" />
      <Box textStyle="secondary">
        <Grid
          templateRows="repeat(2)"
          templateColumns="repeat(12, 1fr)"
          gap={5}
          mt={5}
        >
          <GridItem colSpan={[12, 4]}>
            <Box textAlign={"left"}>
              <Text
                fontSize="md"
                fontWeight={700}
                _selection={{ color: "#F0A202" }}
              >
                About
              </Text>
            </Box>
          </GridItem>
          <GridItem colSpan={[12, 6]}>
            <Box textAlign={"left"}>
              <Text
                fontSize="md"
                _selection={{ color: "#F0A202" }}
                fontWeight={400}
                whiteSpace="pre-line"
              >
                {aboutText}
              </Text>
            </Box>
          </GridItem>
        </Grid>
      </Box>
      <Box h={0.8} mt={5} backgroundColor="#494949" />
      <Box textStyle="secondary">
        <Grid
          templateRows={["repeat(5)", "repeat(2)"]}
          templateColumns="repeat(12, 1fr)"
          gap={5}
          mt={5}
        >
          <CVGridHeader rows={[1, 4]} text="Curriculum Vitae" />
          <CVGridHeader rows={1} text="American Express" />
          <CVGridInfo
            positions={["Engineer II", "Engineer I"]}
            dates={["2023 - Present", "2021 - 2023"]}
          />
          <CVGridHeader rows={1} text="Maxim Integrated" />
          <CVGridInfo
            positions={["IT Business Intelligence Intern"]}
            dates={["2020"]}
          />
          <CVGridHeader rows={1} text="LMU Computer Science" />
          <CVGridInfo
            positions={["Teaching Assistant"]}
            dates={["2018 - 2020"]}
          />
          <CVGridHeader rows={1} text="Loyola Marymount University" />
          <CVGridInfo
            positions={["Bachelor of Arts, Computer Science"]}
            dates={["2017 - 2021"]}
          />
        </Grid>
      </Box>
    </Box>
  );
}
