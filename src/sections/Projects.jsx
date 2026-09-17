import {
  Flex,
  Text,
  Image,
  SimpleGrid,
  useColorModeValue,
} from "@chakra-ui/react";
import ProjectCard from "../components/ProjectCard";
import FadeImage from "../components/FadeImage";

export default function Projects() {
  const reverbBg = useColorModeValue("#FFD166", "#F0EEE9");

  return (
    <SimpleGrid
      w="100%"
      mt={20}
      pl={[5, 10]}
      pr={[5, 10]}
      columns={1}
      spacing={20}
      display="flex"
      flexDirection="column"
      alignItems="center"
      mb={20}
    >
      <ProjectCard
        name="Reverb"
        year="2026"
        description="A mobile app built with React Native (Expo) and the Spotify API, backed by Supabase, that shows a user's top tracks, artists, and albums alongside detailed listening stats for daily, weekly, and monthly date ranges."
        tech={
          <Flex direction="row">
            <Text
              textStyle="secondary"
              fontSize="sm"
              mr={2}
              whiteSpace="nowrap"
            >
              JS
            </Text>
            <Text
              textStyle="secondary"
              fontSize="sm"
              mr={2}
              whiteSpace="nowrap"
            >
              React Native
            </Text>
            <Text
              textStyle="secondary"
              fontSize="sm"
              mr={2}
              whiteSpace="nowrap"
            >
              Spotify API
            </Text>
            <Text textStyle="secondary" fontSize="sm" whiteSpace="nowrap">
              Supabase
            </Text>
          </Flex>
        }
        image={
          <Flex
            justify="center"
            align="center"
            flexWrap="wrap"
            backgroundColor={reverbBg}
            mt={2}
            mb={2}
            py={[1.5, 2.5]}
            borderRadius={10}
            gap={[3, 6]}
          >
            <FadeImage
              eager
              aspectRatio={275 / 550}
              h={[150, 250]}
              fit="contain"
              align="center top"
              borderRadius={[16, 26]}
              src="/app_screenshots/reverb-login-screen-framed.webp"
              alt="Reverb Login Screen"
            />
            <FadeImage
              eager
              aspectRatio={275 / 550}
              h={[150, 250]}
              fit="contain"
              align="center top"
              borderRadius={[16, 26]}
              src="/app_screenshots/reverb-home-screen-framed.webp"
              alt="Reverb Home Screen"
            />
            <FadeImage
              eager
              aspectRatio={275 / 550}
              h={[150, 250]}
              fit="contain"
              align="center top"
              borderRadius={[16, 26]}
              src="/app_screenshots/reverb-stats-screen-framed.webp"
              alt="Reverb Stats Screen"
            />
            <FadeImage
              eager
              aspectRatio={275 / 550}
              h={[150, 250]}
              fit="contain"
              align="center top"
              borderRadius={[16, 26]}
              src="/app_screenshots/reverb-recent-screen-framed.webp"
              alt="Reverb Recent Screen"
            />
          </Flex>
        }
        githubUrl="https://github.com"
      />
      {/* <ProjectCard
        name="WHOOP Grid"
        path="whoop-grid"
        year="2025"
        description="A dashboard that visualizes WHOOP recovery, sleep, and activity data using GitHub-style calendar heatmaps. Hosted on Vercel."
        tech={
          <Flex direction="row">
            <Text
              textStyle="secondary"
              fontSize="sm"
              mr={2}
              whiteSpace="nowrap"
            >
              TypeScript
            </Text>
            <Text
              textStyle="secondary"
              fontSize="sm"
              mr={2}
              whiteSpace="nowrap"
            >
              Next.js
            </Text>
            <Text
              textStyle="secondary"
              fontSize="sm"
              mr={2}
              whiteSpace="nowrap"
            >
              Tailwind CSS
            </Text>
            <Text
              textStyle="secondary"
              fontSize="sm"
              mr={2}
              whiteSpace="nowrap"
            >
              Whoop API
            </Text>
          </Flex>
        }
        image={
          <Flex
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
          </Flex>
        }
        // projectUrl="https://whoop-grid.vercel.app"
        githubUrl="https://github.com/nraymundo/whoop-grid"
      /> */}
      <ProjectCard
        name="Spotify Stats"
        path="spotify-stats"
        year="2023"
        description="A mobile app built with React Native and the Spotify API to display a user's top stats."
        tech={
          <Flex direction="row" fontWeight={400}>
            <Text
              textStyle="secondary"
              fontSize="sm"
              mr={2}
              whiteSpace="nowrap"
            >
              JS
            </Text>
            <Text
              textStyle="secondary"
              fontSize="sm"
              mr={2}
              whiteSpace="nowrap"
            >
              React Native
            </Text>
            <Text
              textStyle="secondary"
              fontSize="sm"
              mr={2}
              whiteSpace="nowrap"
            >
              Spotify API
            </Text>
          </Flex>
        }
        image={
          <Flex
            justify="center"
            align="center"
            flexWrap="wrap"
            backgroundColor="#F0EEE9"
            mt={2}
            mb={2}
            py={[1.5, 2.5]}
            borderRadius={10}
            gap={[3, 6]}
          >
            <FadeImage
              aspectRatio={347 / 550}
              h={[150, 250]}
              fit="contain"
              align="center top"
              borderRadius={[16, 26]}
              src="/app_screenshots/toptracks-home-screen.webp"
              alt="Top Tracks Home Screen"
            />
            <FadeImage
              aspectRatio={347 / 550}
              h={[150, 250]}
              fit="contain"
              align="center top"
              borderRadius={[16, 26]}
              src="/app_screenshots/toptracks-artists-screen.webp"
              alt="Top Tracks Artists Screen"
            />
            <FadeImage
              aspectRatio={346 / 550}
              h={[150, 250]}
              fit="contain"
              align="center top"
              borderRadius={[16, 26]}
              src="/app_screenshots/toptracks-tracks-screen.webp"
              alt="Top Tracks Tracks Screen"
            />
          </Flex>
        }
        githubUrl="https://github.com/nraymundo/spotify-test"
      />
      <ProjectCard
        name="Pivot"
        year="2021"
        description="Uses aspects of compilers and interpreters to create a programming language featuring a custom built compiler with semantic analysis, code generation, and code optimization. Also features an accompanying website."
        tech={
          <Flex direction="row">
            <Text
              textStyle="secondary"
              fontSize="sm"
              mr={2}
              whiteSpace="nowrap"
            >
              JS
            </Text>
            <Text
              textStyle="secondary"
              fontSize="sm"
              mr={2}
              whiteSpace="nowrap"
            >
              Ohm
            </Text>
            <Text textStyle="secondary" fontSize="sm" whiteSpace="nowrap">
              ReactJS
            </Text>
          </Flex>
        }
        githubUrl="https://github.com/wdibi/Pivot"
      />
      <ProjectCard
        name="NFA Simulator"
        year="2020"
        description="Implements fundamentals of theory of computation to simulate the construction and querying of nondeterministic finite automata."
        tech={
          <Flex direction="row">
            <Text
              textStyle="secondary"
              fontSize="sm"
              mr={2}
              whiteSpace="nowrap"
            >
              Python
            </Text>
          </Flex>
        }
        githubUrl="https://github.com/nraymundo/cmsi385"
      />
      <ProjectCard
        name="Next-Word Prediction Model"
        year="2020"
        description="Uses natural language processing to develop a Feed-Forward Neural Network model that was tested on a pre-trained GPT-2 model on next word prediction."
        tech={
          <Flex direction="row">
            <Text
              textStyle="secondary"
              fontSize="sm"
              mr={2}
              whiteSpace="nowrap"
            >
              Python
            </Text>
            <Text
              textStyle="secondary"
              fontSize="sm"
              mr={2}
              whiteSpace="nowrap"
            >
              GPT-2
            </Text>
          </Flex>
        }
        githubUrl="https://github.com/lmu-mandy/project-jnw"
      />
    </SimpleGrid>
  );
}
