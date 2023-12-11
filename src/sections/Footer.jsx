import { Box } from "@chakra-ui/react"
import ContactLinkContainer from "../components/ContactLinkContainer";

export default function Footer() {
  return (
    <Box w='100%' mt={5} h='150px' pl={[5, 10]} pr={[5, 10]}>
      <Box h={0.8} mt={5} backgroundColor='#494949'/>
      <ContactLinkContainer />
    </Box>
  )
}
