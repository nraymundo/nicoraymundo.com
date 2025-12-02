import { Box, Text, Grid, GridItem, Link} from "@chakra-ui/react"
import AnimatedText from "../components/AnimatedText"

const introText = "Hi, I'm Nico. I'm a full-stack software engineer from the San Francisco Bay Area, currently in New York City and at"
const aboutText = `I'm a software engineer with a love for crafting cutting-edge web applications. I approach my work with the goal of turning ideas
into functional realities, and revel in the challenge of architecting robust and scalable web solutions.`
const aboutText2 = `With years of experience working with web and mobile-based applications, I've been able to learn about and utilize a range of diverse
technologies and frameworks. I thrive on the dynamic intersection of creativity and technology, and am fueled by a genuine enthusiasm for solving
complex problems and a commitment to delivering elegant solutions.`
const aboutText3 = `I'm currently working on enhancing the client onboarding experience at American Express. My role involves collaborating with talented
teams to design and implement innovative solutions to streamline the onboarding process, ensuring a seamless and efficient journey for our clients.
Outside of work, I enjoy walking around New York City with my camera, running the Central Park loop, and playing basketball and soccer.`

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
  return (
    <Box w='100%' color='#252627' mt={[10, 20]} bg='#edede9' pt={5} pl={[5, 10]} pr={[5, 10]}>
      <Box fontSize={['3xl', '6xl']} textStyle='primary' _selection={{ color: '#9DAE9E' }} textAlign='left'>
        {introText}
        {' '}
        <Link href='#' _hover={{ textDecoration:'none', color: '#016FD0' }} _selection={{ color: '#016FD0' }} textStyle='secondary' fontWeight={700}>
          American Express
        </Link>
        .
        {/* <AnimatedText delay={0} text={introText} /> */}
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
          <GridItem colSpan={[12, 5]}>
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
