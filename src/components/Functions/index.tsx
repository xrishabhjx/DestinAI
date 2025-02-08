import { StargateColors } from "#/src/utils/Colors";
import { Flex, Grid, GridItem, Heading } from "@chakra-ui/react";
import React from "react";

const Functions = () => {
  const GridItemStyles = {
    color: "white",
    rounded: 32,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    w: "100%",
    h: "100%",
    minH: {
      base: "150px",
      md: "300px",
    },
    transition: "all 0.25s ease",
    _hover: {
      shadow: "md",
    },
  };

  return (
    <Flex
      id="functions"
      direction={"column"}
      justify={"center"}
      align={"center"}
      my={24}
      px={2}
      maxW={1200}
      mx={"auto"}
    >
      <Grid
        templateRows="repeat(3, 1fr)"
        templateColumns={{
          base: "repeat(2, 1fr)",
          md: "repeat(3, 1fr)",
        }}
        gap={4}
        w={"100%"}
      >
        <GridItem
          colSpan={2}
          rowSpan={1}
          {...GridItemStyles}
          bgImage={"url(https://thefusioneer.com/wp-content/uploads/2023/11/5-AI-Advancements-to-Expect-in-the-Next-10-Years-scaled.jpeg)"}
          bgColor={StargateColors.lightGrey}
          bgSize={"cover"}
          bgRepeat={"no-repeat"}
          bgPosition={"center"}
        ></GridItem>
        <GridItem
          colSpan={1}
          rowSpan={1}
          {...GridItemStyles}
          bgImage={"url(https://assets-us-01.kc-usercontent.com/469992e5-7cbd-0032-ead4-f2db9237053a/9ae682d7-e431-4216-b0df-e929aacbda72/how-to-use-personality-tests-in-the-workplace.jpg?fm=webp&q=25)"}
          bgSize={"cover"}
          bgRepeat={"no-repeat"}
          bgPosition={"center"}
        ></GridItem>
        <GridItem
          colSpan={1}
          rowSpan={{
            base: 1,
            md: 2,
          }}
          {...GridItemStyles}
          bgImage={"url(https://i0.wp.com/longtermhabits.com/wp-content/uploads/2021/04/10-books-self-discovery-awareness.jpg?fit=1200%2C628&ssl=1)"}
          bgSize={"cover"}
          bgRepeat={"no-repeat"}
          bgPosition={"bottom"}
          bgColor={"#282c34"}
        ></GridItem>
        <GridItem
          colSpan={1}
          rowSpan={1}
          {...GridItemStyles}
          bgImage={"url(https://resources.scrumalliance.org/uploads/2023/11/15/Roadmap-1200-ghj7Lrk40SLjQuFY1IhSA.png)"}
          bgSize={"cover"}
          bgRepeat={"no-repeat"}
          bgPosition={"center"}
          bgColor={"#70115C"}
        ></GridItem>
        <GridItem
          colSpan={1}
          rowSpan={1}
          {...GridItemStyles}
          bgImage={"url(https://jobready.ie/wp-content/uploads/2024/01/The-Career-Plan.webp)"}
          bgSize={"cover"}
          bgRepeat={"no-repeat"}
          bgPosition={"center"}
          bgColor={"#262626"}
        ></GridItem>
        <GridItem
          colSpan={2}
          rowSpan={1}
          {...GridItemStyles}
          bgImage={"url(https://usabilitygeek.com/wp-content/uploads/2017/09/ux-competitor-analysis-lead.jpg)"}
          bgSize={"cover"}
          bgRepeat={"no-repeat"}
          bgPosition={"center"}
          bgColor={StargateColors.lightGrey}
        ></GridItem>
      </Grid>
    </Flex>
  );
};

export default Functions;
