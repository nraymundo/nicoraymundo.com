import { Box, Flex, Text, IconButton, Link, useColorModeValue } from "@chakra-ui/react"
import { motion } from "framer-motion"
import { FaGithub } from "react-icons/fa";

export default function ProjectCard({name, year, description, tech, image, githubUrl}) {
  const textColor = useColorModeValue("#252627", "#edede9");

  return (
    <Box w={['100%', '90%']} color={textColor}>
      <Flex justify='space-between' align='center' mt={2}>
        <Text textStyle='secondary' fontSize={['xl', '4xl']} whiteSpace='nowrap' fontWeight={700}>{name}</Text>
        <motion.div
          initial={{ width: 0 }} whileInView={{ width: '100%' }}
          style={{ height: 0.8, backgroundColor: '#494949', marginLeft: 15, marginRight: 15 }}
          transition={{
            duration: 1,
          }}
        />
        <Text textStyle='secondary' fontSize={['xl', '4xl']} fontWeight={700}>{year}</Text>
      </Flex>
      {image}
      <Text textStyle='secondary' fontSize={['md', 'lg']} mt={2} textAlign='left' fontWeight={300}>{description}</Text>
      <Flex justify='space-between' align='center' mt={2}>
        {tech}
        <motion.div
          initial={{ width: 0 }} whileInView={{ width: '100%' }}
          style={{ height: 0.8, backgroundColor: '#494949', marginLeft: 15, marginRight: 15  }}
          transition={{
            duration: 1,
          }}
        />
        <Link
          href={githubUrl} target='_blank' rel="noopener noreferrer"
        >
          <IconButton
            isRound={true}
            aria-label='GitHub'
            fontSize='xl'
            size='sm'
            icon={<FaGithub />}
            color="252627"
            colorScheme='black'
          />
        </Link>
      </Flex>
    </Box>
  )
}