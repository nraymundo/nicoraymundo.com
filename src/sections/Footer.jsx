import { Box, Image, useBreakpointValue } from "@chakra-ui/react";
import ContactLinkContainer from "../components/ContactLinkContainer";
import Globe3D from "../components/Globe3D";
import me from "../assets/me.png";

export default function Footer() {
  const globeHeight = useBreakpointValue({ base: "400px", sm: "500px" });

  return (
    <Box w="100%" mt={5} mb={5} pl={[5, 10]} pr={[5, 10]}>
      <Box h={0.8} mt={5} backgroundColor="#494949" />
      <ContactLinkContainer />
      <Box display="flex" justifyContent="flex-end" mt={20} w={"100%"}>
        <Box w={["100%", "50%"]}>
          <Globe3D
            style={{ height: globeHeight }}
            config={{
              showAtmosphere: true,
              atmosphereIntensity: 0.3,
              autoRotateSpeed: 0.5,
              markerSize: 10,
            }}
            markers={[
              {
                lat: 40.787,
                lng: -73.9754,
                src: me,
                label: "Me / NYC",
              },
            ]}
          />
        </Box>
      </Box>
    </Box>
  );
}
