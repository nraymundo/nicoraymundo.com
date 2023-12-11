import { Box } from "@chakra-ui/react"
import NavigationMenu from "../components/NavigationMenu";

export default function Header() {
  return (
    <Box w='100%' color='white' display='flex' justifyContent='center' flexDirection='row' position='fixed' zIndex={1}>
      <NavigationMenu />
    </Box>
  )
}
