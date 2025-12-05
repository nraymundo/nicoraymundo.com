import {
  Text,
  GridItem,
  Icon,
  Flex,
  useColorModeValue,
} from "@chakra-ui/react";
import { MdOutlineArrowOutward } from "react-icons/md";
import { motion } from "framer-motion";

export default function ContactLink({ name, url }) {
  const textColor = useColorModeValue("#252627", "#edede9");

  const MotionFlex = motion(Flex);

  return (
    <GridItem colSpan={[6, 2]}>
      <MotionFlex
        as="a"
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        color={textColor}
        textStyle="secondary"
        align="center"
        _hover={{ color: "#F0A202" }}
        whileHover={{ x: 3, y: -3 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <Text
          _hover={{ textDecoration: "none", color: "#F0A202" }}
          _selection={{ color: "#F0A202" }}
        >
          {name}
        </Text>
        <Icon as={MdOutlineArrowOutward} pl={1} />
      </MotionFlex>
    </GridItem>
  );
}
