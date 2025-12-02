import { Box, Text, Grid, GridItem, Link, useColorModeValue} from "@chakra-ui/react"
import AnimatedText from "../components/AnimatedText"

const introText = "Hi, I'm Nico. I'm a full-stack software engineer from the San Francisco Bay Area, currently in New York City and at American Express."
const aboutText = `I’m a software engineer who enjoys building clean, reliable web applications. I like taking ideas from concept to 
production and focusing on solutions that are simple, scalable, and easy to maintain.`
const aboutText2 = `I’ve worked across both web and mobile platforms and picked up experience with a variety of tools and frameworks 
along the way. I’m drawn to solving real problems, writing thoughtful code, and constantly improving how things work behind the scenes.`
const aboutText3 = `I'm currently working on enhancing the client onboarding experience at American Express. My role involves collaborating with
teams to design and implement solutions to streamline the onboarding process, ensuring a seamless and efficient journey for our clients.
Outside of work, I enjoy looking for new restaurants to try in the city, running the Central Park loop, and playing basketball and soccer.`

function CVGridHeader({rows, text, isSectionHeader}) {
  return (
    <GridItem rowSpan={rows} colSpan={[12, 2]}>
      <Box textAlign={'left'}>
        <Text fontSize='md' fontWeight={isSectionHeader ? 700 : 500} _selection={{ color: '#9DAE9E' }}>{text}</Text>
      </Box>
    </GridItem>
  )
}

function CVGridInfo({positions, dates}) {
  return (
    <GridItem colSpan={[12, 8]}>
      <Grid
        templateRows='repeat(1, 1fr)'
        templateColumns={['repeat(12, 1fr)', 'repeat(8, 1fr)']}
        gap={4}
      >
        <GridItem rowSpan={2} colSpan={[8, 6]}>
          {positions}
        </GridItem>
        <GridItem rowSpan={2} colSpan={[4, 2]}>
          {dates}
        </GridItem>
      </Grid>
    </GridItem>
  )
}

export default function About() {
  const bg = useColorModeValue("#edede9", "#0A0A0A");
  const textColor = useColorModeValue("#252627", "#edede9");

  return (
    <Box w='100%' color={textColor} mt={[10, 20]} bg={bg} pt={5} pl={[5, 10]} pr={[5, 10]}>
      <Box fontSize={['3xl', '6xl']} textStyle='primary' _selection={{ color: '#9DAE9E' }} textAlign='left'>
        <AnimatedText text={introText} />
        {/* {introText} */}
        {/* {' '}
        <Link href='#' _hover={{ textDecoration:'none', color: '#016FD0' }} _selection={{ color: '#016FD0' }} textStyle='secondary' fontWeight={700}>
          American Express
        </Link> */}
        {/* . */}
      </Box>
      <Box h={0.8} mt={5} backgroundColor='#494949'/>
      <Box textStyle='secondary'>
        <Grid
          templateRows='repeat(2)'
          templateColumns='repeat(12, 1fr)'
          gap={5}
          mt={5}
        >
          <GridItem colSpan={[12, 4]}>
            <Box textAlign={'left'}>
              <Text fontSize='md' fontWeight={700} _selection={{ color: '#9DAE9E' }}>About</Text>
            </Box>
          </GridItem>
          <GridItem colSpan={[12, 6]}>
            <Box textAlign={'left'}>
              <Text fontSize='md' _selection={{ color: '#9DAE9E' }} fontWeight={300}>{aboutText}</Text>
              <br />
              <Text fontSize='md' _selection={{ color: '#9DAE9E' }} fontWeight={300}>{aboutText2}</Text>
              <br />
              <Text fontSize='md' _selection={{ color: '#9DAE9E' }} fontWeight={300}>{aboutText3}</Text>
            </Box>
          </GridItem>
        </Grid>
      </Box>
      <Box h={0.8} mt={5} backgroundColor='#494949'/>
      <Box textStyle='secondary'>
        <Grid
          templateRows={['repeat(5)', 'repeat(2)']}
          templateColumns='repeat(12, 1fr)'
          gap={5}
          mt={5}
        >
          <CVGridHeader rows={[1, 2]} isSectionHeader={true} text='Curriculum Vitae' />
          <CVGridHeader rows={1} text='American Express' />
          <CVGridInfo
            positions={(
              <Box textAlign={'left'}>
                <Text fontSize='md' _selection={{ color: '#9DAE9E' }} fontWeight={300}>Engineer II</Text>
                <Text fontSize='md' mt={5} _selection={{ color: '#9DAE9E' }} fontWeight={300}>Engineer I</Text>
              </Box>
            )}
            dates={(
              <Box textAlign={'left'}>
                <Text fontSize='md' _selection={{ color: '#9DAE9E' }} fontWeight={300}>2023 - Present</Text>
                <Text fontSize='md' mt={5} _selection={{ color: '#9DAE9E' }} fontWeight={300}>2021 - 2023</Text>
              </Box>
            )}
          />
          <CVGridHeader rows={1} text='Loyola Marymount University' />
          <CVGridInfo
            positions={(
              <Box textAlign={'left'}>
                <Text fontSize='md' _selection={{ color: '#9DAE9E' }} fontWeight={300}>Bachelor of Arts, Computer Science</Text>
              </Box>
            )}
            dates={(
              <Box textAlign={'left'}>
                <Text fontSize='md' _selection={{ color: '#9DAE9E' }} fontWeight={300}>2017 - 2021</Text>
              </Box>
            )}
          />
        </Grid>
      </Box>
    </Box>
  )
}
