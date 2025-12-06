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
  const textColor = useColorModeValue("#252627", "#F2F2F2");

  const MotionFlex = motion(Flex);
  const MotionSpan = motion.span;

  const iconVariants = {
    rest: { x: 0, y: 0 },
    hover: { x: 3, y: -3 },
  };

  return (
    <GridItem colSpan={[6, 2]}>
      <MotionFlex
        as="a"
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        color={textColor}
        textStyle="secondary"
        fontWeight={700}
        align="center"
        _hover={{ color: "#F0A202" }}
        initial="rest"
        whileHover="hover"
      >
        <Text
          _hover={{ textDecoration: "none", color: "#F0A202" }}
          _selection={{ color: "#F0A202" }}
        >
          {name}
        </Text>

        <MotionSpan
          variants={iconVariants}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          style={{ display: "inline-block" }}
        >
          <Icon as={MdOutlineArrowOutward} pl={1} />
        </MotionSpan>
      </MotionFlex>
    </GridItem>
  );
}
