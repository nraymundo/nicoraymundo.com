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
  Link
} from "@chakra-ui/react"
import { motion } from "framer-motion"
import { Link as ReactRouterLink, useLocation } from 'react-router-dom'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import Marquee from "react-fast-marquee";
import { MdCopyright } from "react-icons/md";
import { FaSpotify } from "react-icons/fa";
import icon from'../assets/icon.png';
import Resume from'../assets/resume.pdf';
// import Resume from "../assets/resume.pdf";
import getRecentlyPlayedInfo from "../SpotifyAPI";

function NavigationItem({ name, url, setCurrentForm, isDisabled }) {
  return (
    <MenuItem
      as="a" onClick={() => setCurrentForm(name)} textAlign='center'
      fontSize='3xl' textStyle='secondary'  backgroundColor='#0A0A0A'
      color='white' isDisabled={isDisabled}
    >
      <ChakraLink as={ReactRouterLink} to={url} width='100%' _hover={{ textDecoration: "none", color: '#494949' }}>
        {name}
      </ChakraLink>
    </MenuItem>
  )
}

function SpotifyRecentlyPlayed({currentTrack}) {
  return (
    <MenuItem as="a" textStyle='secondary' backgroundColor='#0A0A0A' color='white' pl={0} pr={0} width='100%'>
      <Link
        color='#797979' fontSize='15px' w={['40%', '30%']} borderTop='1px solid #494949' textAlign='center'
        borderBottom='1px solid #494949' borderRight='1px solid #494949' pt={2} pb={2}
        display='flex' justifyContent='center' alignItems='center' _hover={{ color: '#1DB954' }}
        href={currentTrack.url} target='_blank' rel="noopener noreferrer"
      >
        Now Playing
        <Icon as={FaSpotify} fontSize={[20, 14]} pl={1} />
      </Link>
      <LinkBox w={['60%', '70%']}>
        <LinkOverlay href={currentTrack.url} target='_blank' rel="noopener noreferrer">
          <Marquee
            style={{
              borderTop: '1px solid #494949',
              borderBottom: '1px solid #494949',
            }}
            speed={20}
          >
            <Text color='white' fontSize='15px' pt={2} pb={2} mr={20}>{currentTrack.title} - {currentTrack.artist}</Text>
          </Marquee>
        </LinkOverlay>
      </LinkBox>
    </MenuItem>
  )
}

export default function NavigationMenu({}) {
  const location = useLocation();
  const [currentForm, setCurrentForm] = useState(location.pathname.split('/')[1]);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const NavigationPageLabel = `/${currentForm.toUpperCase()}`;
  const [result, setResult] = useState({});
  
  useEffect(() => {
    Promise.all([
      getRecentlyPlayedInfo(),
    ]).then((results) => {
      setResult(results[0]);
    });
  }, []);

  return (
    <Box w={[350, 450]}>
      <Menu matchWidth={true} onOpen={() => setIsNavOpen(true)} onClose={() => setIsNavOpen(false)}>
        <MenuButton
          as={Button} w='100%' background='#0A0A0A !important' boxShadow='0px 2px 8px -4px white'
          color='white' borderRadius='5px' textDecoration='none'
          _hover={{ textDecoration: 'none', backgroundColor: '#0A0A0A' }}
          _selected={{ backgroundColor: '#0A0A0A' }}
          _focus={{ textDecoration: 'none', backgroundColor: '#0A0A0A' }}
          height='48px'
        >
          <Flex align='center' justify='space-between' fontSize='14'>
            <Image
              boxSize='40px'
              objectFit='cover'
              src={icon}
              alt='logo'
              _hover={{ boxSize: '60px'}}
            />
            {NavigationPageLabel}
            {isNavOpen ? (
              <motion.div
                animate={{ opacity: 1, scale: 1, rotate: [0, 0, 180, 0], }}
                transition={{ duration: 0.5 }}
              >
                <CloseIcon
                  boxSize={6}
                />
              </motion.div>
            ) : (
              <HamburgerIcon boxSize={6}/>
            )}
          </Flex>
        </MenuButton>
        <MenuList color='black' backgroundColor='#0A0A0A' border='0px' boxShadow='0px 0px 8px -4px white' borderRadius='5px' p={0}>
          <NavigationItem name='Home' url='/' setCurrentForm={setCurrentForm} isDisabled={false} />
          <NavigationItem name='Projects' url='/projects' setCurrentForm={setCurrentForm} isDisabled={false} />
          <MenuItem
            as="a" textAlign='center' fontSize='3xl' textStyle='secondary'
            backgroundColor='#0A0A0A' color='white'
          >
            <ChakraLink as={ReactRouterLink} to={Resume} target="newTab" width='100%' _hover={{ textDecoration: "none", color: '#494949' }}>
              Resumé
            </ChakraLink>
          </MenuItem>
          <MenuItem
            as="a" onClick={() => setCurrentForm('Photo')}
            textAlign='center' fontSize='3xl' textStyle='secondary'
            backgroundColor='#0A0A0A' color='white' isDisabled={true}
          >
            <Text textAlign='center' width='100%'>
              Photo<sup style={{ fontSize: '20px' }}>(WIP)</sup>
            </Text>
          </MenuItem>
          <SpotifyRecentlyPlayed currentTrack={{ title: result.title, artist: result.artist, url: result.url }} />
          <MenuItem as="a" textStyle='secondary' backgroundColor='#0A0A0A' color='white' p={0} pl={2}>
            <Flex justify='center' align='center' color='#797979' pb={1}>
              <Icon as={MdCopyright} fontSize='11px' />
              <Text color='#797979' fontSize='12px' pl={1}>2025 NICO RAYMUNDO</Text>
            </Flex>
          </MenuItem>
        </MenuList>
      </Menu>
    </Box>
  )
}