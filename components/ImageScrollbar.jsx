import { useContext, useEffect } from "react";
import Image from "next/image";
import { Box, Icon, Flex, useMediaQuery } from "@chakra-ui/react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <Flex justifyContent="center" alignItems="center" marginRight="1">
      <Icon
        as={FaArrowAltCircleLeft}
        onClick={() => scrollPrev()}
        fontSize="2xl"
        cursor="pointer"
      />
    </Flex>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <Flex justifyContent="center" alignItems="center" marginRight="1">
      <Icon
        as={FaArrowAltCircleRight}
        onClick={() => scrollNext()}
        fontSize="2xl"
        cursor="pointer"
      />
    </Flex>
  );
};

const ImageScrollbar = ({ data }) => {
  const [mobile] = useMediaQuery('(max-width:450px)');

  useEffect(() => {}, [mobile]);

  return (
    <ScrollMenu
      LeftArrow={LeftArrow}
      RightArrow={RightArrow}
      style={{ overflow: "hidden" }}
    >
      {data.map((image) => (
        <Box
          key={image.id}
          width={mobile ? "380px" : "910px"}
          itemID={image.id}
          overflow="hidden"
          p="1"
        >
          <Image
            placeholder="blur"
            blurDataURL={image.url}
            src={image.url}
            width="1000px"
            height="500px"
            alt="property"
            sizes="(max-width:500px) 100px, (max-width):1023px 400px, 1000px"
          />
        </Box>
      ))}
    </ScrollMenu>
  );
};
export default ImageScrollbar;
