import { useEffect, useState } from "react";
import {
  Box,
  Text,
  Icon,
  Menu,
  MenuButton,
  Button,
  MenuList,
  MenuItem,
  Image,
  Flex,
  Link as ChakraLink,
  LinkBox,
  LinkOverlay,
  Link,
  useColorMode,
} from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import { Link as ReactRouterLink, useLocation } from "react-router-dom";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import Marquee from "react-fast-marquee";
import { MdCopyright, MdLightMode, MdDarkMode } from "react-icons/md";
import { FaSpotify } from "react-icons/fa";
import icon from "../assets/icon.png";
import Resume from "../assets/resume.pdf";
import getRecentlyPlayedInfo from "../SpotifyAPI";

function NavigationItem({ name, url, isDisabled }) {
  const location = useLocation();
  const isActive =
    url === "/" ? location.pathname === "/" : location.pathname.startsWith(url);

  return (
    <MenuItem
      as="div"
      position="relative"
      textAlign="center"
      fontSize="3xl"
      textStyle="secondary"
      color="#F2F2F2"
      backgroundColor="#0A0A0A"
      isDisabled={isDisabled}
      overflow="hidden"
      px={0}
    >
      {isActive && (
        <motion.div
          layoutId="nav-pill"
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: 4,
          }}
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
        />
      )}

      <ChakraLink
        as={ReactRouterLink}
        to={url}
        width="100%"
        _hover={{ textDecoration: "none", color: "#797979" }}
        position="relative"
        zIndex={1}
        py={2}
      >
        {name}
      </ChakraLink>
    </MenuItem>
  );
}

function SpotifyRecentlyPlayed({ currentTrack }) {
  return (
    <MenuItem
      as="a"
      textStyle="secondary"
      backgroundColor="#0A0A0A"
      color="#F2F2F2"
      pl={0}
      pr={0}
      width="100%"
    >
      <Link
        color="#F2F2F2"
        fontSize="15px"
        w={["40%", "30%"]}
        borderTop="1px solid #494949"
        textAlign="center"
        borderBottom="1px solid #494949"
        borderRight="1px solid #494949"
        pt={2}
        pb={2}
        display="flex"
        justifyContent="center"
        alignItems="center"
        _hover={{ color: "#1DB954" }}
        href={currentTrack.url}
        target="_blank"
        rel="noopener noreferrer"
      >
        Now Playing
        <Icon as={FaSpotify} fontSize={[20, 14]} pl={1} />
      </Link>
      <LinkBox w={["60%", "70%"]}>
        <LinkOverlay
          href={currentTrack.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Marquee
            style={{
              borderTop: "1px solid #494949",
              borderBottom: "1px solid #494949",
            }}
            speed={20}
          >
            <Text color="#F2F2F2" fontSize="15px" pt={2} pb={2} mr={20}>
              {currentTrack.title} - {currentTrack.artist}
            </Text>
          </Marquee>
        </LinkOverlay>
      </LinkBox>
    </MenuItem>
  );
}

export default function NavigationMenu({}) {
  const location = useLocation();
  const [isNavOpen, setIsNavOpen] = useState(false);

  const pathname = location.pathname;
  const NavigationPageLabel =
    pathname === "/" ? "/HOME" : `/${pathname.slice(1).toUpperCase()}`;
  const [result, setResult] = useState({});
  const { colorMode, toggleColorMode } = useColorMode();

  useEffect(() => {
    Promise.all([getRecentlyPlayedInfo()]).then((results) => {
      setResult(results[0]);
    });
  }, []);

  return (
    <Box w={[350, 450]}>
      <Menu
        matchWidth={true}
        onOpen={() => setIsNavOpen(true)}
        onClose={() => setIsNavOpen(false)}
      >
        <MenuButton
          as={Button}
          w="100%"
          background="#0A0A0A !important"
          boxShadow="0px 2px 8px -4px white"
          color="#F2F2F2"
          borderRadius="5px"
          textDecoration="none"
          _hover={{ textDecoration: "none", backgroundColor: "#0A0A0A" }}
          _selected={{ backgroundColor: "#0A0A0A" }}
          _focus={{ textDecoration: "none", backgroundColor: "#0A0A0A" }}
          height="48px"
        >
          <Flex align="center" justify="space-between" fontSize="14">
            <Image
              boxSize="40px"
              objectFit="cover"
              src={icon}
              alt="logo"
              _hover={{ boxSize: "60px" }}
            />
            {/* {NavigationPageLabel} */}
            <Box position="relative" minW="80px" textAlign="center">
              <AnimatePresence mode="wait">
                <motion.span
                  key={NavigationPageLabel}
                  style={{ display: "inline-block" }}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.15 }}
                >
                  {NavigationPageLabel}
                </motion.span>
              </AnimatePresence>
            </Box>
            {isNavOpen ? (
              <motion.div
                animate={{ opacity: 1, scale: 1, rotate: [0, 0, 180, 0] }}
                transition={{ duration: 0.5 }}
              >
                <CloseIcon boxSize={6} />
              </motion.div>
            ) : (
              <HamburgerIcon boxSize={6} />
            )}
          </Flex>
        </MenuButton>
        <MenuList
          color="#F2F2F2"
          backgroundColor="#0A0A0A"
          border="0px"
          boxShadow="0px 0px 8px -4px white"
          borderRadius="5px"
          overflow="hidden"
          p={0}
        >
          <NavigationItem name="Home" url="/" isDisabled={false} />
          <NavigationItem name="Projects" url="/projects" isDisabled={false} />
          <NavigationItem name="Photo" url="/photo" isDisabled={false} />
          <MenuItem
            as="a"
            textAlign="center"
            fontSize="3xl"
            textStyle="secondary"
            backgroundColor="#0A0A0A"
            color="#F2F2F2"
          >
            <ChakraLink
              as={ReactRouterLink}
              to={Resume}
              target="newTab"
              width="100%"
              _hover={{ textDecoration: "none", color: "#494949" }}
            >
              Resumé
            </ChakraLink>
          </MenuItem>
          <SpotifyRecentlyPlayed
            currentTrack={{
              title: result.title,
              artist: result.artist,
              url: result.url,
            }}
          />
          <MenuItem
            id="navigation.footer"
            as="a"
            textStyle="secondary"
            p={0}
            pl={4}
            pr={2}
            backgroundColor="#0A0A0A"
          >
            <Flex justify="space-between" align="center" w="100%" pb={1}>
              <Flex align="center" color="#F2F2F2">
                <Icon as={MdCopyright} fontSize="12px" />
                <Text fontSize="12px" pl={1}>
                  2025
                </Text>
              </Flex>

              <Button
                size="xs"
                variant="ghost"
                color="#F2F2F2"
                onClick={toggleColorMode}
                _hover={{ bg: "transparent", color: "#797979" }}
                leftIcon={
                  <Icon as={colorMode === "light" ? MdDarkMode : MdLightMode} />
                }
              >
                {colorMode === "light" ? "Dark" : "Light"}
              </Button>
            </Flex>
          </MenuItem>
        </MenuList>
      </Menu>
    </Box>
  );
}
