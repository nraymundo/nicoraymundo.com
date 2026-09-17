import { Flex, Text, SimpleGrid, useColorModeValue } from "@chakra-ui/react";
import ProjectCard from "../components/ProjectCard";
import ProjectScreenshots from "../components/ProjectScreenshots";

const reverbScreenshots = [
  {
    src: "/app_screenshots/reverb-login-screen-framed.webp",
    fullSrc: "/app_screenshots/reverb-login-screen-framed-full.webp",
    alt: "Reverb Login Screen",
    ratio: 275 / 550,
  },
  {
    src: "/app_screenshots/reverb-home-screen-framed.webp",
    fullSrc: "/app_screenshots/reverb-home-screen-framed-full.webp",
    alt: "Reverb Home Screen",
    ratio: 275 / 550,
  },
  {
    src: "/app_screenshots/reverb-stats-screen-framed.webp",
    fullSrc: "/app_screenshots/reverb-stats-screen-framed-full.webp",
    alt: "Reverb Stats Screen",
    ratio: 275 / 550,
  },
  {
    src: "/app_screenshots/reverb-recent-screen-framed.webp",
    fullSrc: "/app_screenshots/reverb-recent-screen-framed-full.webp",
    alt: "Reverb Recent Screen",
    ratio: 275 / 550,
  },
];

const whoopGridScreenshots = [
  {
    src: "/app_screenshots/whoop-grid.webp",
    fullSrc: "/app_screenshots/whoop-grid-full.webp",
    alt: "Whoop Grid - Grid",
    ratio: 2278 / 1600,
  },
  {
    src: "/app_screenshots/whoop-grid-insights.webp",
    fullSrc: "/app_screenshots/whoop-grid-insights-full.webp",
    alt: "Whoop Grid - Insights",
    ratio: 2278 / 1600,
  },
  {
    src: "/app_screenshots/whoop-grid-streaks.webp",
    fullSrc: "/app_screenshots/whoop-grid-streaks-full.webp",
    alt: "Whoop Grid - Streaks",
    ratio: 2278 / 1600,
  },
  {
    src: "/app_screenshots/whoop-grid-review.webp",
    fullSrc: "/app_screenshots/whoop-grid-review-full.webp",
    alt: "Whoop Grid - Review",
    ratio: 2278 / 1600,
  },
  {
    src: "/app_screenshots/whoop-grid-card.webp",
    fullSrc: "/app_screenshots/whoop-grid-card-full.webp",
    alt: "Whoop Grid - My Card",
    ratio: 2278 / 1600,
  },
];

const spotifyStatsScreenshots = [
  {
    src: "/app_screenshots/toptracks-home-screen.webp",
    fullSrc: "/app_screenshots/toptracks-home-screen-full.webp",
    alt: "Top Tracks Home Screen",
    ratio: 347 / 550,
  },
  {
    src: "/app_screenshots/toptracks-artists-screen.webp",
    fullSrc: "/app_screenshots/toptracks-artists-screen-full.webp",
    alt: "Top Tracks Artists Screen",
    ratio: 347 / 550,
  },
  {
    src: "/app_screenshots/toptracks-tracks-screen.webp",
    fullSrc: "/app_screenshots/toptracks-tracks-screen-full.webp",
    alt: "Top Tracks Tracks Screen",
    ratio: 346 / 550,
  },
];

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
          <ProjectScreenshots images={reverbScreenshots} bg={reverbBg} eager />
        }
        githubUrl="https://github.com"
      />
      <ProjectCard
        name="Signal"
        path="whoop-grid"
        year="2025"
        description="Signal is a dashboard that visualizes WHOOP recovery, sleep, and strain data using GitHub-style calendar heatmaps, with AI-generated readouts (via Anthropic's Claude), streaks, and a shareable year-in-review card. Hosted on Vercel."
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
            <Text textStyle="secondary" fontSize="sm" whiteSpace="nowrap">
              Whoop API
            </Text>
          </Flex>
        }
        image={
          <ProjectScreenshots
            images={whoopGridScreenshots}
            bg="#CF6B4E"
            borderRadius="md"
            maxThumbnails={3}
          />
        }
        // projectUrl="https://whoop-grid.vercel.app"
        githubUrl="https://github.com/nraymundo/whoop-grid"
      />
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
          <ProjectScreenshots images={spotifyStatsScreenshots} bg="#F0EEE9" />
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
