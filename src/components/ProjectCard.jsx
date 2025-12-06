import {
  Box,
  Flex,
  Text,
  IconButton,
  Link,
  useColorModeValue,
  Center,
} from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

export default function ProjectCard({
  name,
  path,
  year,
  description,
  tech,
  image,
  projectUrl,
  githubUrl,
}) {
  const textColor = useColorModeValue("#252627", "#edede9");

  return (
    <Box w={["100%", "90%"]} color={textColor}>
      <Flex justify="space-between" align="center" mt={2}>
        <Link
          as={ReactRouterLink}
          to={path}
          _hover={{ textDecoration: "none", color: "#797979" }}
          display="inline-flex"
          alignItems="center"
          position="relative"
        >
          <Text
            textStyle="secondary"
            fontSize={["xl", "4xl"]}
            whiteSpace="nowrap"
            fontWeight={700}
          >
            {name}
          </Text>
        </Link>
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          style={{
            width: "100%",
            height: 0.8,
            backgroundColor: "#797979",
            marginLeft: 15,
            marginRight: 15,
          }}
          transition={{
            duration: 1,
          }}
        />
        <Text textStyle="secondary" fontSize={["xl", "4xl"]} fontWeight={700}>
          {year}
        </Text>
      </Flex>
      {image}
      {/* <Link as={ReactRouterLink} to={path} _hover={{ textDecoration: "none" }}>
        <Box
          position="relative"
          role="group"
          cursor="pointer"
          borderRadius="2xl"
          overflow="hidden"
        >
          {image}
          <Box
            position="absolute"
            inset="0"
            bg="rgba(0,0,0,0.35)"
            backdropFilter="blur(20px)" // 👈 THIS is the blur
            opacity={0}
            transition="opacity 0.2s ease-out"
            _groupHover={{ opacity: 1 }}
            pointerEvents="none"
            border="1px solid rgba(255,255,255,0.2)"
            borderRadius={10}
            mt={2}
            mb={2}
          >
            <Flex justify="center" align="center" height="100%">
              <Text
                textStyle="primary"
                fontSize={["4xl"]}
                fontWeight={700}
                textColor="#edede9"
              >
                View Details
              </Text>
            </Flex>
          </Box>
        </Box>
      </Link> */}
      <Text
        textStyle="secondary"
        fontSize={["md", "lg"]}
        mt={2}
        textAlign="left"
        fontWeight={400}
      >
        {description}
      </Text>
      <Flex justify="space-between" align="center" mt={2}>
        {tech}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          style={{
            width: "100%",
            height: 0.8,
            backgroundColor: "#494949",
            marginLeft: 15,
            marginRight: 15,
          }}
          transition={{
            duration: 1,
          }}
        />
        <Flex>
          {projectUrl && (
            <Link href={projectUrl} target="_blank" rel="noopener noreferrer">
              <IconButton
                isRound={true}
                aria-label="Link"
                fontSize="xl"
                size="sm"
                icon={<FiExternalLink />}
                color="252627"
                colorScheme="black"
                cursor="pointer"
                _hover={{
                  transform: "scale(1.2)",
                  transition: "0.15s ease",
                }}
              />
            </Link>
          )}
          <Link href={githubUrl} target="_blank" rel="noopener noreferrer">
            <IconButton
              isRound={true}
              aria-label="GitHub"
              fontSize="xl"
              size="sm"
              icon={<FaGithub />}
              color="252627"
              colorScheme="black"
              cursor="pointer"
              _hover={{
                transform: "scale(1.2)",
                transition: "0.15s ease",
              }}
            />
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
}
