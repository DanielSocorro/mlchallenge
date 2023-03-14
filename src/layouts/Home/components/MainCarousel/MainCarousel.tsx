import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { Box, HStack, Icon, Img, Square } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import img1 from "./images/img-1.webp";
import img2 from "./images/img-2.webp";
import img3 from "./images/img-3.webp";
import img4 from "./images/img-4.webp";
import img5 from "./images/img-5.webp";
import MediaQuery from "react-responsive";

function MainCarousel() {
  const [pos, setPos] = useState(0);
  const images = [img1, img2, img3, img4, img5];

  useEffect(() => {
    const container = document.getElementById("slider__imgs-container");
    if (container) {
      container.style.left = `-${pos}%`;
    }
  }, [pos]);

  function handleDecrease() {
    if (pos === 0) {
      setPos((images.length - 1) * 100);
    } else {
      setPos(pos - 100);
    }
  }
  function handleIncrease() {
    if (pos === (images.length - 1) * 100) {
      setPos(0);
    } else {
      setPos(pos + 100);
    }
  }

  return (
    <>
      <MediaQuery minWidth={815}>
        <Box
          width={"100%"}
          position={"relative"}
          overflow="hidden"
          margin={"auto"}
          maxWidth={"1600px"}
        >
          <Box width={"100%"} margin={"auto"}>
            <Box  whiteSpace={"nowrap"} display="flex" overflow={"hidden"}
            id="slider__imgs-container"
            >
              {images.map((img) => (
                <Img
                  whiteSpace={"normal"}
                  key={img}
                  src={img}
                  position="relative"
                  transition={"transform 0.3s ease"}
                  transform={`translateX(-${pos}%)`}
                />
              ))}
            </Box>
          </Box>
          <HStack
            justifyContent={"space-between"}
            w="100%"
            position={"absolute"}
            top="0"
            bottom={"0"}
            left="0"
            right={"0"}
            margin="auto"
          >
            <Square
             fontSize={"40px"}
              size={"100px"}
              bg="#fff"
              borderRadius={"50%"}
              boxShadow="md"
              position={"relative"}
              left="-50px"
              cursor={"pointer"}
              onClick={handleDecrease}
              _hover={{ boxShadow: "lg" }}
              transition="left 0.5s ease"
            >
              <ChevronLeftIcon position="relative" left={"20px"} />
            </Square>
            <Square
            fontSize={"40px"}
              size={"100px"}
              bg="#fff"
              borderRadius={"50%"}
              boxShadow="md"
              position={"relative"}
              right="-50px"
              _hover={{ boxShadow: "lg" }}
              transition="left 0.5s ease"
              cursor={"pointer"}
              onClick={handleIncrease}
            >
              <ChevronRightIcon position="relative" right={"20px"} />
            </Square>
          </HStack>
        </Box>
      </MediaQuery>
      <MediaQuery maxWidth={815}>
        <Box
          width={"100%"}
          position={"relative"}
          overflow="hidden"
          margin={"auto"}
        >
          <Box margin={"auto"}>
            <Box
              h={"170px"}
              whiteSpace={"nowrap"}
              display="flex"
              overflow={"hidden"}
            >
              {images.map((img) => (
                <Img
                  h="100%"
                  whiteSpace={"normal"}
                  key={img}
                  src={img}
                  position="relative"
            
            
           
                />
              ))}
            </Box>
          </Box>
          <HStack
            justifyContent={"space-between"}
            w="100%"
            position={"absolute"}
            top="0"
            bottom={"0"}
            left="0"
            right={"0"}
            margin="auto"
          >
            <ChevronLeftIcon
              cursor={"pointer"}
              onClick={handleDecrease}
              position="relative"
              left={"20px"}
            />

            <ChevronRightIcon
              cursor={"pointer"}
              onClick={handleIncrease}
              position="relative"
              right={"20px"}
            />
          </HStack>
        </Box>
      </MediaQuery>
    </>
  );
}

export default MainCarousel;

