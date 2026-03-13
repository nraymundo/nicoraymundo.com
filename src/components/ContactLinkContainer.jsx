import { Box, Grid } from "@chakra-ui/react";
import ContactLink from "./ContactLink";

export default function ContactLinkContainer() {
  return (
    <Box textStyle="secondary">
      <Grid
        templateRows="repeat(2)"
        templateColumns="repeat(12, 1fr)"
        gap={5}
        mt={5}
      >
        <ContactLink name="GitHub" url="https://github.com/nraymundo" />
        <ContactLink
          name="LinkedIn"
          url="https://www.linkedin.com/in/nicolasraymundo/"
        />
        <ContactLink
          name="Instagram"
          url="https://www.instagram.com/nicoraymundo/"
        />
        <ContactLink name="Twitter" url="https://twitter.com/nicoraymundo2" />
        <ContactLink
          name="me@nicoraymundo.com"
          url="mailto:n@nicoraymundo.com"
        />
      </Grid>
    </Box>
  );
}
